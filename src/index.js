export class QualityEngine {
  constructor(rules) { this.rules = rules; }
  validate(rows) {
    const errors = [];
    for (const rule of this.rules) {
      if (rule.type === "required") rows.forEach((row, i) => { if (row[rule.field] == null || row[rule.field] === "") errors.push({ row: i, rule }); });
      if (rule.type === "range") rows.forEach((row, i) => { if (row[rule.field] < rule.min || row[rule.field] > rule.max) errors.push({ row: i, rule }); });
      if (rule.type === "unique") {
        const seen = new Set(); rows.forEach((row, i) => { if (seen.has(row[rule.field])) errors.push({ row: i, rule }); seen.add(row[rule.field]); });
      }
    }
    return { passed: errors.length === 0, errors };
  }
}
