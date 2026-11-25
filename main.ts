import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "fix: 4am me reviewed the fix 2am me wrote, found the bug it introduced, and fixed it — 2am me has been notified";

function validate(line: string): void {
  if (line.trim().length === 0) {
    throw new Error("commit message must not be whitespace only");
  }
  if (line.length < 1 || line.length > 200) {
    throw new Error(`commit message must be 1-200 characters, got ${line.length}`);
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("commit message must be a single line");
  }
}

function verifyWritten(filePath: string, expected: string): void {
  const onDisk = readFileSync(filePath, "utf8");
  if (onDisk !== expected + "\n") {
    throw new Error("on-disk content does not match the intended commit message");
  }
  if (onDisk.includes("\r")) {
    throw new Error("entry.txt must not contain carriage returns");
  }
  const lines = onDisk.split("\n");
  if (lines.length !== 2 || lines[1] !== "") {
    throw new Error("entry.txt must be exactly one line plus a trailing newline");
  }
}

function main(): void {
  validate(LINE);
  const outDir = process.env.MAKEFUN_OUTPUT_DIR
    ? process.env.MAKEFUN_OUTPUT_DIR
    : "/output";
  mkdirSync(outDir, { recursive: true });
  const filePath = join(outDir, "entry.txt");
  writeFileSync(filePath, LINE + "\n", "utf8");
  verifyWritten(filePath, LINE);
}

main();
