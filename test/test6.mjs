import {
    numberSequence
} from '../src/task6.mjs';

mocha.setup('bdd');

let assert = chai.assert;

describe('numberSequence', () => {
    it("good values, check is ok", () => {
        assert.equal(numberSequence(2, 3), "2,3");
    });
    it("good values, check is ok", () => {
        assert.equal(numberSequence(3, 15), "4,5,6");
    });
    it("good values, check is ok", () => {
        assert.equal(numberSequence(4, 100), "10,11,12,13");
    });
    it("bad values, failed", () => {
        assert.deepEqual(numberSequence(0, 100), {
            status: "failed",
            reason: "Check your values. it must be 2 integer numbers > 1."
        });
    });
    it("bad values, failed", () => {
        assert.deepEqual(numberSequence(23.2, 100), {
            status: "failed",
            reason: "Check your values. it must be 2 integer numbers > 1."
        });
    });
    it("bad values, failed", () => {
        assert.deepEqual(numberSequence("sssss", 100), {
            status: "failed",
            reason: "Check your values. it must be 2 integer numbers > 1."
        });
    });
});

// mocha.run();