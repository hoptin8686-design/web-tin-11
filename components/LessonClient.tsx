"use client";

import { useState } from "react";
import Link from "next/link";
import { Question, LessonExtra, Lesson } from "@/lib/types";
import QuizClient from "./QuizClient";
import TrueFalseQuiz from "./TrueFalseQuiz";
import EssayViewer from "./EssayViewer";
import TheoryViewer from "./TheoryViewer";
import SgkViewer from "./SgkViewer";

interface LessonClientProps {
  lesson: Lesson;
  topicTitle: string;
  questions: Question[];
  extra: LessonExtra;
}

type ActiveView = "menu" | "theory" | "sgk" | "quiz" | "tf" | "essay";

export default function LessonClient({
  lesson,
  topicTitle,
  questions,
  extra,
}: LessonClientProps) {
  const [activeView, setActiveView] = useState<ActiveView>("menu");

  const activities = [
    {
      key: "theory" as const,
      icon: "📖",
      title: "Lý thuyết",
      desc: "~8 phút đọc · 4 mục, có sơ đồ tóm tắt và ghi nhớ trọng tâm",
      available: true,
    },
    {
      key: "sgk" as const,
      icon: "📘",
      title: "SGK",
      desc: "Sách điện tử — xem nguyên bài trong sách giáo khoa",
      available: true,
    },
    {
      key: "quiz" as const,
      icon: "🎯",
      title: "Trắc nghiệm",
      desc: `${questions.length} câu · chọn 1 trong 4 phương án, chấm ngay từng câu`,
      available: questions.length > 0,
    },
    {
      key: "tf" as const,
      icon: "⚖️",
      title: "Đúng / Sai",
      desc: `${extra.tf.length} câu tình huống · mỗi câu 4 ý, chấm điểm như thi tốt nghiệp`,
      available: extra.tf.length > 0,
    },
    {
      key: "essay" as const,
      icon: "✏️",
      title: "Tự luận",
      desc: `${extra.essay.length} câu · tự trả lời rồi đối chiếu gợi ý đáp án`,
      available: extra.essay.length > 0,
    },
  ];

  if (activeView !== "menu") {
    return (
      <div className="min-h-screen">
        <div className="max-w-3xl mx-auto px-4 py-8 space-y-6">
          {/* Header */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <button
                onClick={() => setActiveView("menu")}
                className="pill-link"
              >
                ← Quay lại
              </button>

              {activeView === "quiz" && (
                <span className="text-sm font-medium text-[#7591a3]">
                  {questions.length} câu
                </span>
              )}
            </div>

            <div className="space-y-0.5">
              <h1 className="text-xl sm:text-2xl font-bold text-[#f1f5f9]">
                Bài {lesson.baiNumber}. {lesson.title}
              </h1>
              <p className="text-xs sm:text-sm text-[#5b7789]">
                Chủ đề {topicTitle}
              </p>
            </div>
          </div>

          {/* Sub-view Content */}
          {activeView === "theory" && (
            <TheoryViewer
              onStartQuiz={() => setActiveView("quiz")}
            />
          )}

          {activeView === "sgk" && (
            <SgkViewer
              onBack={() => setActiveView("menu")}
            />
          )}

          {activeView === "quiz" && (
            <QuizClient
              lessonId={lesson.id}
              rawQuestions={questions}
              onBack={() => setActiveView("menu")}
            />
          )}

          {activeView === "tf" && <TrueFalseQuiz questions={extra.tf} />}

          {activeView === "essay" && <EssayViewer questions={extra.essay} />}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="max-w-3xl mx-auto px-4 py-8 space-y-6">
        {/* Back Link */}
        <div className="animate-fade-in-up">
          <Link href="/" className="pill-link">
            ← Trang chủ
          </Link>
        </div>

        {/* Title */}
        <div className="space-y-1 animate-fade-in-up" style={{ animationDelay: "0.06s" }}>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#f1f5f9]">
            Bài {lesson.baiNumber}. {lesson.title}
          </h1>
          <p className="text-xs sm:text-sm text-[#5b7789]">
            Chủ đề {topicTitle}
          </p>
        </div>

        {/* Activity Cards (Full-width list match Web Tin 12) */}
        <div className="space-y-3">
          {activities.map((act, idx) => (
            <button
              key={act.key}
              onClick={() => act.available && setActiveView(act.key)}
              disabled={!act.available}
              className="activity-card group animate-fade-in-up"
              style={{ animationDelay: `${0.12 + idx * 0.04}s` }}
            >
              <div className="text-2xl shrink-0 flex items-center justify-center w-9 h-9">
                {act.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-bold text-sm sm:text-base text-[#f1f5f9]">
                  {act.title}
                </div>
                <div className="text-xs sm:text-[13px] text-[#637e90] mt-0.5">
                  {act.desc}
                </div>
              </div>
              <span className="text-base text-[#375365] shrink-0 font-bold group-hover:text-[#2dd4bf] transition-colors">
                →
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
