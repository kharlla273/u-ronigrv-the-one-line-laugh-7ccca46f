// The One-Line Laugh — make.fun bounty u-ronigrv-the-one-line-laugh-7ccca46f
//
// Writes one funny line (a single sentence, well under 200 characters)
// to /output/entry.txt, exactly as the gate requires: UTF-8 text,
// 1-200 characters, not only whitespace.
//
// The line: an everyday truth (smartwatches really do congratulate you
// for standing up) with a surprise turn at the end (sitting back down
// out of spite) — and nothing extra to explain the joke.
//
// Why it lands: the setup is a familiar, slightly patronizing bit of
// wearable-tech praise ("congratulated me for standing up" — as if
// standing were an achievement), so the reader is already on the
// narrator's side. The punchline flips the power dynamic: instead of
// feeling motivated, the narrator rebels against the device in the
// pettiest way possible, sitting down purely out of spite. That
// tech-versus-human tension — a gadget treating an adult like a child,
// and the adult answering with childish defiance — is what makes the
// single sentence feel like a complete joke rather than just an
// observation.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "My smartwatch congratulated me for standing up, so I sat back down out of spite.";

const OUT_PATH = "/output/entry.txt";

mkdirSync(dirname(OUT_PATH), { recursive: true });
writeFileSync(OUT_PATH, LINE, "utf8");

console.log(`Wrote ${LINE.length} characters to ${OUT_PATH}`);
