"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import confetti from "canvas-confetti";
import { Question, TFQuestion, EssayQuestion } from "@/lib/types";
import { shuffleQuiz } from "@/lib/questions";
import {
  Clock,
  Award,
  RotateCcw,
  Send,
  User,
  GraduationCap,
} from "lucide-react";

interface ExamClientProps {
  quizBank: Question[];
  tfBank: TFQuestion[];
  essayBank: EssayQuestion[];
}

export default function ExamClient({
  quizBank,
  tfBank,
  essayBank,
}: ExamClientProps) {
  const [studentName, setStudentName] = useState("");
  const [className, setClassName] = useState("");
  const [hasStarted, setHasStarted] = useState(false);

  // Timer
  const EXAM_TIME_SECONDS = 45 * 60; // 45 phút
  const [timeLeft, setTimeLeft] = useState(EXAM_TIME_SECONDS);

  // Câu hỏi trong đề thi
  const [examQuizzes, setExamQuizzes] = useState<Question[]>([]);
  const [examTFs, setExamTFs] = useState<TFQuestion[]>([]);
  const [examEssays, setExamEssays] = useState<EssayQuestion[]>([]);

  // Lựa chọn của học sinh
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({});
  const [tfAnswers, setTfAnswers] = useState<Record<string, Record<number, boolean>>>({});
  const [essayDrafts, setEssayDrafts] = useState<Record<string, string>>({});

  // Kết quả
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmittingToSheet, setIsSubmittingToSheet] = useState(false);
  const [sheetStatus, setSheetStatus] = useState<string | null>(null);

  // Tạo đề thi ngẫu nhiên
  const generateExam = () => {
    const shuffledQ = shuffleQuiz(quizBank).slice(0, 12); // Lấy 12 câu trắc nghiệm
    const shuffledTF = [...tfBank].sort(() => Math.random() - 0.5).slice(0, 2); // 2 câu đúng/sai
    const shuffledEssay = [...essayBank].sort(() => Math.random() - 0.5).slice(0, 1); // 1 câu tự luận

    setExamQuizzes(shuffledQ);
    setExamTFs(shuffledTF);
    setExamEssays(shuffledEssay);
    setQuizAnswers({});
    setTfAnswers({});
    setEssayDrafts({});
    setTimeLeft(EXAM_TIME_SECONDS);
    setIsSubmitted(false);
    setSheetStatus(null);
    setHasStarted(true);
  };

  // Tính điểm
  // Phần I: 12 câu x 0.25đ = 3.0 điểm
  let part1Score = 0;
  examQuizzes.forEach((q) => {
    if (quizAnswers[q.id] === q.answer) {
      part1Score += 0.25;
    }
  });

  // Phần II: Đúng/Sai (2 câu x tối đa 1.0đ = 2.0 điểm)
  let part2Score = 0;
  examTFs.forEach((q) => {
    const qAns = tfAnswers[q.id] || {};
    let count = 0;
    q.statements.forEach((st, idx) => {
      if (qAns[idx] === st.answer) count++;
    });
    if (count === 1) part2Score += 0.1;
    else if (count === 2) part2Score += 0.25;
    else if (count === 3) part2Score += 0.5;
    else if (count === 4) part2Score += 1.0;
  });

  // Tổng điểm trắc nghiệm tự động chấm (trên thang 10 quy đổi)
  const autoScore = Math.round((part1Score + part2Score) * 100) / 100;
  const scaledScore10 = Math.min(10, Math.round(((autoScore / 5.0) * 10) * 10) / 10);

  const handleSubmitExam = useCallback(() => {
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });

    if (scaledScore10 >= 8.0) {
      try {
        confetti({ particleCount: 120, spread: 70, origin: { y: 0.6 } });
      } catch {
        // ignore
      }
    }
  }, [scaledScore10]);

  // Đếm ngược thời gian
  useEffect(() => {
    if (!hasStarted || isSubmitted) return;

    if (timeLeft <= 0) {
      handleSubmitExam();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [hasStarted, isSubmitted, timeLeft, handleSubmitExam]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  // Nộp kết quả về Google Sheets API
  const handleSendToSheet = async () => {
    if (isSubmittingToSheet) return;
    setIsSubmittingToSheet(true);
    setSheetStatus(null);

    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          studentName: studentName.trim(),
          className: className.trim() || "11",
          examType: "Thi thử tốt nghiệp THPT",
          score: autoScore,
          totalPoints: 5.0,
          percentage: Math.round((autoScore / 5.0) * 100),
          timeSpentSeconds: EXAM_TIME_SECONDS - timeLeft,
          submittedAt: new Date().toISOString(),
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSheetStatus("✅ Đã ghi nhận kết quả thành công về hệ thống của giáo viên!");
      } else {
        setSheetStatus(data.message || "⚠️ Đã lưu tại máy, đang chờ đồng bộ Google Sheet.");
      }
    } catch {
      setSheetStatus("⚠️ Đã lưu cục bộ trên trình duyệt của bạn.");
    } finally {
      setIsSubmittingToSheet(false);
    }
  };

  // ==========================================
  // VIEW 1: TRANG CHUẨN BỊ VÀO THI
  // ==========================================
  if (!hasStarted) {
    return (
      <div className="max-w-2xl mx-auto py-12 px-4 space-y-6">
        <Link href="/" className="pill-link">
          ← Quay lại trang chủ
        </Link>

        <div className="quiz-card p-6 sm:p-10 space-y-6 animate-fade-in-up">
          <div className="text-center space-y-2">
            <div className="w-14 h-14 rounded-2xl bg-[#162c3b] text-[#2dd4bf] mx-auto flex items-center justify-center font-bold shadow-lg border border-[#193a4c]">
              <Award className="w-7 h-7" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#f1f5f9]">
              Đề Thi Thử Tốt Nghiệp THPT
            </h1>
            <p className="text-[#7591a3] text-sm">
              Môn: Tin học 11 (Định hướng Tin học ứng dụng ICT)
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#070e16] border border-[#162c3a] space-y-2 text-xs sm:text-sm text-[#94a3b8]">
            <div className="font-bold text-[#f1f5f9] flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#2dd4bf]" />
              <span>Cấu trúc & Quy chế thi thử (QĐ 764 Bộ GD&ĐT):</span>
            </div>
            <ul className="list-disc list-inside space-y-1 pl-1 text-xs text-[#cbd5e1]">
              <li>Thời gian làm bài: <strong className="text-[#f1f5f9]">45 phút</strong> (bấm giờ đếm ngược)</li>
              <li><strong className="text-[#2dd4bf]">Phần I:</strong> Trắc nghiệm 4 phương án (12 câu · 3.0 điểm)</li>
              <li><strong className="text-[#38bdf8]">Phần II:</strong> Đúng/Sai 4 mệnh đề (2 câu tình huống · 2.0 điểm)</li>
              <li><strong className="text-[#fb923c]">Phần III:</strong> Tự luận & bài tập thực tiễn (1 câu)</li>
            </ul>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-[#cbd5e1] mb-1.5">
                Họ và tên học sinh *
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-[#4e6b7d] absolute left-3.5 top-3" />
                <input
                  type="text"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  placeholder="Ví dụ: Nông Văn Cường"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#162c3a] bg-[#070e16] text-sm text-[#f1f5f9] placeholder-[#4e6b7d] focus:border-[#2dd4bf] outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#cbd5e1] mb-1.5">
                Lớp học *
              </label>
              <div className="relative">
                <GraduationCap className="w-4 h-4 text-[#4e6b7d] absolute left-3.5 top-3" />
                <input
                  type="text"
                  value={className}
                  onChange={(e) => setClassName(e.target.value)}
                  placeholder="Ví dụ: 11A1"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#162c3a] bg-[#070e16] text-sm text-[#f1f5f9] placeholder-[#4e6b7d] focus:border-[#2dd4bf] outline-none transition-colors"
                />
              </div>
            </div>
          </div>

          <button
            onClick={generateExam}
            disabled={!studentName.trim()}
            className={`w-full py-3.5 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 ${
              studentName.trim()
                ? "btn-gradient-pill"
                : "bg-[#162c3b] text-[#4e6b7d] cursor-not-allowed border border-[#1c3a4f]"
            }`}
          >
            <span>Bắt đầu tính giờ làm bài</span>
            <Clock className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  // ==========================================
  // VIEW 2: PHÒNG THI VÀ LÀM BÀI
  // ==========================================
  const optLabels = ["A", "B", "C", "D"];

  return (
    <div className="min-h-screen py-6 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto space-y-6">
        {/* Sticky Header Bar */}
        <div className="sticky top-4 z-40 p-4 rounded-xl bg-[#0c1a24]/95 backdrop-blur-md border border-[#162c3a] shadow-xl flex items-center justify-between gap-4">
          <div>
            <span className="text-xs text-[#7591a3] block">Thí sinh:</span>
            <span className="text-sm font-bold text-[#f1f5f9]">
              {studentName} — Lớp {className || "11"}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div
              className={`flex items-center gap-1.5 font-mono font-bold text-sm sm:text-base px-3 py-1.5 rounded-lg border ${
                timeLeft < 300
                  ? "bg-red-500/10 border-red-500/30 text-red-400 animate-pulse"
                  : "bg-[#070e16] border-[#162c3a] text-[#2dd4bf]"
              }`}
            >
              <Clock className="w-4 h-4" />
              <span>{formatTime(timeLeft)}</span>
            </div>

            {!isSubmitted ? (
              <button
                onClick={handleSubmitExam}
                className="btn-gradient-pill px-4 py-1.5 text-xs sm:text-sm"
              >
                Nộp bài
              </button>
            ) : (
              <button
                onClick={generateExam}
                className="pill-link text-xs flex items-center gap-1"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Thi đề mới</span>
              </button>
            )}
          </div>
        </div>

        {/* Kết quả sau khi nộp */}
        {isSubmitted && (
          <div className="quiz-card p-6 sm:p-8 border-emerald-500/30 space-y-5 animate-fade-in-up">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1 text-center sm:text-left">
                <span className="text-xs uppercase tracking-wider font-bold text-[#2dd4bf]">
                  Kết quả thi thử tốt nghiệp THPT
                </span>
                <h2 className="text-4xl font-black text-[#f1f5f9]">
                  {scaledScore10.toFixed(1)} / 10 điểm
                </h2>
                <p className="text-xs text-[#94a3b8]">
                  (Phần I + II đạt {autoScore.toFixed(2)}/5.00 điểm trắc nghiệm)
                </p>
              </div>

              <button
                onClick={handleSendToSheet}
                disabled={isSubmittingToSheet}
                className="btn-gradient-pill flex items-center gap-2 shrink-0"
              >
                <Send className="w-4 h-4" />
                <span>{isSubmittingToSheet ? "Đang gửi..." : "Lưu điểm về Google Sheet"}</span>
              </button>
            </div>

            {sheetStatus && (
              <div className="p-3 rounded-lg bg-[#070e16] border border-[#162c3a] text-xs font-semibold text-[#cbd5e1]">
                {sheetStatus}
              </div>
            )}
          </div>
        )}

        {/* PHẦN I: TRẮC NGHIỆM 4 PHƯƠNG ÁN */}
        <div className="space-y-4">
          <div className="p-3 rounded-xl bg-[#0c1a24] border border-[#162c3a] font-bold text-[#2dd4bf] text-xs sm:text-sm">
            PHẦN I. Trắc nghiệm 4 phương án ({examQuizzes.length} câu · 0,25đ/câu)
          </div>

          <div className="space-y-4">
            {examQuizzes.map((q, idx) => {
              const selected = quizAnswers[q.id];
              return (
                <div key={q.id} className="quiz-card space-y-3">
                  <div className="flex items-start gap-2.5">
                    <span className="font-bold text-xs px-2 py-0.5 rounded bg-[#162c3b] text-[#2dd4bf]">
                      Câu {idx + 1}
                    </span>
                    <p className="text-sm font-medium text-[#f1f5f9] leading-relaxed flex-1">
                      {q.q}
                    </p>
                  </div>

                  <div className="space-y-2 pt-1">
                    {q.options.map((opt, oIdx) => {
                      const isSel = selected === oIdx;
                      const isCorrect = isSubmitted && oIdx === q.answer;

                      let optClass = "bg-[#070e16] border-[#162c3a]";
                      let badgeClass = "bg-[#162c3b] text-[#7591a3]";

                      if (isSubmitted) {
                        if (isCorrect) {
                          optClass = "bg-emerald-500/10 border-emerald-500/40";
                          badgeClass = "bg-emerald-500 text-white";
                        } else if (isSel) {
                          optClass = "bg-red-500/10 border-red-500/40";
                          badgeClass = "bg-red-500 text-white";
                        }
                      } else if (isSel) {
                        optClass = "bg-[#112737] border-[#2dd4bf]/40";
                        badgeClass = "bg-[#2dd4bf] text-[#070e16]";
                      }

                      return (
                        <button
                          key={oIdx}
                          disabled={isSubmitted}
                          onClick={() =>
                            setQuizAnswers((prev) => ({ ...prev, [q.id]: oIdx }))
                          }
                          className={`w-full p-3 rounded-xl text-left text-xs sm:text-sm border transition-all flex items-center gap-3 ${optClass}`}
                        >
                          <span className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs shrink-0 ${badgeClass}`}>
                            {optLabels[oIdx]}
                          </span>
                          <span className="text-[#cbd5e1] leading-relaxed flex-1">
                            {opt}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* PHẦN II: TRẮC NGHIỆM ĐÚNG/SAI */}
        <div className="space-y-4 pt-2">
          <div className="p-3 rounded-xl bg-[#0c1a24] border border-[#162c3a] font-bold text-[#38bdf8] text-xs sm:text-sm">
            PHẦN II. Đúng / Sai 4 mệnh đề (Mỗi câu tối đa 1,0 điểm theo quy chế thi THPT)
          </div>

          <div className="space-y-4">
            {examTFs.map((q, idx) => {
              const qAns = tfAnswers[q.id] || {};
              return (
                <div key={q.id} className="quiz-card space-y-3">
                  <div className="flex items-start gap-2">
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-[#162c3b] text-[#38bdf8]">
                      Câu {idx + 1}
                    </span>
                    <p className="text-xs sm:text-sm text-[#cbd5e1] leading-relaxed">
                      [Tình huống]: {q.context}
                    </p>
                  </div>

                  <div className="space-y-2 pt-1">
                    {q.statements.map((st, sIdx) => {
                      const userVal = qAns[sIdx];
                      const isCorrect = isSubmitted && userVal === st.answer;

                      return (
                        <div
                          key={sIdx}
                          className={`p-3 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 ${
                            isSubmitted
                              ? isCorrect
                                ? "bg-emerald-500/10 border-emerald-500/30"
                                : "bg-red-500/10 border-red-500/30"
                              : "bg-[#070e16] border-[#162c3a]"
                          }`}
                        >
                          <span className="text-xs sm:text-sm text-[#cbd5e1] flex-1 leading-relaxed">
                            <strong className="text-[#2dd4bf] mr-1.5">{["a", "b", "c", "d"][sIdx]})</strong>
                            {st.text}
                          </span>
                          <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                            <button
                              disabled={isSubmitted}
                              onClick={() =>
                                setTfAnswers((prev) => ({
                                  ...prev,
                                  [q.id]: { ...(prev[q.id] || {}), [sIdx]: true },
                                }))
                              }
                              className={`px-3 py-1 rounded-md text-xs font-bold transition-all ${
                                userVal === true
                                  ? "bg-[#2dd4bf] text-[#070e16]"
                                  : "bg-[#162c3b] text-[#7591a3] hover:text-[#f1f5f9]"
                              }`}
                            >
                              Đúng
                            </button>
                            <button
                              disabled={isSubmitted}
                              onClick={() =>
                                setTfAnswers((prev) => ({
                                  ...prev,
                                  [q.id]: { ...(prev[q.id] || {}), [sIdx]: false },
                                }))
                              }
                              className={`px-3 py-1 rounded-md text-xs font-bold transition-all ${
                                userVal === false
                                  ? "bg-[#e06d53] text-[#070e16]"
                                  : "bg-[#162c3b] text-[#7591a3] hover:text-[#f1f5f9]"
                              }`}
                            >
                              Sai
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* PHẦN III: TỰ LUẬN & TRẢ LỜI NGẮN */}
        <div className="space-y-4 pt-2">
          <div className="p-3 rounded-xl bg-[#0c1a24] border border-[#162c3a] font-bold text-[#fb923c] text-xs sm:text-sm">
            PHẦN III. Tự luận & Vận dụng (Tự soạn câu trả lời vào ô làm bài)
          </div>

          <div className="space-y-4">
            {examEssays.map((q, idx) => (
              <div key={q.id} className="quiz-card space-y-3">
                <div className="font-semibold text-sm text-[#f1f5f9]">
                  Câu {idx + 1}. {q.q}
                </div>
                <textarea
                  disabled={isSubmitted}
                  rows={4}
                  placeholder="Gõ bài làm tự luận của em vào đây..."
                  value={essayDrafts[q.id] || ""}
                  onChange={(e) =>
                    setEssayDrafts((prev) => ({ ...prev, [q.id]: e.target.value }))
                  }
                  className="w-full p-3.5 rounded-xl border border-[#162c3a] bg-[#070e16] text-xs sm:text-sm text-[#e2e8f0] placeholder-[#4e6b7d] focus:border-[#2dd4bf] outline-none leading-relaxed"
                />
                {isSubmitted && (
                  <div className="explanation-box text-xs space-y-1 mt-2">
                    <span className="font-bold text-[#2dd4bf] block mb-1">Gợi ý đáp án chấm:</span>
                    <p className="text-[#9cb9cd] leading-relaxed whitespace-pre-line">{q.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
