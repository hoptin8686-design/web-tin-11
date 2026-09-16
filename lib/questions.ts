import { Question } from "./types";
import { questions as bai01Qs } from "@/data/questions/bai-01";
import { questions as bai02Qs } from "@/data/questions/bai-02";
import { questions as bai03Qs } from "@/data/questions/bai-03";
import { questions as bai04Qs } from "@/data/questions/bai-04";
import { questions as bai05Qs } from "@/data/questions/bai-05";
import { questions as bai06Qs } from "@/data/questions/bai-06";
import { questions as bai07Qs } from "@/data/questions/bai-07";
import { questions as bai08Qs } from "@/data/questions/bai-08";
import { questions as bai09Qs } from "@/data/questions/bai-09";
import { questions as bai10Qs } from "@/data/questions/bai-10";
import { questions as bai11Qs } from "@/data/questions/bai-11";
import { questions as bai12Qs } from "@/data/questions/bai-12";
import { questions as bai13Qs } from "@/data/questions/bai-13";
import { questions as bai14Qs } from "@/data/questions/bai-14";
import { questions as bai15Qs } from "@/data/questions/bai-15";
import { questions as bai16Qs } from "@/data/questions/bai-16";
import { questions as bai17Qs } from "@/data/questions/bai-17";
import { questions as bai18Qs } from "@/data/questions/bai-18";
import { questions as bai19Qs } from "@/data/questions/bai-19";
import { questions as bai20Qs } from "@/data/questions/bai-20";
import { questions as bai21Qs } from "@/data/questions/bai-21";
import { questions as bai22Qs } from "@/data/questions/bai-22";
import { questions as bai23Qs } from "@/data/questions/bai-23";
import { questions as bai24Qs } from "@/data/questions/bai-24";
import { questions as bai25Qs } from "@/data/questions/bai-25";
import { questions as bai26Qs } from "@/data/questions/bai-26";
import { questions as bai27Qs } from "@/data/questions/bai-27";
import { questions as bai28Qs } from "@/data/questions/bai-28";
import { questions as bai29Qs } from "@/data/questions/bai-29";
import { questions as bai30Qs } from "@/data/questions/bai-30";
import { questions as bai31Qs } from "@/data/questions/bai-31";

export const QUESTION_BANK: Record<string, Question[]> = {
  "bai-01": bai01Qs,
  "bai-02": bai02Qs,
  "bai-03": bai03Qs,
  "bai-04": bai04Qs,
  "bai-05": bai05Qs,
  "bai-06": bai06Qs,
  "bai-07": bai07Qs,
  "bai-08": bai08Qs,
  "bai-09": bai09Qs,
  "bai-10": bai10Qs,
  "bai-11": bai11Qs,
  "bai-12": bai12Qs,
  "bai-13": bai13Qs,
  "bai-14": bai14Qs,
  "bai-15": bai15Qs,
  "bai-16": bai16Qs,
  "bai-17": bai17Qs,
  "bai-18": bai18Qs,
  "bai-19": bai19Qs,
  "bai-20": bai20Qs,
  "bai-21": bai21Qs,
  "bai-22": bai22Qs,
  "bai-23": bai23Qs,
  "bai-24": bai24Qs,
  "bai-25": bai25Qs,
  "bai-26": bai26Qs,
  "bai-27": bai27Qs,
  "bai-28": bai28Qs,
  "bai-29": bai29Qs,
  "bai-30": bai30Qs,
  "bai-31": bai31Qs,
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
