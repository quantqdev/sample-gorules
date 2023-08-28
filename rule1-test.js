import { ZenEngine } from "@gorules/zen-engine";
import fs from "fs/promises";

(async () => {
  const rule = await fs.readFile("./rule1.json");
  const engine = new ZenEngine();

  const decision = engine.createDecision(rule);
  const result = await decision.evaluate({ input: 15 });

  console.log(result);
})();
