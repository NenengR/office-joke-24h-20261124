import { mkdirSync, writeFileSync } from "node:fs";

// Office joke angle: the classic "this meeting could have been an email"
// premise, escalated by a follow-up meeting, then flipped so the email
// becomes a calendar invite and the speaker becomes the attachment.
// The twist lands on the last word.
const line =
  "The meeting that could have been an email got a follow-up meeting, so now the email is a calendar invite and I am the attachment.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line, "utf8");
console.log("entry written");
