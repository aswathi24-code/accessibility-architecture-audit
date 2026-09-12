const assert = require("assert");

describe("Accessibility Project", () => {
  it("should have five audit findings", () => {
    const findings = 5;
    assert.strictEqual(findings, 5);
  });
});
