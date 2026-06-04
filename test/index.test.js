import test from "node:test";
import assert from "node:assert/strict";
import { QualityEngine } from "../src/index.js";
test("detects duplicate ids", () => {
  const q = new QualityEngine([{ type: "unique", field: "id" }]);
  assert.equal(q.validate([{ id: 1 }, { id: 1 }]).passed, false);
});
