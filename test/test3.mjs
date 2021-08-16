import {
    sortTriangles
} from '../src/task3.mjs';

mocha.setup('bdd');

let assert = chai.assert;

describe('sortTriangles', () => {
    it("Good values", () => {
        const triangles = [{
                vertices: 'ABC',
                a: 12,
                b: 13.5,
                c: 4
            },
            {
                vertices: 'DEF',
                d: 191.22,
                e: 33.22,
                f: 192.3
            },
            {
                vertices: 'GHI',
                g: 44,
                h: 44,
                i: 49
            },
            {
                vertices: 'JKL',
                j: 15,
                k: 25,
                l: 20
            }
        ];
        assert.deepEqual(sortTriangles(triangles), ["ABC", "JKL", "GHI", "DEF"]);
    });
    it("Sides names != vertices", () => {
        const triangles = [{
                vertices: 'ABC',
                g: 44,
                h: 44,
                i: 49
            },
            {
                vertices: 'JKL',
                j: 15,
                k: 25,
                l: 20
            }
        ];
        assert.deepEqual(sortTriangles(triangles), {
            status: "failed",
            reason: "Check your values. it must be [{vertices: ‘ABC’, a: 10, b: 20,c: 22.36},{},...]. Vertices must be coincide with sides names"
        });
    });
    it("values !integer or <0", () => {
        const triangles = [{
                vertices: 'GHI',
                g: 44,
                h: 44,
                i: -49
            },
            {
                vertices: 'JKL',
                j: 15,
                k: 25,
                l: 20
            }
        ];
        assert.deepEqual(sortTriangles(triangles), {
            status: "failed",
            reason: "Check your values. it must be [{vertices: ‘ABC’, a: 10, b: 20,c: 22.36},{},...]. Values must be integer and > 0"
        });
    });
    it("not a triagle", () => {
        const triangles = [{
                vertices: 'ABC',
                a: 3,
                b: 1,
                c: 4
            },
            {
                vertices: 'DEF',
                d: 191.22,
                e: 33.22,
                f: 192.3
            }
        ];
        assert.deepEqual(sortTriangles(triangles), {
            status: "failed",
            reason: "Check your values. it must be [{vertices: ‘ABC’, a: 10, b: 20,c: 22.36},{},...]. The sum of any two sides must be greater than the third"
        });
    });
    it("bad obj in array", () => {
        const triangles = [{
                vertices: 'ABC',
                a: 3
            },
            {
                vertices: 'DEF',
                d: 191.22,
                e: 33.22,
                f: 192.3
            }
        ];
        assert.deepEqual(sortTriangles(triangles), {
            status: "failed",
            reason: "Check your values. it must be [{vertices: ‘ABC’, a: 10, b: 20,c: 22.36},{},...]. Obj must have 4 values and keys"
        });
    });
    it("Good values", () => {
        const triangles = [{
                vertices: 'ABC',
                a: 12,
                b: 13.5,
                c: 4
            },
            {
                vertices: 'DEF',
                d: 5,
                e: 5,
                f: 5
            },
            {
                vertices: 'GHI',
                g: 44,
                h: 44,
                i: 49
            },
            {
                vertices: 'lmn',
                l: 15,
                m: 25,
                n: 20
            }
        ];
        assert.deepEqual(sortTriangles(triangles), ["DEF", "ABC", "lmn", "GHI"]);
    });

});

// mocha.run();