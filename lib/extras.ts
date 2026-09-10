import { LessonExtra } from "./types";
import { extraBai01 } from "@/data/extra/bai-01";

export const EXTRA_BANK: Record<string, LessonExtra> = {
  "bai-01": extraBai01,
};

export function getExtraForLesson(lessonId: string): LessonExtra {
  return EXTRA_BANK[lessonId] || { tf: [], essay: [] };
}
