"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CURRICULUM } from "@/data/curriculum";
import { getAllProgress } from "@/lib/progress";
import { AllProgress } from "@/lib/types";
import { getQuestionsForLesson } from "@/lib/questions";
import { getExtraForLesson } from "@/lib/extras";

export default function HomeClient() {
  const [progress, setProgress] = useState<AllProgress>({});

  useEffect(() => {
    setProgress(getAllProgress());
  }, []);

  const totalLessons = CURRICULUM.reduce((acc, t) => acc + t.lessons.length, 0);
  const completedLessons = Object.keys(progress).filter(
    (key) => (progress[key]?.attempts || 0) > 0
  ).length;

  return (
    <div className="min-h-screen">
      <div className="max-w-3xl mx-auto px-4 py-10 space-y-8">
        {/* ───── School Badge (gradient pill) ───── */}
        <div className="flex justify-center animate-fade-in-up">
          <div className="school-badge">
            🏫 Trường THPT Phục Hòa - Tỉnh Cao Bằng
          </div>
        </div>

        {/* ───── Hero ───── */}
        <section className="text-center space-y-4 animate-fade-in-up" style={{ animationDelay: "0.08s" }}>
          <div className="flex items-center justify-center gap-2 text-3xl">
            <span>📚</span>
            <span>✨</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            <span className="text-[#f1f5f9]">Ôn luyện </span>
            <span className="text-[#2dd4bf]">Tin </span>
            <span className="text-[#f97316]">học 11</span>
          </h1>

          <p className="max-w-xl mx-auto text-sm sm:text-[14.5px] leading-relaxed text-[#7591a3] text-balance">
            Mỗi bài có phần lý thuyết tự học kèm hình vẽ minh hoạ, rồi tới trắc nghiệm,
            đúng/sai và tự luận — làm đến đâu chấm đến đó, có giải thích từng câu. Đạt
            từ 80% trở lên sẽ nhận sao ⭐. Tiến độ được lưu ngay trên máy của em.
          </p>

          {/* Progress badge */}
          <div className="flex justify-center pt-1">
            <div className="progress-badge">
              🏆 Đã chinh phục {completedLessons}/{totalLessons} bài
            </div>
          </div>
        </section>

        {/* ───── Card Thi thử THPT ───── */}
        <section className="animate-fade-in-up" style={{ animationDelay: "0.14s" }}>
          <div className="thi-thu-card">
            <div className="space-y-1 text-center sm:text-left">
              <h2 className="text-base font-bold flex items-center gap-2 justify-center sm:justify-start text-[#f1f5f9]">
                🎯 Thi thử theo cấu trúc đề tốt nghiệp THPT
              </h2>
              <p className="text-xs sm:text-[13px] text-[#627d8f]">
                Bấm giờ 50 phút, đúng cấu trúc QĐ 764 — trộn đề mới mỗi lần làm
              </p>
            </div>
            <Link href="/thi-thu" className="btn-gradient-pill">
              Bắt đầu →
            </Link>
          </div>
        </section>

        {/* ───── Danh sách Chủ đề & Bài ───── */}
        <section className="space-y-6">
          {CURRICULUM.map((topic, tIdx) => {
            const topicEmojis = ["🤖", "🌐", "⚖️", "🗄️", "🧭", "💾", "🎨"];
            const emoji = topicEmojis[tIdx] || "📘";

            return (
              <div
                key={topic.id}
                className="space-y-2.5 animate-fade-in-up"
                style={{ animationDelay: `${0.18 + tIdx * 0.04}s` }}
              >
                <h3 className="topic-header">
                  <span className="text-base">{emoji}</span>
                  <span>Chủ đề {topic.topicNumber}. {topic.title}</span>
                </h3>

                <div className="space-y-2">
                  {topic.lessons.map((lesson) => {
                    const lp = progress[lesson.id];
                    const isDone = (lp?.attempts || 0) > 0;
                    const isStarred = !!lp?.starred;

                    const qs = getQuestionsForLesson(lesson.id);
                    const ex = getExtraForLesson(lesson.id);
                    const qCount = qs.length;
                    const tfCount = ex.tf.length;
                    const esCount = ex.essay.length;
                    const hasContent = qCount > 0 || tfCount > 0 || esCount > 0;

                    if (!lesson.available) {
                      return (
                        <div key={lesson.id} className="lesson-card disabled">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <span className="font-semibold text-sm text-[#4e6b7d]">
                                Bài {lesson.baiNumber}. {lesson.title}
                              </span>
                              <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-white/[0.03] text-[#3d596b]">
                                🔒 Sắp ra mắt
                              </span>
                            </div>
                          </div>
                          <span className="text-sm text-[#243d4d]">→</span>
                        </div>
                      );
                    }

                    return (
                      <Link key={lesson.id} href={`/luyen/${lesson.id}`} className="lesson-card group">
                        <div className="space-y-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-bold text-sm sm:text-[15px] text-[#f1f5f9]">
                              Bài {lesson.baiNumber}. {lesson.title}
                            </span>
                            {isStarred && <span className="text-xs">⭐</span>}
                            {isDone && !isStarred && (
                              <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400">
                                ✓ Đã làm
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-1.5 flex-wrap text-xs text-[#5b7789]">
                            {qCount > 0 && <span>{qCount} trắc nghiệm</span>}
                            {qCount > 0 && tfCount > 0 && <span>·</span>}
                            {tfCount > 0 && <span>{tfCount} đúng/sai</span>}
                            {(qCount > 0 || tfCount > 0) && esCount > 0 && <span>·</span>}
                            {esCount > 0 && <span>{esCount} tự luận</span>}
                            {hasContent && <span>·</span>}
                            <span className="flex items-center gap-1">
                              📖 có lý thuyết
                            </span>
                            {isDone && lp && (
                              <>
                                <span>·</span>
                                <span className={isStarred ? "text-amber-400 font-semibold" : "text-[#7591a3]"}>
                                  cao nhất {lp.highestScore}%
                                </span>
                              </>
                            )}
                          </div>
                        </div>
                        <span className="text-base text-[#375365] shrink-0 font-bold group-hover:text-[#2dd4bf] transition-colors">
                          →
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
}
