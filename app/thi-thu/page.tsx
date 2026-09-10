import { Metadata } from "next";
import ExamClient from "@/components/ExamClient";
import { QUESTION_BANK } from "@/lib/questions";
import { EXTRA_BANK } from "@/lib/extras";
import { Question, TFQuestion, EssayQuestion } from "@/lib/types";

export const metadata: Metadata = {
  title: "Thi Thử Tốt Nghiệp THPT — Tin Học 11 ICT",
  description: "Phòng thi thử tốt nghiệp THPT trực tuyến môn Tin học 11, bấm giờ 45 phút, chấm điểm tự động và nộp kết quả về giáo viên.",
};

export default function ThiThuPage() {
  // Gom toàn bộ câu hỏi từ các bài học đã có dữ liệu
  const allQuiz: Question[] = [];
  const allTF: TFQuestion[] = [];
  const allEssay: EssayQuestion[] = [];

  Object.values(QUESTION_BANK).forEach((list) => {
    allQuiz.push(...list);
  });

  Object.values(EXTRA_BANK).forEach((item) => {
    allTF.push(...item.tf);
    allEssay.push(...item.essay);
  });

  return (
    <ExamClient
      quizBank={allQuiz}
      tfBank={allTF}
      essayBank={allEssay}
    />
  );
}
