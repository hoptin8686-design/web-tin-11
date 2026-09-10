# Ôn Luyện Tin Học 11 — THPT Phục Hòa (Định hướng ICT)

Trang web hỗ trợ học sinh tự học và ôn luyện môn Tin học lớp 11 theo Chương trình Giáo dục phổ thông 2018 (SGK Kết nối tri thức với cuộc sống, định hướng Tin học ứng dụng ICT).

---

## 🌟 Tính năng nổi bật

1. **Giao diện chuẩn phân phối chương trình**:
   - Bao quát toàn bộ **7 Chủ đề** và **31 Bài học** theo Kế hoạch dạy học của Trường THPT Phục Hòa.
   - Thống kê bài đã làm, điểm cao nhất và gắn sao vinh danh ⭐ khi đạt từ **80%** trở lên.
   - Toàn bộ dữ liệu tiến độ được lưu tự động trong `localStorage` của trình duyệt, không cần tài khoản hay cơ sở dữ liệu phức tạp.

2. **Mỗi bài học gồm 3 dạng câu hỏi trọng tâm**:
   - **Trắc nghiệm 4 phương án**: Tự động trộn ngẫu nhiên câu hỏi và đáp án mỗi lượt làm, chấm điểm ngay, giải thích chi tiết từng câu và lọc danh sách câu sai để ôn tập lại.
   - **Đúng / Sai 4 mệnh đề**: Đúng cấu trúc định dạng D2 đề thi tốt nghiệp THPT mới nhất của Bộ GD&ĐT (lời dẫn tình huống thực tế 3-5 dòng, 4 mệnh đề độc lập, thang điểm 0.1đ - 0.25đ - 0.5đ - 1.0đ).
   - **Tự luận & Vận dụng có gợi ý**: Có ô nháp cho học sinh tự soạn thảo ý tưởng trước khi bấm đối chiếu với gợi ý đáp án chuẩn.

3. **Phòng thi thử tốt nghiệp THPT trực tuyến**:
   - Đồng hồ bấm giờ đếm ngược 45 phút.
   - Đề thi tích hợp đầy đủ cả 3 phần: Trắc nghiệm, Đúng/Sai và Tự luận.
   - Tự động chấm điểm tổng kết và xếp loại.

4. **Nộp kết quả về Google Sheets (Bảo vệ đa tầng)**:
   - Tích hợp API Route `/api/submit` nhận điểm từ học sinh và đồng bộ về Google Sheets của giáo viên.
   - Cơ chế bảo vệ: Kiểm tra tiêu đề `Origin` khớp tên miền, giới hạn tần suất gửi (Rate Limiting theo IP), kiểm tra chặt chẽ độ dài và kiểu dữ liệu gửi lên.

---

## 💻 Hướng dẫn chạy tại máy (Local Development)

Dự án sử dụng **Node.js LTS (v24.x)** và **Next.js 14 App Router**.

1. Cài đặt các gói thư viện:
   ```bash
   npm install
   ```

2. Khởi chạy máy chủ phát triển ở cổng 3005:
   ```bash
   npm run dev
   ```
   Hoặc truy cập: [http://localhost:3005](http://localhost:3005)

3. Biên dịch bản chính thức (Production Build):
   ```bash
   npm run build
   npm start
   ```

---

## 📂 Cấu trúc thư mục

```
Web-tin-11/
├── app/
│   ├── api/submit/route.ts      # API nhận điểm gửi về Google Sheets (Bảo vệ Origin + Rate limit)
│   ├── luyen/[baiId]/page.tsx   # Trang một bài học (nạp cả 3 dạng luyện tập)
│   ├── thi-thu/page.tsx         # Trang thi thử tốt nghiệp THPT bấm giờ
│   ├── globals.css              # Phong cách giao diện Tailwind CSS
│   ├── layout.tsx               # Khung sườn website, Header & Footer
│   └── page.tsx                 # Trang chủ hiển thị 7 chủ đề và tiến độ
├── components/
│   ├── Header.tsx               # Thanh điều hướng thương hiệu THPT Phục Hòa
│   ├── HomeClient.tsx           # Accordion 7 chủ đề, thanh thống kê sao ⭐
│   ├── LessonClient.tsx         # Menu chuyển tab 3 dạng luyện tập
│   ├── QuizClient.tsx           # Dạng trắc nghiệm 4 lựa chọn (đảo đề, chấm điểm, pháo hoa)
│   ├── TrueFalseQuiz.tsx        # Dạng Đúng/Sai 4 mệnh đề chuẩn quy chế thi THPT
│   ├── EssayViewer.tsx          # Dạng Tự luận có ô nháp & xem gợi ý
│   └── ExamClient.tsx           # Phòng thi thử 45 phút nộp điểm
├── data/
│   ├── curriculum.ts            # Khung 7 chủ đề và 31 bài theo KHGD THPT Phục Hòa
│   ├── questions/
│   │   └── bai-01.ts            # Ngân hàng trắc nghiệm Bài 1 (Hệ điều hành)
│   └── extra/
│       └── bai-01.ts            # Ngân hàng Đúng/Sai & Tự luận Bài 1
├── lib/
│   ├── types.ts                 # Định nghĩa kiểu dữ liệu TypeScript
│   ├── questions.ts             # Đăng ký QUESTION_BANK và hàm shuffleQuiz
│   ├── extras.ts                # Đăng ký EXTRA_BANK
│   └── progress.ts              # Quản lý localStorage (sao ⭐ khi ≥80%)
└── README.md                    # Tài liệu hướng dẫn sử dụng và triển khai
```

---

## ✏️ Cách thêm hoặc sửa câu hỏi cho các bài tiếp theo

1. **Tạo file trắc nghiệm**: Tạo file `data/questions/bai-XX.ts` theo mẫu:
   ```ts
   import { Question } from "@/lib/types";
   export const questionsBaiXX: Question[] = [
     {
       id: "bXX-01",
       q: "Nội dung câu hỏi?",
       options: ["Đáp án đúng", "Sai 1", "Sai 2", "Sai 3"],
       answer: 0,
       explain: "Giải thích ngắn gọn...",
     },
   ];
   ```
2. **Tạo file Đúng/Sai & Tự luận**: Tạo file `data/extra/bai-XX.ts` theo mẫu:
   ```ts
   import { LessonExtra } from "@/lib/types";
   export const extraBaiXX: LessonExtra = {
     tf: [
       {
         id: "bXX-tf1",
         context: "Lời dẫn tình huống 3-5 dòng...",
         statements: [
           { text: "Mệnh đề a...", answer: true, explain: "Vì sao đúng." },
           { text: "Mệnh đề b...", answer: false, explain: "Vì sao sai." },
           { text: "Mệnh đề c...", answer: true, explain: "Vì sao đúng." },
           { text: "Mệnh đề d...", answer: false, explain: "Vì sao sai." },
         ],
       },
     ],
     essay: [
       { id: "bXX-es1", q: "Đề bài tự luận...", answer: "Gợi ý đáp án..." },
     ],
   };
   ```
3. **Đăng ký bài mới**:
   - Thêm vào `lib/questions.ts` (mục `QUESTION_BANK`).
   - Thêm vào `lib/extras.ts` (mục `EXTRA_BANK`).
   - Đổi `available: true` cho bài đó trong `data/curriculum.ts`.

---

## 🚀 Hướng dẫn Triển khai Lên Vercel (Miễn phí 100%)

### Bước 1: Đẩy mã nguồn lên GitHub
Mở terminal trong thư mục `Web-tin-11`:
```bash
git init
git add .
git commit -m "Khoi tao web on luyen Tin hoc 11 THPT Phuc Hoa"
git branch -M main
git remote add origin https://github.com/<tai-khoan-cua-ban>/web-tin-11.git
git push -u origin main
```

### Bước 2: Liên kết với Vercel
1. Đăng nhập [Vercel](https://vercel.com) bằng tài khoản GitHub.
2. Bấm **"Add New..."** ➔ Chọn **"Project"**.
3. Chọn kho chứa `web-tin-11` từ danh sách GitHub và bấm **"Import"**.
4. Khung cài đặt Framework giữ nguyên **Next.js**.
5. (Tuỳ chọn) Nếu muốn lưu điểm về Google Sheets, thêm biến môi trường:
   - `GOOGLE_SHEET_WEBHOOK_URL` = Đường dẫn URL Web App từ Google Apps Script của bạn.
6. Bấm nút **"Deploy"**. Trong vòng 1 phút, trang web sẽ hoạt động chính thức với đường dẫn miễn phí dạng: `https://web-tin-11-xxx.vercel.app`.
