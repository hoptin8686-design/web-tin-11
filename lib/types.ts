export interface Question {
  id: string; // ví dụ: "b1-01"
  q: string; // Câu hỏi
  code?: string; // Đoạn code minh hoạ tuỳ chọn (HTML/CSS, CLI...)
  options: string[]; // 4 lựa chọn
  answer: number; // Chỉ số đáp án đúng (0-3)
  explain: string; // Giải thích ngắn gọn
}

export interface TFStatement {
  text: string; // Nội dung mệnh đề a, b, c, d
  answer: boolean; // Đúng (true) hoặc Sai (false)
  explain: string; // Giải thích vì sao đúng hoặc sai
}

export interface TFQuestion {
  id: string; // ví dụ: "b1-tf1"
  context: string; // Lời dẫn tình huống thực tế 3-5 dòng
  code?: string; // Đoạn code minh hoạ nếu có
  statements: TFStatement[]; // Đủ 4 mệnh đề độc lập
}

export interface EssayQuestion {
  id: string; // ví dụ: "b1-es1"
  q: string; // Đề bài tự luận
  code?: string;
  answer: string; // Gợi ý đáp án (hỗ trợ xuống dòng \n)
}

export interface LessonExtra {
  tf: TFQuestion[];
  essay: EssayQuestion[];
}

export interface Lesson {
  id: string; // "bai-01", "bai-02"...
  baiNumber: number; // 1, 2, 3...
  title: string; // Tên bài: "Hệ điều hành"
  periods: string; // "2 LT (Tiết 1, 2)"
  available: boolean; // Đã có dữ liệu câu hỏi chưa
  description?: string;
}

export interface Topic {
  id: string; // "chu-de-1"
  topicNumber: number; // 1, 2, 3...
  title: string; // "MÁY TÍNH VÀ XÃ HỘI TRI THỨC"
  totalPeriods: string; // "10 tiết (8LT + 2TH)"
  lessons: Lesson[];
}

export interface LessonProgress {
  highestScore: number; // % điểm cao nhất (0 - 100)
  attempts: number; // Số lần đã làm
  lastAttemptAt: string; // ISO date string
  starred: boolean; // Đạt >= 80% thì true
  wrongQuestionIds?: string[]; // Danh sách mã câu làm sai gần nhất
}

export type AllProgress = Record<string, LessonProgress>;

export interface ExamResultSubmission {
  studentName: string;
  className: string;
  examType: string;
  score: number;
  totalPoints: number;
  percentage: number;
  timeSpentSeconds: number;
  submittedAt: string;
}
