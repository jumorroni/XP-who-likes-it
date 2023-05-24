const { whoLikesIt } = require("../src/index.js")

test("should return 'no one likes this' when the array is empty", () => {
    expect(whoLikesIt('')).toBe('no one likes this')
});

test("should return 'Peter likes this' when the array has 1 name 'Peter' ", () => {
    expect(whoLikesIt('Peter')).toBe('Peter likes this')
});

test("should return 'Jacob and Alex like this' when the list names have 2 items 'Jacob, Alex' ", () => {
    expect(whoLikesIt('Jacob, Alex')).toBe('Jacob and Alex like this')
});

test("should return 'Alex, Jacob and 2 others like this' when the list names have more than 4 items 'Alex, Jacob, Mark, Max' ", () => {
    expect(whoLikesIt('Alex, Jacob, Mark, Max')).toBe('Alex, Jacob and 2 others like this')
});