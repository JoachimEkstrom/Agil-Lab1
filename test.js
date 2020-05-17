function name() {
  return "Berra";
}

function add(num1, num2) {
  return num1 + num2;
}

function createRandomObject() {
  return {
    value: 10,
    text: "Bazinga!",
    array: [1, 2, 3],
    squared: (num) => {
      return num * num;
    },
  };
}

module.exports = { name, add, createRandomObject };
