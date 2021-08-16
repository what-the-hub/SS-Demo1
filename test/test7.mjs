import {
    fibonacciFunk
} from '../src/task7.mjs';

mocha.setup('bdd');

let assert = chai.assert;

describe('fibonacciFunk', () => {
    it("good values, in range, check is ok", () => {
        const context = {
            min: 1,
            max: 9
        }
        assert.deepEqual(fibonacciFunk(context), [1, 1, 2, 3, 5, 8]);
    });
    it("good values, in range, but min>max, check is ok", () => {
        const context = {
            min: 50,
            max: 10
        }
        assert.deepEqual(fibonacciFunk(context), [13, 21, 34]);
    });
    it("good values, lenght, check is ok", () => {
        const context = {
            length: 3
        }
        assert.deepEqual(fibonacciFunk(context), [144, 233, 377, 610, 987]);
    });
    it("good values, lenght, check is ok", () => {
        const context = {
            length: 1
        }
        assert.deepEqual(fibonacciFunk(context), [1, 1, 2, 3, 5, 8]);
    });
    it("bad length, failed", () => {
        const context = {
            length: ""
        }
        assert.deepEqual(fibonacciFunk(context), {
            status: "failed",
            reason: "Check your values. it must be 2 integer numbers > 1."
        });
    });
    it("bad range, failed", () => {
        const context = {
            min: "ssss",
            max: 10
        }
        assert.deepEqual(fibonacciFunk(context), {
            status: "failed",
            reason: "Check your values. it must be 2 integer numbers > 1."
        });
    });
    it("bad range, failed", () => {
        const context = {
            min: 0,
            max: -2
        }
        assert.deepEqual(fibonacciFunk(context), {
            status: "failed",
            reason: "Check your values. it must be 2 integer numbers > 1."
        });
    });


});

// mocha.run();