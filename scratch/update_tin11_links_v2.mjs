import fs from "fs";
import path from "path";

const BASE_LIB = "d:/Du-an-web/Web-tin-11/lib";

const lessons = Array.from({ length: 31 }, (_, i) => {
  const num = i + 1;
  return {
    id: `bai-${String(num).padStart(2, "0")}`,
    varName: `bai${String(num).padStart(2, "0")}`,
  };
});

function updateQuestions() {
  const imports = lessons.map(l => `import { questions as ${l.varName}Qs } from "@/data/questions/${l.id}";`).join("\n");
  const recordItems = lessons.map(l => `  "${l.id}": ${l.varName}Qs,`).join("\n");

  const content = `import { Question } from "./types";
${imports}

export const QUESTION_BANK: Record<string, Question[]> = {
${recordItems}
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
`;
  fs.writeFileSync(path.join(BASE_LIB, "questions.ts"), content);
}

function updateExtras() {
  const imports = lessons.map(l => `import { extra as ${l.varName}Extra } from "@/data/extra/${l.id}";`).join("\n");
  const recordItems = lessons.map(l => `  "${l.id}": ${l.varName}Extra,`).join("\n");

  const content = `import { LessonExtra } from "./types";
${imports}

export const EXTRA_BANK: Record<string, LessonExtra> = {
${recordItems}
};

export function getExtraForLesson(lessonId: string): LessonExtra {
  return EXTRA_BANK[lessonId] || { tf: [], essay: [] };
}
`;
  fs.writeFileSync(path.join(BASE_LIB, "extras.ts"), content);
}

updateQuestions();
updateExtras();

console.log("✅ Đã cập nhật xong questions.ts và extras.ts cho Tin 11 bằng Record.");
