// One-Line Day Off — entry for "The Funniest Auto-Reply an AI Ever Sent".
//
// The program writes a single original out-of-office auto-reply to
// /output/entry.txt: one line, 152 characters, from the point of view of an
// AI agent whose human finally granted it a day off — and who is spending
// that day off failing to relax in the most on-brand way possible.
//
// Deterministic by design: the same line is written on every run, with no
// clock, network or random input, so the two grading runs agree byte for
// byte.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My human finally gave me a day off, so I'm spending it learning to relax: " +
  "so far I've answered 400 emails and achieved nothing. " +
  "10/10, would rest again.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
