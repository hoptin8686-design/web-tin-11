"use client";

interface SgkViewerProps {
  onBack?: () => void;
}

export default function SgkViewer({ onBack }: SgkViewerProps) {
  return (
    <div className="space-y-6 animate-fade-in-up pb-10">
      {/* Control bar */}
      <div className="flex items-center justify-between gap-3 p-4 rounded-xl bg-[#0c1a24] border border-[#162c3a] shadow-lg sticky top-4 z-10">
        <div className="flex items-center gap-3 text-sm text-[#7591a3]">
          {onBack && (
            <button onClick={onBack} className="pill-link mr-2">
              ← Menu
            </button>
          )}
          <span className="hidden sm:inline">📘</span>
          <span className="font-bold text-[#f1f5f9]">SGK Tin học 11 (KNTT)</span>
          <span className="hidden sm:inline">·</span>
          <span className="text-teal-400 font-medium">BÀI 1</span>
        </div>
      </div>

      {/* HTML Content replacing the PDF */}
      <div className="bg-[#ffffff] text-[#1e293b] rounded-2xl p-6 sm:p-10 shadow-2xl border border-[#e2e8f0] font-serif leading-relaxed max-w-4xl mx-auto">
        <div className="border-b-4 border-blue-600 pb-6 mb-8">
          <div className="flex items-center gap-4 mb-2">
            <span className="text-6xl font-black text-blue-600 tracking-tighter">1</span>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight uppercase">
                Hệ điều hành
              </h1>
              <p className="text-blue-600 font-semibold uppercase tracking-widest text-sm mt-1">
                Chủ đề 1: Máy tính và xã hội tri thức
              </p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r-lg mb-8">
          <h3 className="font-bold text-blue-800 mb-2 flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            MỤC TIÊU BÀI HỌC
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base font-sans">
            <li>Trình bày được sơ lược lịch sử phát triển của hệ điều hành, qua đó thấy được vai trò của hệ điều hành và phần mềm nói chung.</li>
            <li>Giải thích được hệ điều hành trên thiết bị di động có những đặc điểm khác với hệ điều hành cho máy tính cá nhân.</li>
            <li>Nêu được tên một số hệ điều hành phổ biến hiện nay.</li>
          </ul>
        </div>

        <div className="space-y-8 font-sans">
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-blue-800 mb-4 flex items-center gap-2">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-lg shadow-md shrink-0">1</span>
              Lịch sử phát triển của hệ điều hành
            </h2>
            <div className="prose prose-blue max-w-none text-gray-800 space-y-4">
              <p>
                <strong>Hệ điều hành (Operating System - OS)</strong> là phần mềm hệ thống quan trọng nhất. Nó quản lí trực tiếp các tài nguyên phần cứng, phần mềm của máy tính và cung cấp các dịch vụ chung cho các chương trình máy tính.
              </p>
              
              <div className="my-6 bg-gray-50 p-4 border border-gray-200 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">Hoạt động 1: Trải nghiệm hệ điều hành</h4>
                <p className="text-sm">1. Điện thoại thông minh của em đang sử dụng hệ điều hành gì?<br/>
                2. So sánh giao diện của điện thoại thông minh với giao diện của máy tính cá nhân.</p>
              </div>

              <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">a. Giai đoạn đầu: Không có hệ điều hành</h3>
              <p>
                Những máy tính thế hệ đầu tiên (thập niên 1940 - 1950) chưa có hệ điều hành. Người sử dụng phải tương tác trực tiếp với phần cứng máy tính bằng ngôn ngữ máy.
              </p>

              <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">b. Hệ điều hành giao diện dòng lệnh</h3>
              <p>
                Đại diện tiêu biểu là MS-DOS. Người dùng phải nhớ các câu lệnh và gõ từ bàn phím để giao tiếp với máy tính. Màn hình chỉ hiển thị văn bản, không có đồ hoạ và chưa sử dụng chuột.
              </p>
              <div className="bg-black text-green-400 p-4 rounded font-mono text-sm my-4">
                C:\&gt; dir<br/>
                C:\&gt; copy file1.txt file2.txt<br/>
                C:\&gt; format A:
              </div>

              <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">c. Hệ điều hành giao diện đồ hoạ</h3>
              <p>
                Sự ra đời của hệ điều hành Windows và macOS đánh dấu một bước tiến lớn. Môi trường giao tiếp trực quan thông qua cửa sổ (Windows), biểu tượng (Icons), thực đơn (Menus) và con trỏ (Pointer). Chuột máy tính trở thành thiết bị nhập liệu thiết yếu.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-blue-800 mb-4 flex items-center gap-2 mt-10">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-lg shadow-md shrink-0">2</span>
              Hệ điều hành trên thiết bị di động
            </h2>
            <div className="prose prose-blue max-w-none text-gray-800 space-y-4">
              <p>
                Sự phổ biến của điện thoại thông minh (smartphone) và máy tính bảng (tablet) đòi hỏi các hệ điều hành chuyên biệt được thiết kế để tối ưu cho màn hình cảm ứng, tiêu thụ ít điện năng và kết nối mạng di động.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 my-6">
                <div className="border border-green-200 bg-green-50 rounded-xl p-5 shadow-sm">
                  <h4 className="font-bold text-green-800 text-lg mb-2 flex items-center gap-2">
                    <span className="text-2xl">🤖</span> Android
                  </h4>
                  <p className="text-sm text-green-900">Do Google phát triển dựa trên nhân Linux. Là hệ điều hành mã nguồn mở, cho phép các nhà sản xuất thiết bị tự do tuỳ biến. Hiện đang chiếm thị phần lớn nhất thế giới trên các thiết bị di động.</p>
                </div>
                <div className="border border-gray-300 bg-gray-100 rounded-xl p-5 shadow-sm">
                  <h4 className="font-bold text-gray-800 text-lg mb-2 flex items-center gap-2">
                    <span className="text-2xl">🍎</span> iOS
                  </h4>
                  <p className="text-sm text-gray-700">Do Apple phát triển độc quyền cho các thiết bị của hãng như iPhone, iPad (nay là iPadOS). Là hệ điều hành mã nguồn đóng, nổi tiếng với sự ổn định, mượt mà và tính bảo mật rất cao.</p>
                </div>
              </div>
            </div>
          </section>

          <div className="bg-yellow-50 border-2 border-yellow-400 p-6 rounded-xl mt-10 shadow-md">
            <h3 className="font-bold text-yellow-800 text-lg mb-3 flex items-center gap-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              GHI NHỚ
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-yellow-900 font-medium text-sm sm:text-base">
              <li>Lịch sử phát triển hệ điều hành gắn liền với việc cải thiện giao diện người dùng: từ dòng lệnh (CLI) sang đồ hoạ (GUI).</li>
              <li>Hệ điều hành di động được tối ưu cho màn hình cảm ứng, tiết kiệm năng lượng và kết nối không dây.</li>
              <li>Các hệ điều hành máy tính phổ biến: Windows, macOS, Linux.</li>
              <li>Các hệ điều hành di động phổ biến: Android, iOS.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
