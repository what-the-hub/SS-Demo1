import {
    checkValueNestingEnvelope
} from '../src/task2.mjs';

mocha.setup('bdd');

let assert = chai.assert;

describe('checkValueNestingEnvelope', () => {

    it("envelope1 input in envelope2", () => {
        assert.equal(checkValueNestingEnvelope({ a: 34, b: 32 }, { c: 56.6, d: 69 }), 1);
    });
    it("envelope2 input in envelope1", () => {
        assert.equal(checkValueNestingEnvelope({ a: 34.0001, b: 32.2 }, { c: 1, d: 2 }), 2);
    });
    it("envelope1 = envelope2", () => {
        assert.equal(checkValueNestingEnvelope({ a: 5, b: 5 }, { c: 5, d: 5 }), 0);
    });
    it("envelope1 or envelope2 values NaN", () => {
        assert.deepEqual(checkValueNestingEnvelope({ a: "sss", b: 5 }, { c: "www", d: 5 }), {
            status: "failed",
            reason: "Check your values. it must be: float, >0 , <100000."
        });
    });
    it("envelope1 or envelope2 values > 1000001", () => {
        assert.deepEqual(checkValueNestingEnvelope({ a: 1000001, b: 5 }, { c: 2, d: 3 }), {
            status: "failed",
            reason: "Check your values. it must be: float, >0 , <100000."
        });
    });
});

// mocha.run();