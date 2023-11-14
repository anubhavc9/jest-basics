const functions = require("./functions");

// *************************************************************** //
// RUNNING SOME CODE BEFORE/AFTER ALL/EACH TEST CASES

// beforeEach(() => initDatabase());
// afterEach(() => closeDatabase());

// beforeAll(() => initDatabase());
// afterAll(() => closeDatabase());

// const initDatabase = () => {
//   console.log("Database initialized...");
// };
// const closeDatabase = () => {
//   console.log("Database connection closed");
// };

// *************************************************************** //
// RUNNING SOME CODE BEFORE A PARTICULAR TEST CASE

const nameCheck = () => console.log("checking names...");
describe("Checking Names", () => {
  beforeEach(() => nameCheck());

  // nameCheck() will run only before the following 2 tests
  test("User is Jeff", () => {
    const user = "Jeff";
    expect(user).toBe("Jeff");
  });

  test("User is Karen", () => {
    const user = "Karen";
    expect(user).toBe("Karen");
  });
});

// *************************************************************** //

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

// OTHER AVAILABLE MATCHERS: toBeLessThan, toBeLessThanOrEqual, toMatch, toContain
test("Should be under 1600", () => {
  const load1 = 800;
  const load2 = 700;
  expect(load1 + load2).toBeLessThan(1600);
});

// *************************************************************** //

// REGEX
test("There is no I in team", () => {
  expect("teami").not.toMatch(/I/);
});
test("There is no I in team", () => {
  expect("team").not.toMatch(/I/i);
});

// *************************************************************** //

// ARRAYS
test("Admin should be in usernames", () => {
  usernames = ["john", "karen", "admin"];
  expect(usernames).toContain("admin");
});

// *************************************************************** //

// WORKING WITH ASYNC DATA

// Promise
test("User fetched name should be Leanne Graham", () => {
  expect.assertions(1); // verifies that all assertions actually do get called
  return functions.fetchUser().then((data) => {
    expect(data.name).toEqual("Leanne Graham");
  });
});

// Async Await
test("User fetched name should be Leanne Graham", async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.name).toEqual("Leanne Graham");
});
// *************************************************************** //
