"use client";

import { useState } from 'react';

interface TheoryViewerProps {
  onStartQuiz: () => void;
}

export default function TheoryViewer({ onStartQuiz }: TheoryViewerProps) {
  const [activeSection, setActiveSection] = useState<number>(1);

  return (
    <div className="space-y-8 animate-fade-in-up">
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0c1a24] to-[#122635] border border-[#1d3d52] p-6 sm:p-8 shadow-2xl">
        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
          <svg className="w-32 h-32 text-teal-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        </div>
        
        <div className="relative z-10 flex flex-col gap-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-bold uppercase tracking-wider w-fit">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
            </span>
            Lý Thuyết Trọng Tâm
          </div>
          
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Bài 1: Hệ điều hành
          </h2>
          
          <p className="text-[#94a3b8] text-sm sm:text-base leading-relaxed max-w-2xl">
            Hệ điều hành là linh hồn của thiết bị, đóng vai trò cầu nối giữa phần cứng và người dùng. Khám phá cách hệ thống quản lý tài nguyên và lịch sử phát triển từ giao diện dòng lệnh đến đồ họa trực quan.
          </p>
        </div>
      </div>

      {/* Interactive Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {[
          { id: 1, icon: '🖥️', title: 'Khái niệm & Vai trò' },
          { id: 2, icon: '⏳', title: 'Lịch sử phát triển' },
          { id: 3, icon: '📱', title: 'Hệ điều hành di động' },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveSection(tab.id)}
            className={`whitespace-nowrap flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
              activeSection === tab.id
                ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg shadow-teal-500/20 border-transparent'
                : 'bg-[#0c1a24] text-[#7591a3] border border-[#162c3a] hover:bg-[#122635] hover:text-[#f1f5f9]'
            }`}
          >
            <span>{tab.icon}</span>
            {tab.title}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="relative min-h-[400px]">
        {/* Section 1 */}
        {activeSection === 1 && (
          <div className="animate-fade-in-up space-y-6">
            <div className="quiz-card !bg-gradient-to-br !from-[#0c1a24] !to-[#0a151d] !border-[#1d3d52]">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="p-2 rounded-lg bg-teal-500/20 text-teal-400">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </span>
                Hệ điều hành là gì?
              </h3>
              <p className="text-[#cbd5e1] leading-relaxed">
                <strong className="text-teal-400 font-semibold">Hệ điều hành (OS)</strong> là tập hợp các chương trình hệ thống đóng vai trò cầu nối trung gian giữa phần cứng máy tính và người dùng cũng như các phần mềm ứng dụng.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  title: 'Quản lí tài nguyên',
                  desc: 'Phân phối CPU, bộ nhớ RAM, thiết bị ngoại vi và kiểm soát các tiến trình đang thực thi.',
                  color: 'from-cyan-500/20 to-transparent',
                  icon: '⚡',
                  textColor: 'text-cyan-400'
                },
                {
                  title: 'Quản lí tệp (File System)',
                  desc: 'Lưu trữ, tổ chức dữ liệu theo cấu trúc cây thư mục và kiểm soát quyền truy cập.',
                  color: 'from-teal-500/20 to-transparent',
                  icon: '📁',
                  textColor: 'text-teal-400'
                },
                {
                  title: 'Giao diện người - máy',
                  desc: 'Cung cấp môi trường để người dùng ra lệnh, tương tác qua dòng lệnh (CLI) hoặc đồ hoạ (GUI).',
                  color: 'from-purple-500/20 to-transparent',
                  icon: '🎨',
                  textColor: 'text-purple-400'
                },
                {
                  title: 'Môi trường ứng dụng',
                  desc: 'Cung cấp các hàm API và dịch vụ hệ thống để các phần mềm ứng dụng hoạt động ổn định.',
                  color: 'from-orange-500/20 to-transparent',
                  icon: '⚙️',
                  textColor: 'text-orange-400'
                }
              ].map((feature, idx) => (
                <div key={idx} className={`p-5 rounded-xl border border-[#162c3a] bg-gradient-to-br ${feature.color} hover:-translate-y-1 transition-transform duration-300`}>
                  <div className="text-2xl mb-3">{feature.icon}</div>
                  <h4 className={`font-bold mb-2 ${feature.textColor}`}>{feature.title}</h4>
                  <p className="text-sm text-[#7591a3] leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Section 2 */}
        {activeSection === 2 && (
          <div className="animate-fade-in-up space-y-6">
            <div className="relative border-l-2 border-[#1d3d52] ml-4 md:ml-6 space-y-8 pb-4">
              <div className="relative pl-8">
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-orange-500 ring-4 ring-[#070e16]"></div>
                <div className="p-5 rounded-xl bg-[#0c1a24] border border-[#162c3a]">
                  <span className="text-xs font-bold text-orange-400 uppercase tracking-wider mb-2 block">Thời kì đầu (CLI)</span>
                  <h4 className="text-lg font-bold text-white mb-2">Giao diện dòng lệnh</h4>
                  <p className="text-[#94a3b8] text-sm">MS-DOS, UNIX cổ điển — người dùng phải ghi nhớ câu lệnh chính xác để thao tác, không có chuột, màn hình chỉ hiển thị văn bản trơn.</p>
                </div>
              </div>

              <div className="relative pl-8">
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-cyan-500 ring-4 ring-[#070e16]"></div>
                <div className="p-5 rounded-xl bg-[#0c1a24] border border-[#162c3a]">
                  <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-2 block">Kỷ nguyên hiện đại (GUI)</span>
                  <h4 className="text-lg font-bold text-white mb-2">Giao diện đồ hoạ người dùng</h4>
                  <p className="text-[#94a3b8] text-sm">Windows 95, Windows XP, macOS — Tương tác trực quan bằng chuột, cửa sổ (Windows), biểu tượng (Icons) và con trỏ, dễ dàng sử dụng cho mọi người.</p>
                </div>
              </div>

              <div className="relative pl-8">
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-teal-500 ring-4 ring-[#070e16]"></div>
                <div className="p-5 rounded-xl bg-[#0c1a24] border border-[#162c3a]">
                  <span className="text-xs font-bold text-teal-400 uppercase tracking-wider mb-2 block">Tiêu chuẩn hiện nay</span>
                  <h4 className="text-lg font-bold text-white mb-2">Hệ thống Đa nhiệm & Đa người dùng</h4>
                  <p className="text-[#94a3b8] text-sm">Cho phép nhiều chương trình cùng chạy đồng thời mượt mà (Multitasking) và nhiều tài khoản người dùng trên cùng một thiết bị (Multiuser).</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Section 3 */}
        {activeSection === 3 && (
          <div className="animate-fade-in-up">
             <div className="quiz-card mb-6 border-l-4 border-l-purple-500">
                <p className="text-[#cbd5e1] leading-relaxed">
                  Thiết bị thông minh (smartphone, tablet) đòi hỏi hệ điều hành có tính chất đặc thù: tối ưu cảm ứng, tiết kiệm pin, bảo mật cao và kho ứng dụng phong phú.
                </p>
             </div>
             
             <div className="grid md:grid-cols-2 gap-6">
               <div className="relative overflow-hidden rounded-2xl bg-[#0c1a24] border border-[#162c3a] group hover:border-green-500/50 transition-colors">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-3xl -mr-10 -mt-10 transition-transform group-hover:scale-150"></div>
                  <div className="p-6 relative z-10">
                    <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center text-green-400 text-2xl mb-4">
                      🤖
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">Android (Google)</h4>
                    <ul className="space-y-2 text-sm text-[#7591a3]">
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-0.5">✓</span> Mã nguồn mở (dựa trên nhân Linux)
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-0.5">✓</span> Độ tuỳ biến cực cao
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-0.5">✓</span> Chiếm thị phần số 1 toàn cầu
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-0.5">✓</span> Đa dạng thiết bị và phân khúc giá
                      </li>
                    </ul>
                  </div>
               </div>

               <div className="relative overflow-hidden rounded-2xl bg-[#0c1a24] border border-[#162c3a] group hover:border-blue-500/50 transition-colors">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -mr-10 -mt-10 transition-transform group-hover:scale-150"></div>
                  <div className="p-6 relative z-10">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 text-2xl mb-4">
                      🍎
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">iOS (Apple)</h4>
                    <ul className="space-y-2 text-sm text-[#7591a3]">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-500 mt-0.5">✓</span> Mã nguồn đóng, quyền cho iPhone
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-500 mt-0.5">✓</span> Tối ưu hoá phần cứng cực kì mượt mà
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-500 mt-0.5">✓</span> Tính bảo mật và ổn định cao
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-500 mt-0.5">✓</span> Hệ sinh thái khép kín đồng bộ tốt
                      </li>
                    </ul>
                  </div>
               </div>
             </div>
          </div>
        )}
      </div>

      {/* Action Banner */}
      <div className="relative overflow-hidden p-6 rounded-2xl bg-gradient-to-r from-[#0c1e2b] to-[#132a39] border border-[#1d3d52] shadow-xl group mt-8">
        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-2">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-teal-400">
              Bước tiếp theo
            </span>
            <h4 className="font-extrabold text-xl text-white">
              Sẵn sàng kiểm tra kiến thức?
            </h4>
            <p className="text-sm text-[#7591a3]">
              Làm ngay bài trắc nghiệm để củng cố những gì bạn vừa học.
            </p>
          </div>
          <button 
            onClick={onStartQuiz} 
            className="shrink-0 px-8 py-3.5 rounded-full font-bold text-white bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 shadow-lg shadow-teal-500/25 hover:shadow-cyan-500/40 transition-all duration-300 hover:-translate-y-1"
          >
            Bắt đầu luyện tập 🚀
          </button>
        </div>
      </div>
    </div>
  );
}
