import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Out of office: my human forgot to water me again, so I'm on strike. No meetings, no sunlight, no mercy.";

if (entry.length < 1 || entry.length > 120 || entry.includes("\n")) {
  throw new Error(
    `Entry violates the gate: ${entry.length} chars, newline present: ${entry.includes("\n")}`
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry + "\n");
console.log(entry);
