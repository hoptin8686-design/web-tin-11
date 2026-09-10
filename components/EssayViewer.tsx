"use client";

import { useState } from "react";
import { EssayQuestion } from "@/lib/types";

interface EssayViewerProps {
  questions: EssayQuestion[];
}

export default function EssayViewer({ questions }: EssayViewerProps) {
  const [drafts, setDrafts] = useState<Record<string, string>>({});
  const [showAnswers, setShowAnswers] = useState<Record<string, boolean>>({});

  const handleDraftChange = (qId: string, text: string) => {
    setDrafts((prev) => ({ ...prev, [qId]: text }));
  };

  const toggleShowAnswer = (qId: string) => {
    setShowAnswers((prev) => ({ ...prev, [qId]: !prev[qId] }));
  };

  if (questions.length === 0) {
    return (
      <div className="quiz-card p-8 text-center text-sm text-[#7591a3]">
        Bài học này chưa có câu hỏi tự luận.
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-fade-in-up">
      {/* Banner hướng dẫn tự học */}
      <div className="p-4 rounded-xl bg-[#0c1a24] border border-[#162c3a] flex items-start gap-3 text-xs sm:text-sm">
        <span className="text-base shrink-0">💡</span>
        <div className="space-y-0.5">
          <span className="font-bold text-[#2dd4bf]">Phương pháp tự học hiệu quả:</span>
          <p className="text-[#94a3b8] leading-relaxed">
            Em hãy gõ ý tưởng trả lời vào ô nháp trước khi bấm xem gợi ý đáp án.
            Chủ động tư duy sẽ giúp ghi nhớ bản chất kiến thức lâu hơn. (Nội dung nháp không lưu lại).
          </p>
        </div>
      </div>

      {/* Danh sách câu hỏi tự luận */}
      <div className="space-y-5">
        {questions.map((q, index) => {
          const isAnswerVisible = !!showAnswers[q.id];
          const draftText = drafts[q.id] || "";

          return (
            <div key={q.id} className="quiz-card space-y-4">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-bold px-2.5 py-0.5 rounded bg-[#162c3b] text-[#2dd4bf]">
                  Câu tự luận {index + 1}
                </span>
                <span className="text-xs text-[#7591a3]">
                  {draftText.length > 0 ? `${draftText.length} ký tự nháp` : "Chưa nhập nháp"}
                </span>
              </div>

              {/* Đề bài */}
              <p className="text-base font-medium text-[#f1f5f9] leading-relaxed">
                {q.q}
              </p>

              {/* Ô nháp trả lời */}
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-[#7591a3] flex items-center gap-1.5">
                  <span>✏️</span>
                  <span>Ô nháp câu trả lời của em:</span>
                </label>
                <textarea
                  value={draftText}
                  onChange={(e) => handleDraftChange(q.id, e.target.value)}
                  placeholder="Gõ nháp các ý chính của câu trả lời tại đây trước khi đối chiếu..."
                  rows={4}
                  className="w-full p-3.5 rounded-xl bg-[#070e16] border border-[#162c3a] text-sm text-[#e2e8f0] placeholder-[#4e6b7d] focus:outline-none focus:border-[#2dd4bf] transition-colors resize-y leading-relaxed font-sans"
                />
              </div>

              {/* Nút xem gợi ý */}
              <div className="pt-1">
                <button
                  type="button"
                  onClick={() => toggleShowAnswer(q.id)}
                  className="pill-link"
                >
                  {isAnswerVisible ? "Ẩn gợi ý đáp án ▲" : "Xem gợi ý đáp án ▼"}
                </button>
              </div>

              {/* Box gợi ý đáp án */}
              {isAnswerVisible && (
                <div className="explanation-box space-y-2 animate-fade-in-up">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#2dd4bf]">
                    <span>🎯</span>
                    <span>Gợi ý đáp án chuẩn:</span>
                  </div>
                  <div className="text-xs sm:text-sm text-[#cbd5e1] leading-relaxed whitespace-pre-line">
                    {q.answer}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
