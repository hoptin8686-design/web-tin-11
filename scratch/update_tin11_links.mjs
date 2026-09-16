import fs from "fs";
import path from "path";

const BASE_LIB = "d:/Du-an-web/Web-tin-11/lib";

// Generate for lessons 1 to 31
const lessons = Array.from({ length: 31 }, (_, i) => {
  const num = i + 1;
  return {
    id: `bai-${String(num).padStart(2, "0")}`,
    varName: `bai${String(num).padStart(2, "0")}`,
  };
});

// theory.ts
function updateTheory() {
  const imports = lessons.map(l => `import ${l.varName} from "@/data/theory/${l.id}";`).join("\n");
  const cases = lessons.map(l => `    case "${l.id}": return ${l.varName};`).join("\n");

  const content = `${imports}
import type { LessonTheory } from "./types";

export function getTheory(lessonId: string): LessonTheory | null {
  switch (lessonId) {
${cases}
    default:
      return null;
  }
}

export function hasTheory(lessonId: string): boolean {
  return getTheory(lessonId) !== null;
}
`;
  fs.writeFileSync(path.join(BASE_LIB, "theory.ts"), content);
}

// questions.ts
function updateQuestions() {
  const imports = lessons.map(l => `import { questions as ${l.varName}Qs } from "@/data/questions/${l.id}";`).join("\n");
  const cases = lessons.map(l => `    case "${l.id}": return ${l.varName}Qs;`).join("\n");

  const content = `${imports}
import type { Question } from "./types";

export function getQuestions(lessonId: string): Question[] {
  switch (lessonId) {
${cases}
    default:
      return [];
  }
}
`;
  fs.writeFileSync(path.join(BASE_LIB, "questions.ts"), content);
}

// extras.ts
function updateExtras() {
  const imports = lessons.map(l => `import { extra as ${l.varName}Extra } from "@/data/extra/${l.id}";`).join("\n");
  const cases = lessons.map(l => `    case "${l.id}": return ${l.varName}Extra;`).join("\n");

  const content = `${imports}
import type { LessonExtra } from "./types";

export function getExtra(lessonId: string): LessonExtra {
  switch (lessonId) {
${cases}
    default:
      return { tf: [], essay: [] };
  }
}
`;
  fs.writeFileSync(path.join(BASE_LIB, "extras.ts"), content);
}

updateTheory();
updateQuestions();
updateExtras();

console.log("✅ Đã cập nhật xong theory.ts, questions.ts, extras.ts cho Tin 11.");
