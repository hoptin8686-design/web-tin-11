import { Question } from "./types";
import { questionsBai01 } from "@/data/questions/bai-01";

export const QUESTION_BANK: Record<string, Question[]> = {
  "bai-01": questionsBai01,
};

export function getQuestionsForLesson(lessonId: string): Question[] {
  return QUESTION_BANK[lessonId] || [];
}

/**
 * Trộn ngẫu nhiên danh sách câu hỏi và đảo thứ tự các phương án lựa chọn
 */
export function shuffleQuiz(questions: Question[]): Question[] {
  const shuffledQuestions = [...questions].sort(() => Math.random() - 0.5);

  return shuffledQuestions.map((q) => {
    // Tạo mảng chỉ số [0, 1, 2, 3] và đảo ngẫu nhiên
    const indices = q.options.map((_, i) => i).sort(() => Math.random() - 0.5);
    const newOptions = indices.map((i) => q.options[i]);
    const newAnswer = indices.indexOf(q.answer);

    return {
      ...q,
      options: newOptions,
      answer: newAnswer,
    };
  });
}
