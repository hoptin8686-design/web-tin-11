"use client";

interface SgkViewerProps {
  onBack?: () => void;
}

export default function SgkViewer({ onBack }: SgkViewerProps) {
  // Page 5 is Bài 1: Hệ điều hành in SGK Tin 11 ICT KNTT
  const defaultPage = 5;

  return (
    <div className="space-y-4 animate-fade-in-up">
      {/* Control bar */}
      <div className="flex items-center justify-between gap-3 p-3 rounded-xl bg-[#0c1a24] border border-[#162c3a]">
        <div className="flex items-center gap-2 text-xs text-[#7591a3]">
          {onBack && (
            <button onClick={onBack} className="pill-link text-xs mr-2">
              ← Menu
            </button>
          )}
          <span>📘</span>
          <span className="font-semibold text-[#f1f5f9]">SGK Tin học 11 (ICT) — KNTT</span>
          <span>·</span>
          <span>Bài 1 (Trang {defaultPage})</span>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={`/sgk-tin-11.pdf#page=${defaultPage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="pill-link text-xs"
          >
            Mở toàn màn hình ↗
          </a>
        </div>
      </div>

      {/* Embedded PDF iframe */}
      <div className="w-full h-[700px] rounded-xl overflow-hidden border border-[#162c3a] bg-[#070e16] shadow-2xl">
        <iframe
          src={`/sgk-tin-11.pdf#page=${defaultPage}`}
          className="w-full h-full border-none"
          title="SGK Tin học 11 - Kết nối tri thức"
        />
      </div>
    </div>
  );
}
