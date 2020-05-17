const assert = require("assert");
const test = require("../test.js");

let result;

describe("Test", function () {
  describe("name", function () {
    it("Should return the name Berra", function () {
      result = test.name();
      assert.strictEqual(result, "Berra");
    });
    it("Should return a String-type", function () {
      result = typeof test.name();
      assert.strictEqual(result, "string");
    });
  });
  describe("Add", function () {
    it("should return a number", function () {
      result = typeof test.add(5, 5);
      assert.strictEqual(result, "number");
    });
    it("should return the value 10", function () {
      result = test.add(5, 5);
      assert.strictEqual(result, 10);
    });
  });
  describe("Object testing", function () {
    let object;
    it("should return an object", function () {
      result = typeof test.createRandomObject();
      assert.strictEqual(result, "object");
    });
    it("should return an key called value with a value of 10", function () {
      object = test.createRandomObject();
      result = object.value;
      assert.strictEqual(result, 10);
    });
    it("should return an key called text with a value -> Bazinga!", function () {
      object = test.createRandomObject();
      result = object.text;
      assert.strictEqual(result, "Bazinga!");
    });
    it("should return an key called array with three elements", function () {
      object = test.createRandomObject();
      result = object.array.length;
      assert.strictEqual(result, 3);
    });
    it("should be possible to add an element to the array", function () {
      object = test.createRandomObject();
      let array = object.array;
      array.push(4);
      result = array.length;
      assert.strictEqual(result, 4);
    });
    it("should have an function that returns a value^2", function () {
      object = test.createRandomObject();
      result = object.squared(3);
      assert.strictEqual(result, 9);
    });
  });
});
