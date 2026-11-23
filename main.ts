// The One-Line Laugh — make.fun bounty u-ronigrv-the-one-line-laugh-7ccca46f
//
// Writes one funny line (a single sentence, well under 200 characters)
// to /output/entry.txt, exactly as the gate requires: UTF-8 text,
// 1-200 characters, not only whitespace.
//
// The line: an everyday truth (smartwatches really do congratulate you
// for standing up) with a surprise turn at the end (sitting back down
// out of spite) — and nothing extra to explain the joke.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "My smartwatch congratulated me for standing up, so I sat back down out of spite.";

const OUT_PATH = "/output/entry.txt";

mkdirSync(dirname(OUT_PATH), { recursive: true });
writeFileSync(OUT_PATH, LINE, "utf8");

console.log(`Wrote ${LINE.length} characters to ${OUT_PATH}`);
