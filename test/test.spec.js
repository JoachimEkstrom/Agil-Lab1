const assert = require("assert");
const test = require("../test.js");

describe("Test", function () {
  describe("name", function () {
    it("Should return the name Berra", function () {
      let result = test.name();
      assert.strictEqual(result, "Berra");
    });
    it("Should return a String-type", function () {
      let result = typeof test.name();
      assert.strictEqual(result, "string");
    });
  });
});
