import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One fixed, deterministic one-liner: the joke IS the program's output.
// No clock, no randomness, no network, no model calls — the same bytes
// come out on every run.
const ENTRY =
  "The ATM asked if I wanted a receipt for my disappointment.";

function writeEntry(): void {
  // The grader runs with MAKEFUN_OUTPUT_DIR set; never delete the
  // output dir, only create it and write the single entry file.
  const targetDir = process.env.MAKEFUN_OUTPUT_DIR;
  if (targetDir === undefined || targetDir === "") {
    throw new Error("MAKEFUN_OUTPUT_DIR is not set");
  }
  mkdirSync(targetDir, { recursive: true });
  writeFileSync(join(targetDir, "entry.txt"), ENTRY, "utf8");
}

writeEntry();
