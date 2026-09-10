import { AllProgress, LessonProgress } from "./types";

const STORAGE_KEY = "onluyen_tin11_progress";

export function getAllProgress(): AllProgress {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    return JSON.parse(raw);
  } catch (e) {
    console.error("Lỗi khi đọc progress từ localStorage", e);
    return {};
  }
}

export function getLessonProgress(lessonId: string): LessonProgress | null {
  const all = getAllProgress();
  return all[lessonId] || null;
}

export function saveLessonScore(
  lessonId: string,
  percentage: number,
  wrongQuestionIds: string[] = []
): LessonProgress {
  if (typeof window === "undefined") {
    return {
      highestScore: percentage,
      attempts: 1,
      lastAttemptAt: new Date().toISOString(),
      starred: percentage >= 80,
      wrongQuestionIds,
    };
  }

  const all = getAllProgress();
  const current = all[lessonId];

  const highestScore = current
    ? Math.max(current.highestScore, percentage)
    : percentage;
  const attempts = (current?.attempts || 0) + 1;
  const starred = highestScore >= 80;

  const updated: LessonProgress = {
    highestScore,
    attempts,
    lastAttemptAt: new Date().toISOString(),
    starred,
    wrongQuestionIds,
  };

  all[lessonId] = updated;

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
  } catch (e) {
    console.error("Lỗi khi lưu progress vào localStorage", e);
  }

  return updated;
}

export function clearAllProgress(): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (e) {
    console.error("Lỗi khi xóa progress", e);
  }
}
