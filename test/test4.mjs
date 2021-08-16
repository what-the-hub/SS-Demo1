import {
    isPalindrome
} from '../src/task4.mjs';

mocha.setup('bdd');

let assert = chai.assert;

describe('isPalindrome', () => {
    it("This number have palindrome", () => {
        assert.equal(isPalindrome(1213312), "213312");
    });
    it("This number have palindrome", () => {
        assert.equal(isPalindrome(111), "111");
    });
    it("This number did not have palindrome", () => {
        assert.equal(isPalindrome(4753478946982), 0);
    });
    it("not correct number", () => {
        assert.deepEqual(isPalindrome(10), {
            status: "failed",
            reason: "Check your values. it must be integer number (10 < number <= 9007199254740991)."
        });
    });
    it("not correct number", () => {
        assert.deepEqual(isPalindrome("sdasda"), {
            status: "failed",
            reason: "Check your values. it must be integer number (10 < number <= 9007199254740991)."
        });
    });
    it("not correct number", () => {
        assert.deepEqual(isPalindrome(9007199254740992), {
            status: "failed",
            reason: "Check your values. it must be integer number (10 < number <= 9007199254740991)."
        });
    });
});

// mocha.run();