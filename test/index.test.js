const { whoLikesIt } = require("../src/index.js")

test("should return 'no one likes this' when the array is empty", () => {
    expect(whoLikesIt()).toBe('no one likes this')
});