const functions = require("./functions");

test("Adds 2 + 2 to equal 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

test("Adds 2 + 2 to NOT equal 5", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

// *************************************************************** //

// CHECK FOR TRUTHY & FALSY VALUES
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false

test("Should be null", () => {
  expect(functions.isNull()).toBeNull();
});

test("Should be falsy", () => {
  expect(functions.checkValue(null)).toBeFalsy();
});
test("Should be falsy", () => {
  expect(functions.checkValue(0)).toBeFalsy();
});
test("Should be falsy", () => {
  expect(functions.checkValue(undefined)).toBeFalsy();
});
// test("Should be falsy", () => {
//   expect(functions.checkValue(1)).toBeFalsy();
// });

// *************************************************************** //

// test("User should be Anubhav Kandiyal object", () => {
//   expect(functions.createUser()).toBe({
//     firstName: "Anubhav",
//     lastName: "Kandiyal",
//   });
// });

// toBe() is used for primitive types like numbers, strings
// For reference types like arrays, objects, you need to use toEqual()

test("User should be Anubhav Kandiyal object", () => {
  expect(functions.createUser()).toEqual({
    firstName: "Anubhav",
    lastName: "Kandiyal",
  });
});

// *************************************************************** //

// OTHER AVAILABLE MATCHERS: toBeLessThan, toBeLessThanOrEqual
test("Should be under 1600", () => {
  const load1 = 800;
  const load2 = 700;
  expect(load1 + load2).toBeLessThan(1600);
});
// *************************************************************** //
