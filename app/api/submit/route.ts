import { NextRequest, NextResponse } from "next/server";

// Rate limiting đơn giản trong bộ nhớ (In-memory Rate Limiting theo IP)
const rateLimitMap = new Map<string, { count: number; expiresAt: number }>();

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 phút
const MAX_REQUESTS_PER_WINDOW = 10;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || record.expiresAt < now) {
    rateLimitMap.set(ip, { count: 1, expiresAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  record.count += 1;
  return false;
}

export async function POST(req: NextRequest) {
  try {
    // 1. Kiểm tra bảo vệ Origin (chống CSRF / lạm dụng từ trang web khác)
    const origin = req.headers.get("origin");
    const host = req.headers.get("host");

    if (origin && host) {
      try {
        const originHost = new URL(origin).host;
        // Chỉ chấp nhận request nếu Origin trùng với Host hiện tại hoặc localhost trong môi trường dev
        if (originHost !== host && !originHost.includes("localhost") && !originHost.includes("127.0.0.1")) {
          return NextResponse.json(
            { success: false, message: "Yêu cầu bị từ chối do không đúng tên miền hợp lệ." },
            { status: 403 }
          );
        }
      } catch {
        return NextResponse.json(
          { success: false, message: "Origin header không hợp lệ." },
          { status: 403 }
        );
      }
    }

    // 2. Kiểm tra Rate Limiting theo IP
    const clientIp =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "127.0.0.1";

    if (isRateLimited(clientIp)) {
      return NextResponse.json(
        { success: false, message: "Bạn đã nộp bài quá nhiều lần. Vui lòng chờ ít phút trước khi thử lại." },
        { status: 429 }
      );
    }

    // 3. Phân tích và kiểm tra chặt chẽ tính hợp lệ của dữ liệu (Validation)
    const body = await req.json();
    const {
      studentName,
      className,
      examType,
      score,
      totalPoints,
      percentage,
      timeSpentSeconds,
      submittedAt,
    } = body;

    // Kiểm tra kiểu dữ liệu và độ dài an toàn
    if (
      typeof studentName !== "string" ||
      studentName.trim().length === 0 ||
      studentName.length > 60
    ) {
      return NextResponse.json(
        { success: false, message: "Tên học sinh không hợp lệ hoặc quá dài." },
        { status: 400 }
      );
    }

    if (
      typeof className !== "string" ||
      className.trim().length === 0 ||
      className.length > 30
    ) {
      return NextResponse.json(
        { success: false, message: "Tên lớp không hợp lệ." },
        { status: 400 }
      );
    }

    if (typeof score !== "number" || isNaN(score) || score < 0 || score > 100) {
      return NextResponse.json(
        { success: false, message: "Điểm số không hợp lệ." },
        { status: 400 }
      );
    }

    const payload = {
      studentName: studentName.trim(),
      className: className.trim(),
      examType: typeof examType === "string" ? examType.slice(0, 50) : "Ôn luyện Tin 11",
      score,
      totalPoints: typeof totalPoints === "number" ? totalPoints : 10,
      percentage: typeof percentage === "number" ? percentage : Math.round((score / 10) * 100),
      timeSpentSeconds: typeof timeSpentSeconds === "number" ? timeSpentSeconds : 0,
      submittedAt: submittedAt || new Date().toISOString(),
      clientIp,
    };

    // 4. Gửi dữ liệu về Google Sheets Webhook (nếu có cấu hình GOOGLE_SHEET_WEBHOOK_URL)
    const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      } catch (webhookErr) {
        console.error("Lỗi khi gửi dữ liệu sang Google Sheet webhook:", webhookErr);
      }
    }

    // Luôn trả về phản hồi an toàn, thân thiện, không lộ cấu trúc nội bộ
    return NextResponse.json({
      success: true,
      message: "Ghi nhận kết quả thành công!",
      data: {
        studentName: payload.studentName,
        score: payload.score,
        percentage: payload.percentage,
      },
    });
  } catch {
    // Không trả chi tiết stack trace ra bên ngoài để bảo vệ hệ thống
    return NextResponse.json(
      { success: false, message: "Đã xảy ra lỗi khi tiếp nhận kết quả. Vui lòng thử lại sau." },
      { status: 500 }
    );
  }
}
