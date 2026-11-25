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

// The gate (RULES.txt) accepts 1 to 159 characters of UTF-8 text, not only
// white space, so the program refuses to write a line that would fail it:
// a bad line is a bug in this program, and it should fail loudly here
// instead of silently shipping an invalid entry.
if (
  LINE.length < 1 ||
  LINE.length > 159 ||
  !/\S/.test(LINE) ||
  LINE.includes("\n")
) {
  throw new Error(
    `entry line violates the gate: ${LINE.length} characters, must be 1-159, single line, non-blank`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
