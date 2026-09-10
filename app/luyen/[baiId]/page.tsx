import { notFound } from "next/navigation";
import { Metadata } from "next";
import { CURRICULUM } from "@/data/curriculum";
import { getQuestionsForLesson } from "@/lib/questions";
import { getExtraForLesson } from "@/lib/extras";
import LessonClient from "@/components/LessonClient";

interface PageProps {
  params: {
    baiId: string;
  };
}

export function generateStaticParams() {
  const params: { baiId: string }[] = [];
  CURRICULUM.forEach((topic) => {
    topic.lessons.forEach((lesson) => {
      params.push({ baiId: lesson.id });
    });
  });
  return params;
}

export function generateMetadata({ params }: PageProps): Metadata {
  let foundLesson = null;
  for (const topic of CURRICULUM) {
    const l = topic.lessons.find((item) => item.id === params.baiId);
    if (l) {
      foundLesson = l;
      break;
    }
  }

  if (!foundLesson) {
    return { title: "Bài học không tồn tại" };
  }

  return {
    title: `Bài ${foundLesson.baiNumber}: ${foundLesson.title} — Ôn Luyện Tin 11`,
    description: `Ôn luyện trắc nghiệm, đúng/sai và tự luận Bài ${foundLesson.baiNumber}: ${foundLesson.title} - SGK Tin học 11 Kết nối tri thức.`,
  };
}

export default function LessonPage({ params }: PageProps) {
  let foundLesson = null;
  let topicTitle = "";

  for (const topic of CURRICULUM) {
    const l = topic.lessons.find((item) => item.id === params.baiId);
    if (l) {
      foundLesson = l;
      topicTitle = `Chủ đề ${topic.topicNumber}: ${topic.title}`;
      break;
    }
  }

  if (!foundLesson) {
    notFound();
  }

  const questions = getQuestionsForLesson(params.baiId);
  const extra = getExtraForLesson(params.baiId);

  return (
    <LessonClient
      lesson={foundLesson}
      topicTitle={topicTitle}
      questions={questions}
      extra={extra}
    />
  );
}
