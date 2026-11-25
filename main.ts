import { mkdirSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

// One fixed, deterministic one-liner: the joke IS the program's output.
// No clock, no randomness, no network, no model calls — the same bytes
// come out on every run.
const ENTRY =
  "I gave my best speed-dating pitch to a woman who turned out to be the fire exit.";

function writeEntry(): void {
  const targetDir =
    process.env.MAKEFUN_OUTPUT_DIR ?? resolve(process.cwd(), "out");
  mkdirSync(targetDir, { recursive: true });
  writeFileSync(join(targetDir, "entry.txt"), ENTRY, "utf8");
}

writeEntry();
