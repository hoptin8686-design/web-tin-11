"use client";

interface TheoryViewerProps {
  onStartQuiz: () => void;
}

export default function TheoryViewer({ onStartQuiz }: TheoryViewerProps) {
  return (
    <div className="space-y-6 animate-fade-in-up">
      {/* Overview Banner */}
      <div className="quiz-card p-5 space-y-2 border-l-4 border-l-[#2dd4bf]">
        <div className="flex items-center gap-2 text-[#2dd4bf] font-bold text-sm">
          <span>💡</span>
          <span>MỤC TIÊU BÀI HỌC</span>
        </div>
        <p className="text-sm text-[#cbd5e1] leading-relaxed">
          Nắm vững khái niệm, vai trò trung gian và các chức năng chính của hệ điều hành;
          hiểu được lịch sử phát triển từ giao diện dòng lệnh (CLI) sang giao diện đồ hoạ (GUI);
          nhận biết đặc điểm các hệ điều hành phổ biến cho máy tính (Windows, Linux, macOS) và thiết bị di động (Android, iOS).
        </p>
      </div>

      {/* Section 1 */}
      <div className="quiz-card space-y-3">
        <h3 className="text-base font-bold text-[#f1f5f9] flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-[#162c3b] text-[#2dd4bf] flex items-center justify-center text-xs">1</span>
          Khái niệm và vai trò của Hệ điều hành (Operating System - OS)
        </h3>
        <div className="text-sm text-[#94a3b8] space-y-2 leading-relaxed">
          <p>
            <strong className="text-[#f1f5f9]">Hệ điều hành</strong> là tập hợp các chương trình hệ thống đóng vai trò cầu nối trung gian giữa phần cứng máy tính và người dùng cũng như các phần mềm ứng dụng.
          </p>
          <div className="grid sm:grid-cols-2 gap-3 pt-2">
            <div className="p-3 rounded-lg bg-[#070e16] border border-[#162c3a] space-y-1">
              <span className="font-semibold text-xs text-[#38bdf8]">Quản lí tài nguyên phần cứng</span>
              <p className="text-xs text-[#7591a3]">
                Phân phối CPU, bộ nhớ RAM, thiết bị ngoại vi và kiểm soát các tiến trình đang thực thi.
              </p>
            </div>
            <div className="p-3 rounded-lg bg-[#070e16] border border-[#162c3a] space-y-1">
              <span className="font-semibold text-xs text-[#2dd4bf]">Tổ chức và quản lí tệp</span>
              <p className="text-xs text-[#7591a3]">
                Lưu trữ, tổ chức dữ liệu theo cấu trúc cây thư mục (File System) và kiểm soát quyền truy cập.
              </p>
            </div>
            <div className="p-3 rounded-lg bg-[#070e16] border border-[#162c3a] space-y-1">
              <span className="font-semibold text-xs text-[#fb923c]">Giao diện người - máy</span>
              <p className="text-xs text-[#7591a3]">
                Cung cấp môi trường để người dùng ra lệnh, tương tác qua dòng lệnh (CLI) hoặc đồ hoạ (GUI).
              </p>
            </div>
            <div className="p-3 rounded-lg bg-[#070e16] border border-[#162c3a] space-y-1">
              <span className="font-semibold text-xs text-[#a78bfa]">Môi trường chạy ứng dụng</span>
              <p className="text-xs text-[#7591a3]">
                Cung cấp các hàm API và dịch vụ hệ thống để các phần mềm ứng dụng hoạt động ổn định.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="quiz-card space-y-3">
        <h3 className="text-base font-bold text-[#f1f5f9] flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-[#162c3b] text-[#2dd4bf] flex items-center justify-center text-xs">2</span>
          Lịch sử phát triển và phân loại hệ điều hành
        </h3>
        <div className="text-sm text-[#94a3b8] space-y-2 leading-relaxed">
          <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
            <li>
              <strong className="text-[#f1f5f9]">Thời kì đầu (Dòng lệnh CLI):</strong> MS-DOS, UNIX cổ điển — người dùng phải ghi nhớ câu lệnh chính xác để thao tác.
            </li>
            <li>
              <strong className="text-[#f1f5f9]">Kỷ nguyên giao diện đồ hoạ (GUI):</strong> Windows 95, Windows XP, Windows 10/11, macOS — tương tác trực quan bằng chuột, cửa sổ, biểu tượng icon.
            </li>
            <li>
              <strong className="text-[#f1f5f9]">Đơn nhiệm và Đa nhiệm:</strong> Hệ điều hành hiện đại hầu hết là hệ thống đa nhiệm (Multitasking), đa người dùng (Multiuser) cho phép nhiều chương trình cùng chạy đồng thời.
            </li>
          </ul>
        </div>
      </div>

      {/* Section 3 */}
      <div className="quiz-card space-y-3">
        <h3 className="text-base font-bold text-[#f1f5f9] flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-[#162c3b] text-[#2dd4bf] flex items-center justify-center text-xs">3</span>
          Hệ điều hành trên thiết bị di động thông minh
        </h3>
        <div className="text-sm text-[#94a3b8] space-y-2 leading-relaxed">
          <p>
            Các thiết bị thông minh (smartphone, tablet) đòi hỏi hệ điều hành có tính chất đặc thù:
          </p>
          <div className="grid sm:grid-cols-2 gap-3 pt-1">
            <div className="p-3 rounded-lg bg-[#070e16] border border-[#162c3a]">
              <span className="font-bold text-sm text-[#22c55e]">Android (Google)</span>
              <p className="text-xs text-[#7591a3] mt-1">
                Phát triển trên nhân Linux, mã nguồn mở, độ tuỳ biến cao, hệ sinh thái thiết bị phong phú và thị phần số 1 toàn cầu.
              </p>
            </div>
            <div className="p-3 rounded-lg bg-[#070e16] border border-[#162c3a]">
              <span className="font-bold text-sm text-[#38bdf8]">iOS (Apple)</span>
              <p className="text-xs text-[#7591a3] mt-1">
                Độc quyền cho iPhone, mã nguồn đóng, độ bảo mật và tính ổn định cao, tối ưu hoá phần cứng cực kì mượt mà.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Summary & Action */}
      <div className="p-5 rounded-xl bg-gradient-to-r from-[#0c1e2b] to-[#132a39] border border-[#193a4e] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1 text-center sm:text-left">
          <span className="text-xs font-bold uppercase tracking-wider text-[#2dd4bf]">
            Đã đọc xong lý thuyết?
          </span>
          <h4 className="font-bold text-base text-[#f1f5f9]">
            Hãy kiểm tra ngay mức độ ghi nhớ kiến thức
          </h4>
        </div>
        <button onClick={onStartQuiz} className="btn-gradient-pill shrink-0">
          Luyện trắc nghiệm ngay →
        </button>
      </div>
    </div>
  );
}
