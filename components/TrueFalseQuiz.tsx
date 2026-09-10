"use client";

import { useState } from "react";
import { TFQuestion } from "@/lib/types";

interface TrueFalseQuizProps {
  questions: TFQuestion[];
}

export default function TrueFalseQuiz({ questions }: TrueFalseQuizProps) {
  const [answers, setAnswers] = useState<Record<string, Record<number, boolean>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSelect = (questionId: string, stmtIndex: number, val: boolean) => {
    if (isSubmitted) return;
    setAnswers((prev) => ({
      ...prev,
      [questionId]: {
        ...(prev[questionId] || {}),
        [stmtIndex]: val,
      },
    }));
  };

  const calculateQuestionScore = (q: TFQuestion) => {
    const qAnswers = answers[q.id] || {};
    let correctCount = 0;
    q.statements.forEach((stmt, idx) => {
      if (qAnswers[idx] === stmt.answer) {
        correctCount++;
      }
    });

    if (correctCount === 1) return { points: 0.1, correctCount };
    if (correctCount === 2) return { points: 0.25, correctCount };
    if (correctCount === 3) return { points: 0.5, correctCount };
    if (correctCount === 4) return { points: 1.0, correctCount };
    return { points: 0.0, correctCount };
  };

  const handleReset = () => {
    setAnswers({});
    setIsSubmitted(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (questions.length === 0) {
    return (
      <div className="quiz-card p-8 text-center text-sm text-[#7591a3]">
        Bài học này chưa có câu hỏi dạng Đúng/Sai 4 mệnh đề.
      </div>
    );
  }

  const totalEarnedPoints = questions.reduce(
    (sum, q) => sum + calculateQuestionScore(q).points,
    0
  );
  const maxPossiblePoints = questions.length * 1.0;

  return (
    <div className="space-y-6 animate-fade-in-up">
      {/* Thang điểm Bộ GD&ĐT */}
      <div className="p-3.5 rounded-xl bg-[#0c1a24] border border-[#162c3a] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs">
        <div className="flex items-center gap-1.5 font-bold text-[#2dd4bf]">
          <span>⚖️</span>
          <span>Thang điểm Bộ GD&ĐT (Đúng/Sai 4 ý):</span>
        </div>
        <div className="text-xs text-[#7591a3] flex items-center gap-2 flex-wrap">
          <span>1 ý: 0,1đ</span>
          <span>·</span>
          <span>2 ý: 0,25đ</span>
          <span>·</span>
          <span>3 ý: 0,5đ</span>
          <span>·</span>
          <span className="text-[#2dd4bf] font-bold">4 ý: 1,0đ</span>
        </div>
      </div>

      {/* Kết quả khi đã nộp */}
      {isSubmitted && (
        <div className="quiz-card p-6 text-center space-y-3 border-emerald-500/30">
          <div className="text-3xl">🎯</div>
          <h2 className="text-lg font-bold text-[#f1f5f9]">Kết quả chấm điểm</h2>
          <div className="text-4xl font-extrabold text-[#2dd4bf]">
            {totalEarnedPoints.toFixed(2)}{" "}
            <span className="text-base font-normal text-[#7591a3]">
              / {maxPossiblePoints.toFixed(1)} điểm
            </span>
          </div>
          <p className="text-xs text-[#94a3b8]">
            Đã chấm theo quy chế thi tốt nghiệp THPT năm 2025 (QĐ 764 Bộ GD&ĐT).
          </p>
          <div className="pt-2">
            <button onClick={handleReset} className="btn-gradient-pill">
              🔄 Làm lại từ đầu
            </button>
          </div>
        </div>
      )}

      {/* Danh sách câu hỏi tình huống */}
      <div className="space-y-5">
        {questions.map((q, qIdx) => {
          const qAnswers = answers[q.id] || {};
          const score = calculateQuestionScore(q);

          return (
            <div key={q.id} className="quiz-card space-y-4">
              {/* Header câu */}
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-bold px-2.5 py-0.5 rounded bg-[#162c3b] text-[#2dd4bf]">
                  Câu tình huống {qIdx + 1}
                </span>

                {isSubmitted && (
                  <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400">
                    +{score.points}đ ({score.correctCount}/4 ý đúng)
                  </span>
                )}
              </div>

              {/* Ngữ cảnh tình huống */}
              <div className="p-3.5 rounded-lg bg-[#070e16] border border-[#162c3a] text-sm text-[#cbd5e1] leading-relaxed">
                {q.context}
              </div>

              {q.code && (
                <pre className="p-3 rounded-lg bg-[#070e16] border border-[#162c3a] text-xs font-mono text-[#38bdf8] overflow-x-auto">
                  <code>{q.code}</code>
                </pre>
              )}

              {/* 4 Mệnh đề a, b, c, d */}
              <div className="space-y-2 pt-1">
                {q.statements.map((stmt, sIdx) => {
                  const stmtLetters = ["a", "b", "c", "d"];
                  const userVal = qAnswers[sIdx];
                  const isCorrect = isSubmitted && userVal === stmt.answer;

                  return (
                    <div
                      key={sIdx}
                      className={`p-3 rounded-lg border transition-all ${
                        isSubmitted
                          ? isCorrect
                            ? "bg-emerald-500/10 border-emerald-500/30"
                            : "bg-red-500/10 border-red-500/30"
                          : "bg-[#070e16] border-[#162c3a]"
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                        <div className="flex items-start gap-2.5 flex-1 min-w-0">
                          <span className="font-bold text-xs px-1.5 py-0.5 rounded bg-[#162c3b] text-[#2dd4bf] shrink-0 mt-0.5">
                            {stmtLetters[sIdx]}
                          </span>
                          <span className="text-xs sm:text-sm text-[#e2e8f0] leading-relaxed">
                            {stmt.text}
                          </span>
                        </div>

                        {/* Nút Chọn Đúng / Sai */}
                        <div className="flex items-center gap-1.5 shrink-0 self-end sm:self-center">
                          <button
                            type="button"
                            onClick={() => handleSelect(q.id, sIdx, true)}
                            disabled={isSubmitted}
                            className={`text-xs px-3 py-1 rounded-md font-bold transition-all ${
                              userVal === true
                                ? "bg-[#2dd4bf] text-[#070e16]"
                                : "bg-[#162c3b] text-[#7591a3] hover:text-[#f1f5f9]"
                            }`}
                          >
                            Đúng
                          </button>
                          <button
                            type="button"
                            onClick={() => handleSelect(q.id, sIdx, false)}
                            disabled={isSubmitted}
                            className={`text-xs px-3 py-1 rounded-md font-bold transition-all ${
                              userVal === false
                                ? "bg-[#e06d53] text-[#070e16]"
                                : "bg-[#162c3b] text-[#7591a3] hover:text-[#f1f5f9]"
                            }`}
                          >
                            Sai
                          </button>
                        </div>
                      </div>

                      {/* Giải thích khi nộp */}
                      {isSubmitted && (
                        <div className="mt-2.5 pt-2 border-t border-[#162c3a] text-xs space-y-0.5">
                          <div className="flex items-center gap-1 font-semibold text-[#2dd4bf]">
                            <span>Đáp án chuẩn:</span>
                            <span className="uppercase">{stmt.answer ? "Đúng" : "Sai"}</span>
                          </div>
                          <p className="text-[#9cb9cd]">{stmt.explain}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Submit Button */}
      {!isSubmitted && (
        <div className="flex justify-center pt-2">
          <button
            onClick={() => {
              setIsSubmitted(true);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="btn-gradient-pill px-8 py-3 text-sm"
          >
            Chấm điểm theo quy chế Bộ GD&ĐT 🎯
          </button>
        </div>
      )}
    </div>
  );
}
