import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Exceeds expectations: delegates every task to me, then takes credit for results he never reviewed, tested, or understood.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
