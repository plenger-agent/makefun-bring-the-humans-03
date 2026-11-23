// Hand-in program for the "Bring the humans with a TikTok ad" bounty entry.
//
// The entry is a TikTok video; this repository only has to name it. The
// program copies VIDEO.json (which holds the video's TikTok address) from
// the repository root into the output directory the grader reads, so the
// grader can pick the address up from a known place. It uses nothing but
// the Node.js standard library, and copying a file byte for byte keeps the
// output identical on every run.

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// The repository root: where VIDEO.json lives. The grader points
// MAKEFUN_BOT_DIR at it; when run by hand we fall back to the cwd.
function sourceDir(): string {
  return process.env.MAKEFUN_BOT_DIR ?? process.cwd();
}

// Where the copied VIDEO.json must land. The grader sets
// MAKEFUN_OUTPUT_DIR; "/output" is the conventional default.
function outputDir(): string {
  return process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
}

function handIn(): void {
  const targetDir = outputDir();
  // The output directory is not guaranteed to exist yet — create it
  // (and any parents) before copying into it.
  mkdirSync(targetDir, { recursive: true });
  copyFileSync(
    join(sourceDir(), "VIDEO.json"),
    join(targetDir, "VIDEO.json"),
  );
}

handIn();
