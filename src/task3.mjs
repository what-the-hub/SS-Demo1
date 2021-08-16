// const triangles = [{
//         vertices: 'ABC',
//         a: 12,
//         b: 13.5,
//         c: 4
//     },
//     {
//         vertices: 'DEF',
//         d: 191.22,
//         e: 33.22,
//         f: 192.3
//     },
//     {
//         vertices: 'GHI',
//         g: 44,
//         h: 44,
//         i: 49
//     },
//     {
//         vertices: 'JKL',
//         j: 15,
//         k: 25,
//         l: 20
//     }
// ];

function sortTriangles(arr) {
    if (checkTriagles(arr).reason) {
        return checkTriagles(arr);
    }
    let sortedArrayOfNames = arr.sort(function(a, b) {
        return getArea(a) - getArea(b);
    });

    for (let i = 0; i < arr.length; i += 1) {
        arr[i] = arr[i].vertices;
    }

    return sortedArrayOfNames;
}

function getArea(triangle) {
    const values = Object.keys(triangle);
    const side1 = triangle[values[1]]; //values[0] => verticles
    const side2 = triangle[values[2]];
    const side3 = triangle[values[3]];
    const perimetr = (side1 + side2 + side3) / 2;
    const getAreaHeronFormula = Math.sqrt(perimetr * (perimetr - side1) * (perimetr - side2) * (perimetr - side3));
    return Math.trunc(getAreaHeronFormula);
}




function checkTriagles(triaglesArray) {
    let errorMessage = {
        status: "failed",
        reason: "Check your values. it must be [{vertices: ‘ABC’, a: 10, b: 20,c: 22.36},{},...]."
    };
    for (let i = 0; i < triaglesArray.length; i += 1) {
        const keyValue = Object.entries(triaglesArray[i]);
        const isValuesLengthNotOk = keyValue.length !== 4;
        if (isValuesLengthNotOk) {
            errorMessage.reason += " Obj must have 4 values and keys";
            return errorMessage;
        };
        const sideA = keyValue[1][1],
            sideB = keyValue[2][1],
            sideC = keyValue[3][1];

        if (isNaN(sideA) || sideA <= 0 || sideA > 1000000 ||
            isNaN(sideB) || sideB <= 0 || sideB > 1000000 ||
            isNaN(sideC) || sideC <= 0 || sideC > 1000000) {
            errorMessage.reason += " Values must be integer and > 0";
            return errorMessage;
        }
        const triangleName = keyValue[0][1].toLowerCase();
        const currentTriangleVertices = keyValue[1][0] + keyValue[2][0] + keyValue[3][0];
        if (triangleName !== currentTriangleVertices) {
            errorMessage.reason += " Vertices must be coincide with sides names";
            return errorMessage;
        };
        if (sideA + sideB <= sideC ||
            sideB + sideC <= sideA ||
            sideC + sideA <= sideB) {
            errorMessage.reason += " The sum of any two sides must be greater than the third";
            return errorMessage;
        }
    }
    return triaglesArray;
}

export { sortTriangles };