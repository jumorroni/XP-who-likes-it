const { whoLikesIt } = require("../src/index.js")

test("should return 'no one likes this' when the array is empty", () => {
    expect(whoLikesIt('')).toBe('no one likes this')
});

test("should return 'Peter likes this' when the array has 1 name 'Peter' ", () => {
    expect(whoLikesIt('Peter')).toBe('Peter likes this')
});