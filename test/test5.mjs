import {
    ticketsChecker
} from '../src/task5.mjs';

mocha.setup('bdd');

let assert = chai.assert;

describe('ticketsChecker', () => {
    it("good values, check is ok, vin simple", () => {
        const context = {
            min: 399999,
            max: 555555
        };
        assert.deepEqual(ticketsChecker(context), {
            tickets: {
                hard: 9281,
                simple: 9485
            },
            winner: "simple"
        });
    });
    it("good values, but min>max, check is ok, vin simple", () => {
        const context = {
            min: 100000,
            max: 9999
        };
        assert.deepEqual(ticketsChecker(context), {
            tickets: {
                hard: 4171,
                simple: 4620
            },
            winner: "simple"

        });
    });
    it("good values, check is ok, vin both", () => {
        const context = {
            min: 491234,
            max: 500000
        };
        assert.deepEqual(ticketsChecker(context), {
            tickets: {
                hard: 454,
                simple: 454
            },
            winner: "both"
        });
    });
    it("good values, check is ok, vin hard", () => {
        const context = {
            min: 499200,
            max: 500006
        };
        assert.deepEqual(ticketsChecker(context), {
            tickets: {
                hard: 63,
                simple: 22
            },
            winner: "hard"
        });
    });
    it("failed, bad values", () => {
        const context = {
            min: 0,
            max: 500006
        };
        assert.deepEqual(ticketsChecker(context), {
            status: "failed",
            reason: "Check your values. it must be obj {min: number, max:number}. min, max in range [1, 999999] and integer."
        });
    });
    it("failed, bad values", () => {
        const context = {
            min: 1000000,
            max: 500006
        };
        assert.deepEqual(ticketsChecker(context), {
            status: "failed",
            reason: "Check your values. it must be obj {min: number, max:number}. min, max in range [1, 999999] and integer."
        });
    });
    it("failed, bad values", () => {
        const context = {
            min: "dsdf",
            max: 500006
        };
        assert.deepEqual(ticketsChecker(context), {
            status: "failed",
            reason: "Check your values. it must be obj {min: number, max:number}. min, max in range [1, 999999] and integer."
        });
    });

});

// mocha.run();