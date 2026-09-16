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
            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 2.5c1.38 0 2.5 1.12 2.5 2.5S13.38 11.5 12 11.5 9.5 10.38 9.5 9 10.62 6.5 12 6.5zM20 18H4v-.57c0-2.1 3.33-3.18 6-3.43v-1.3C8.97 12.22 8 11.25 8 10H6c0 1.66 1.34 3 3 3h.17c.36.1.73.16 1.13.16H13.7c.4 0 .77-.06 1.13-.16H15c1.66 0 3-1.34 3-3h-2c0 1.25-.97 2.22-2 2.7v1.3c2.67.25 6 1.33 6 3.43V18z" />
          </svg>
        </div>
        
        <div className="relative z-10 flex flex-col gap-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-bold uppercase tracking-wider w-fit">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
            </span>
            Lý Thuyết Trọng Tâm · SGK Kết nối tri thức
          </div>
          
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Bài 1: Hệ điều hành
          </h2>
          
          <p className="text-[#94a3b8] text-sm sm:text-base leading-relaxed max-w-2xl">
            Hệ điều hành là phần mềm hệ thống quan trọng nhất, đóng vai trò trung gian giữa người dùng và phần cứng. Tìm hiểu 5 chức năng cốt lõi, lịch sử phát triển và các hệ điều hành phổ biến hiện nay.
          </p>
        </div>
      </div>

      {/* Interactive Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {[
          { id: 1, icon: '🖥️', title: 'Vai trò & Chức năng' },
          { id: 2, icon: '⏳', title: 'Lịch sử phát triển' },
          { id: 3, icon: '📱', title: 'HĐH di động' },
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
        {/* Section 1: Vai trò & Chức năng */}
        {activeSection === 1 && (
          <div className="animate-fade-in-up space-y-6">
            {/* Định nghĩa */}
            <div className="quiz-card !bg-gradient-to-br !from-[#0c1a24] !to-[#0a151d] !border-[#1d3d52]">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="p-2 rounded-lg bg-teal-500/20 text-teal-400">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
                  </svg>
                </span>
                Hệ điều hành là gì?
              </h3>
              <p className="text-[#cbd5e1] leading-relaxed">
                <strong className="text-teal-400">Hệ điều hành (Operating System — OS)</strong> là phần mềm hệ thống quản lý tài nguyên phần cứng, phần mềm và cung cấp nền tảng để các chương trình ứng dụng hoạt động. Nó đóng vai trò <strong className="text-white">trung gian</strong> giữa người dùng và phần cứng máy tính.
              </p>
            </div>

            {/* 5 chức năng */}
            <h4 className="text-sm font-bold text-teal-400 uppercase tracking-widest px-1">📌 5 chức năng chính của Hệ điều hành</h4>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  title: 'Quản lý thiết bị',
                  desc: 'Quản lý và điều phối các tài nguyên như CPU, bộ nhớ và các thiết bị ngoại vi.',
                  color: 'from-cyan-500/20 to-transparent',
                  icon: '🖥️',
                  textColor: 'text-cyan-400'
                },
                {
                  title: 'Quản lý lưu trữ dữ liệu',
                  desc: 'Quản lý tệp và thư mục trên máy tính, tổ chức dữ liệu theo cấu trúc cây.',
                  color: 'from-teal-500/20 to-transparent',
                  icon: '📁',
                  textColor: 'text-teal-400'
                },
                {
                  title: 'Tổ chức thực hiện chương trình',
                  desc: 'Điều phối tài nguyên cho các tiến trình, tạo môi trường để chạy các ứng dụng (multitasking).',
                  color: 'from-purple-500/20 to-transparent',
                  icon: '⚡',
                  textColor: 'text-purple-400'
                },
                {
                  title: 'Cung cấp giao diện',
                  desc: 'Tạo môi trường giao tiếp giữa người dùng và máy tính (GUI — giao diện đồ họa hoặc CLI — dòng lệnh).',
                  color: 'from-orange-500/20 to-transparent',
                  icon: '🎨',
                  textColor: 'text-orange-400'
                },
                {
                  title: 'Cung cấp tiện ích',
                  desc: 'Hỗ trợ các công cụ nâng cao hiệu quả sử dụng: định dạng đĩa, nén tệp, kiểm tra lỗi đĩa, cấu hình mạng...',
                  color: 'from-yellow-500/20 to-transparent',
                  icon: '⚙️',
                  textColor: 'text-yellow-400'
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

        {/* Section 2: CPU & RAM */}
        {activeSection === 2 && (
          <div className="animate-fade-in-up space-y-6">
            <div className="quiz-card !bg-gradient-to-br !from-[#0c1a24] !to-[#0a151d] !border-[#1d3d52] mb-2">
              <p className="text-[#cbd5e1] text-sm leading-relaxed">
                Các hệ điều hành máy tính cá nhân phát triển theo hướng ngày càng <strong className="text-teal-400">thân thiện</strong>, dễ sử dụng với giao diện đồ họa và cơ chế <strong className="text-cyan-300">Plug &amp; Play</strong> (tự động nhận diện thiết bị ngoại vi).
              </p>
            </div>

            {/* Windows */}
            <div className="relative overflow-hidden rounded-2xl bg-[#0c1a24] border border-[#162c3a] p-6">
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center text-xl">🫠</div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Hệ điều hành Windows</h3>
                    <span className="text-xs text-blue-400 font-semibold uppercase tracking-wider">Microsoft</span>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute left-2 top-0 bottom-0 w-px bg-blue-500/30"></div>
                  <div className="space-y-3 pl-8">
                    {[
                      { year: '1985', label: 'Windows 1 — Ra mắt phiên bản đầu tiên', color: 'bg-blue-500' },
                      { year: '1990', label: 'Windows 3 — Bắt đầu có đa nhiệm (multitasking)', color: 'bg-blue-500' },
                      { year: '1995', label: 'Windows 95 — Bước nhảy vật, giao diện GUI hoàn thiện', color: 'bg-cyan-500' },
                      { year: '2001', label: 'Windows XP — Phổ biến nhất mọi thời đại', color: 'bg-cyan-500' },
                      { year: '2009', label: 'Windows 7 — Tối ưu, ổn định', color: 'bg-teal-500' },
                      { year: '2015', label: 'Windows 10 — Tích hợp Cortana, trình duyệt Edge', color: 'bg-teal-500' },
                      { year: '2021', label: 'Windows 11 — Giao diện hiện đại, hỗ trợ Android app', color: 'bg-green-500' },
                    ].map((item, i) => (
                      <div key={i} className="relative flex items-start gap-3">
                        <div className={`absolute -left-6 top-1.5 w-3 h-3 rounded-full ${item.color} ring-4 ring-[#0c1a24] shrink-0`}></div>
                        <span className={`text-xs font-bold px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 shrink-0 mt-0.5`}>{item.year}</span>
                        <p className="text-sm text-[#94a3b8]">{item.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Linux */}
            <div className="relative overflow-hidden rounded-2xl bg-[#0c1a24] border border-[#162c3a] p-6">
              <div className="absolute top-0 right-0 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-orange-500/20 rounded-xl flex items-center justify-center text-xl">🐧</div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Hệ điều hành Linux</h3>
                    <span className="text-xs text-orange-400 font-semibold uppercase tracking-wider">Mã nguồn mở</span>
                  </div>
                </div>
                <p className="text-[#94a3b8] text-sm leading-relaxed mb-4">
                  Linux có nguồn gốc từ <strong className="text-orange-300">UNIX</strong> (phát triển từ năm 1969 — hệ điều hành đa nhiệm, đa người dùng). Phần nhân Linux 1.0 được công bố năm <strong className="text-orange-300">1994</strong> dưới dạng mã nguồn mở.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { name: 'RedHat', year: '1994', color: 'text-red-400', bg: 'bg-red-500/10 border-red-500/20' },
                    { name: 'SuSE', year: '1996', color: 'text-green-400', bg: 'bg-green-500/10 border-green-500/20' },
                    { name: 'Ubuntu', year: '2004', color: 'text-orange-400', bg: 'bg-orange-500/10 border-orange-500/20' },
                    { name: 'Android', year: '2008', color: 'text-teal-400', bg: 'bg-teal-500/10 border-teal-500/20' },
                  ].map((d, i) => (
                    <div key={i} className={`p-3 rounded-lg border text-center ${d.bg}`}>
                      <p className={`font-bold text-sm ${d.color}`}>{d.name}</p>
                      <p className="text-xs text-[#7591a3] mt-1">{d.year}</p>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-[#7591a3] mt-3 pt-3 border-t border-[#162c3a]">
                  📌 Android (HĐH trên điện thoại) cũng được xây dựng trên lõi Linux.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Section 3: Bộ nhớ & Lưu trữ */}
        {activeSection === 3 && (
          <div className="animate-fade-in-up space-y-6">
            <div className="quiz-card !bg-gradient-to-br !from-[#0c1a24] !to-[#0a151d] !border-[#1d3d52]">
              <p className="text-[#cbd5e1] text-sm leading-relaxed">
                Do đặc thù cần tính linh hoạt và di động, HĐH cho thiết bị di động tập trung vào:
                <strong className="text-teal-300"> kết nối mạng không dây</strong> (Wi-Fi, 4G/5G, Bluetooth, NFC), 
                <strong className="text-purple-300"> giao diện cảm ứng thân thiện</strong> và các tiện ích di động (GPS, máy ảnh, nhận dạng tiếng nói).
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Android */}
              <div className="relative overflow-hidden rounded-2xl bg-[#0c1a24] border border-[#162c3a] group hover:border-green-500/50 transition-colors">
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-3xl -mr-10 -mt-10 transition-transform group-hover:scale-150"></div>
                <div className="p-6 relative z-10">
                  <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center text-green-400 text-2xl mb-4">
                    🤖
                  </div>
                  <h4 className="text-xl font-bold text-white mb-1">Android</h4>
                  <p className="text-xs text-green-400 font-semibold uppercase tracking-wider mb-3">Google — Mã nguồn mở</p>
                  <ul className="space-y-2 text-sm text-[#7591a3]">
                    <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5 shrink-0">✓</span> Xây dựng trên lõi <strong className="text-green-300">Linux</strong></li>
                    <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5 shrink-0">✓</span> Hệ điều hành mã nguồn mở phổ biến nhất</li>
                    <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5 shrink-0">✓</span> Chiếm thị phần số 1 toàn cầu</li>
                    <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5 shrink-0">✓</span> Kết nối: Wi-Fi, 4G/5G, Bluetooth, NFC, GPS</li>
                    <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5 shrink-0">✓</span> Đa dạng thiết bị và phân khúc giá</li>
                  </ul>
                </div>
              </div>

              {/* iOS */}
              <div className="relative overflow-hidden rounded-2xl bg-[#0c1a24] border border-[#162c3a] group hover:border-blue-500/50 transition-colors">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -mr-10 -mt-10 transition-transform group-hover:scale-150"></div>
                <div className="p-6 relative z-10">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 text-2xl mb-4">
                    🍎
                  </div>
                  <h4 className="text-xl font-bold text-white mb-1">iOS</h4>
                  <p className="text-xs text-blue-400 font-semibold uppercase tracking-wider mb-3">Apple — Mã nguồn đóng</p>
                  <ul className="space-y-2 text-sm text-[#7591a3]">
                    <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5 shrink-0">✓</span> Dành riêng cho thiết bị Apple (iPhone, iPad)</li>
                    <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5 shrink-0">✓</span> Tối ưu hoá phần cứng chuyên biệt</li>
                    <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5 shrink-0">✓</span> Tính bảo mật và ổn định rất cao</li>
                    <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5 shrink-0">✓</span> Hệ sinh thái khép kín: App Store, iCloud, AirDrop</li>
                    <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5 shrink-0">✓</span> Kết nối: Wi-Fi, 5G, Bluetooth, NFC, GPS</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Quan hệ HDD với phần cứng & PM */}
            <div className="p-5 rounded-xl bg-gradient-to-br from-[#0c1a24] to-[#0a151d] border border-[#1d3d52]">
              <h4 className="font-bold text-white mb-4 flex items-center gap-2">
                <span>🔗</span> Quan hệ: HĐH — Phần cứng — Phần mềm ứng dụng
              </h4>
              <div className="flex flex-col sm:flex-row items-center gap-3 text-sm text-center">
                <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 flex-1 w-full">
                  <p className="text-blue-300 font-bold">👤 Người dùng</p>
                  <p className="text-[#7591a3] text-xs mt-1">Ra lệnh, tương tác</p>
                </div>
                <span className="text-teal-500 font-bold text-xl rotate-90 sm:rotate-0">↓</span>
                <div className="p-3 rounded-xl bg-teal-500/10 border border-teal-500/20 flex-1 w-full">
                  <p className="text-teal-300 font-bold">🖥️ Phần mềm ứng dụng</p>
                  <p className="text-[#7591a3] text-xs mt-1">Được HĐH cung cấp môi trường</p>
                </div>
                <span className="text-teal-500 font-bold text-xl rotate-90 sm:rotate-0">↓</span>
                <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 flex-1 w-full">
                  <p className="text-purple-300 font-bold">⚙️ Hệ điều hành</p>
                  <p className="text-[#7591a3] text-xs mt-1">Trung gian quản lý</p>
                </div>
                <span className="text-teal-500 font-bold text-xl rotate-90 sm:rotate-0">↓</span>
                <div className="p-3 rounded-xl bg-orange-500/10 border border-orange-500/20 flex-1 w-full">
                  <p className="text-orange-300 font-bold">🔩 Phần cứng</p>
                  <p className="text-[#7591a3] text-xs mt-1">CPU, RAM, ổ cứng...</p>
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
