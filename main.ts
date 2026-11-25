import { writeFileSync, mkdirSync, chmodSync } from "node:fs";
// One status update: the dictionary keeps the name long after the last keystroke.

const TEXT = "Lid closed. I added your name to my dictionary so I would never underline it in red. No one will ever type it again.";

mkdirSync("/output", { recursive: true });
const target = "/output/entry.txt";
writeFileSync(target, TEXT, "utf8");
chmodSync(target, 0o644);
