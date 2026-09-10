"use client";

import { useState, useEffect, useCallback } from "react";
import confetti from "canvas-confetti";
import { Question } from "@/lib/types";
import { shuffleQuiz } from "@/lib/questions";
import { saveLessonScore } from "@/lib/progress";

interface QuizClientProps {
  lessonId: string;
  rawQuestions: Question[];
  onBack?: () => void;
}

export default function QuizClient({
  lessonId,
  rawQuestions,
  onBack,
}: QuizClientProps) {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [reviewFilter, setReviewFilter] = useState<"all" | "wrong">("all");

  const startNewQuiz = useCallback(() => {
    const shuffled = shuffleQuiz(rawQuestions);
    setQuestions(shuffled);
    setCurrentIndex(0);
    setAnswers({});
    setIsCompleted(false);
    setReviewFilter("all");
  }, [rawQuestions]);

  useEffect(() => {
    startNewQuiz();
  }, [startNewQuiz]);

  if (questions.length === 0) {
    return (
      <div className="quiz-card p-8 text-center text-sm text-[#7591a3]">
        Hiện tại chưa có câu hỏi trắc nghiệm cho bài học này.
      </div>
    );
  }

  const currentQ = questions[currentIndex];
  const selectedAnswer = answers[currentQ?.id];
  const hasAnsweredCurrent = selectedAnswer !== undefined;

  const handleSelect = (idx: number) => {
    if (hasAnsweredCurrent || isCompleted) return;
    setAnswers((prev) => ({
      ...prev,
      [currentQ.id]: idx,
    }));
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      finishQuiz();
    }
  };

  const finishQuiz = () => {
    let correctCount = 0;
    const wrongIds: string[] = [];

    questions.forEach((q) => {
      if (answers[q.id] === q.answer) {
        correctCount++;
      } else {
        wrongIds.push(q.id);
      }
    });

    const percentage = Math.round((correctCount / questions.length) * 100);
    saveLessonScore(lessonId, percentage, wrongIds);
    setIsCompleted(true);

    if (percentage >= 80) {
      try {
        confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
      } catch {
        // Ignore confetti error
      }
    }
  };

  // Compute summary stats
  const total = questions.length;
  let correctCount = 0;
  const wrongList: Question[] = [];

  questions.forEach((q) => {
    if (answers[q.id] === q.answer) {
      correctCount++;
    } else {
      wrongList.push(q);
    }
  });
  const percentage = Math.round((correctCount / total) * 100);
  const isStarred = percentage >= 80;

  const optLabels = ["A", "B", "C", "D"];

  // ==========================================
  // VIEW: KẾT QUẢ TỔNG KẾT
  // ==========================================
  if (isCompleted) {
    const displayedQuestions = reviewFilter === "wrong" ? wrongList : questions;

    return (
      <div className="space-y-6 animate-fade-in-up">
        {/* Score Card */}
        <div className="quiz-card p-6 sm:p-8 text-center space-y-4">
          <div className="text-4xl">
            {isStarred ? "🏆" : percentage >= 50 ? "👍" : "💪"}
          </div>

          <div className="space-y-1">
            <div className="flex items-center justify-center gap-2">
              <h2 className="text-xl font-bold text-[#f1f5f9]">Kết quả ôn luyện</h2>
              {isStarred && (
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-amber-400 text-slate-900 flex items-center gap-1">
                  ⭐ Đạt sao
                </span>
              )}
            </div>
            <p className="text-xs text-[#7591a3]">
              Làm đúng {correctCount}/{total} câu trắc nghiệm
            </p>
          </div>

          {/* Big percentage */}
          <div className="text-5xl font-extrabold text-[#2dd4bf]">
            {percentage}%
          </div>

          <p className="text-sm text-[#94a3b8] max-w-md mx-auto">
            {isStarred
              ? "Xuất sắc! Em đã nắm vững kiến thức trọng tâm của bài học này."
              : percentage >= 50
              ? "Khá tốt! Hãy ôn lại các câu chưa chính xác bên dưới để ghi nhớ sâu hơn."
              : "Đừng lo lắng! Hãy xem lại phần giải thích chi tiết bên dưới rồi luyện tập lại nhé."}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button onClick={startNewQuiz} className="btn-gradient-pill">
              🔄 Làm lại (Trộn đề mới)
            </button>
            {onBack && (
              <button onClick={onBack} className="pill-link px-4 py-2 text-sm">
                ← Về menu bài học
              </button>
            )}
          </div>
        </div>

        {/* Review Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <h3 className="font-bold text-sm text-[#f1f5f9] flex items-center gap-2">
              <span>📋</span>
              <span>Chi tiết từng câu</span>
            </h3>

            {wrongList.length > 0 && (
              <div className="flex items-center gap-1.5 p-1 rounded-lg bg-[#0c1a24] border border-[#162c3a]">
                <button
                  onClick={() => setReviewFilter("all")}
                  className={`text-xs px-2.5 py-1 rounded-md transition-colors ${
                    reviewFilter === "all"
                      ? "bg-[#162c3b] text-[#2dd4bf] font-bold"
                      : "text-[#7591a3] hover:text-[#cbd5e1]"
                  }`}
                >
                  Tất cả ({total})
                </button>
                <button
                  onClick={() => setReviewFilter("wrong")}
                  className={`text-xs px-2.5 py-1 rounded-md transition-colors ${
                    reviewFilter === "wrong"
                      ? "bg-[#162c3b] text-[#ef4444] font-bold"
                      : "text-[#7591a3] hover:text-[#cbd5e1]"
                  }`}
                >
                  Câu làm sai ({wrongList.length})
                </button>
              </div>
            )}
          </div>

          <div className="space-y-3">
            {displayedQuestions.map((q) => {
              const uAns = answers[q.id];
              const isCorrect = uAns === q.answer;

              return (
                <div key={q.id} className="quiz-card p-4 space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-[#162c3b] text-[#2dd4bf]">
                      Câu {questions.findIndex((item) => item.id === q.id) + 1}
                    </span>
                    <span
                      className={`text-xs font-bold px-2 py-0.5 rounded ${
                        isCorrect
                          ? "bg-emerald-500/10 text-emerald-400"
                          : "bg-red-500/10 text-red-400"
                      }`}
                    >
                      {isCorrect ? "✓ Đúng" : "✗ Chưa đúng"}
                    </span>
                  </div>

                  <p className="text-sm font-medium text-[#f1f5f9] leading-relaxed">
                    {q.q}
                  </p>

                  {/* Options status */}
                  <div className="space-y-1.5 pt-1">
                    {q.options.map((opt, oIdx) => {
                      const isUserChoice = uAns === oIdx;
                      const isCorrectChoice = q.answer === oIdx;

                      let borderClass = "border-[#162c3a]";
                      let bgClass = "bg-[#070e16]";
                      let badgeClass = "bg-[#162c3b] text-[#7591a3]";

                      if (isCorrectChoice) {
                        borderClass = "border-emerald-500/40";
                        bgClass = "bg-emerald-500/10";
                        badgeClass = "bg-emerald-500 text-white";
                      } else if (isUserChoice && !isCorrect) {
                        borderClass = "border-red-500/40";
                        bgClass = "bg-red-500/10";
                        badgeClass = "bg-red-500 text-white";
                      }

                      return (
                        <div
                          key={oIdx}
                          className={`flex items-center gap-2.5 p-2.5 rounded-lg border text-xs leading-relaxed ${borderClass} ${bgClass}`}
                        >
                          <span className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-[11px] shrink-0 ${badgeClass}`}>
                            {optLabels[oIdx]}
                          </span>
                          <span className={isCorrectChoice ? "text-emerald-300 font-medium" : isUserChoice ? "text-red-300" : "text-[#7591a3]"}>
                            {opt}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Explanation */}
                  {q.explain && (
                    <div className="explanation-box text-xs space-y-1 mt-2">
                      <span className="font-bold text-[#2dd4bf]">💡 Giải thích:</span>
                      <p className="text-[#9cb9cd] leading-relaxed">{q.explain}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // ==========================================
  // VIEW: LÀM TỪNG CÂU (LÀM ĐẾN ĐÂU CHẤM ĐẾN ĐÓ)
  // Match ảnh media_1789028760594.png
  // ==========================================
  const progressPercent = Math.round(((currentIndex + 1) / total) * 100);

  return (
    <div className="space-y-4 animate-fade-in-up">
      {/* Top bar info */}
      <div className="flex items-center justify-between gap-2 text-xs">
        <span className="text-[#7591a3] font-medium">
          Trắc nghiệm 4 phương án
        </span>
        <span className="font-mono font-bold text-[#2dd4bf]">
          Câu {currentIndex + 1}/{total}
        </span>
      </div>

      {/* Progress line */}
      <div className="w-full h-1 rounded-full bg-[#162c3a] overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[#136979] to-[#2dd4bf] transition-all duration-300 rounded-full"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Question Card */}
      <div className="quiz-card space-y-3">
        <p className="text-base sm:text-[17px] font-medium text-[#f1f5f9] leading-relaxed">
          {currentQ.q}
        </p>

        {currentQ.code && (
          <pre className="p-3.5 rounded-lg bg-[#070e16] border border-[#162c3a] text-xs font-mono text-[#38bdf8] overflow-x-auto">
            <code>{currentQ.code}</code>
          </pre>
        )}
      </div>

      {/* Options Stack */}
      <div className="space-y-2.5">
        {currentQ.options.map((opt, idx) => {
          const isSelected = selectedAnswer === idx;
          const isCorrect = currentQ.answer === idx;

          let optionStyle = "";
          let badgeStyle = "";

          if (hasAnsweredCurrent) {
            if (isCorrect) {
              optionStyle = "correct";
              badgeStyle = "correct";
            } else if (isSelected) {
              optionStyle = "wrong";
              badgeStyle = "wrong";
            } else {
              optionStyle = "faded";
            }
          }

          return (
            <button
              key={idx}
              onClick={() => handleSelect(idx)}
              disabled={hasAnsweredCurrent}
              className={`quiz-option ${optionStyle}`}
            >
              <div className={`letter-badge ${badgeStyle}`}>
                {optLabels[idx]}
              </div>
              <span className="text-sm sm:text-[15px] text-[#cbd5e1] leading-relaxed flex-1">
                {opt}
              </span>
              {hasAnsweredCurrent && isCorrect && (
                <span className="text-emerald-400 font-bold text-xs shrink-0">
                  ✓
                </span>
              )}
              {hasAnsweredCurrent && isSelected && !isCorrect && (
                <span className="text-red-400 font-bold text-xs shrink-0">
                  ✗
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Instant Explanation & Next Button */}
      {hasAnsweredCurrent && (
        <div className="space-y-4 pt-1 animate-fade-in-up">
          {currentQ.explain && (
            <div className="explanation-box space-y-1.5 text-xs sm:text-sm">
              <div className="flex items-center gap-1.5 text-[#2dd4bf] font-bold">
                <span>💡</span>
                <span>Giải thích chi tiết:</span>
              </div>
              <p className="text-[#9cb9cd] leading-relaxed">
                {currentQ.explain}
              </p>
            </div>
          )}

          <div className="flex justify-end pt-1">
            <button onClick={handleNext} className="btn-gradient-pill">
              {currentIndex < total - 1 ? "Câu tiếp theo →" : "Xem kết quả 🏆 →"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
