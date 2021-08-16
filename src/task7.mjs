function isValid(obj) {
    let min = obj.min;
    let max = obj.max;
    let length = obj.length;
    if (length && min === undefined && max === undefined &&
        !isNaN(length) && Number.isInteger(length) && length >= 1) {
        return length;
    }
    if (min, max && length === undefined &&
        !isNaN(min) && !isNaN(max) && Number.isInteger(min) && Number.isInteger(max) &&
        min >= 1 && max >= 1) {
        if (max < min) {
            let temp = max;
            max = min;
            min = temp;
        }
        // console.log(minMax);
        return [min, max];
    } else {
        let errorMessage = {
            status: "failed",
            reason: "Check your values. it must be 2 integer numbers > 1."
        };
        return errorMessage;

    }
}


function fibonacciLength(len) {
    let fibN = 0;
    let fibArr = [1, 1];
    let num = [];
    for (let i = 0; fibN.toString().length <= len; i += 1) {
        if (i >= 2) {
            let arrL = fibArr.length;
            fibArr.push(fibArr[arrL - 1] + fibArr[arrL - 2]);
            fibN = fibArr[arrL - 1];
        } else fibN = fibArr[i];
        if (fibN.toString().length === len) {
            num.push(fibN);
        }
    }
    if (len === 1) {
        num.shift();
        return num;
    } else return num;

}

function fibonacciNumbersRange(min, max) {

    let num = [];
    if (min === 1) num = [1, 1];
    for (let i = 1, sum = 2; sum <= max; sum += i, i = sum - i) {
        if (sum >= min) {
            num.push(sum);
        }
    }
    return num;
}

function fibonacciFunk(obj) {
    const values = isValid(obj);
    if (values.reason) {
        return values;
    }
    if (Array.isArray(values)) {
        return fibonacciNumbersRange(values[0], values[1]);
    } else {
        return fibonacciLength(values);
    }
}

export { fibonacciFunk };
// const context = {
//     min: 2,
//     max: 9
// }
// const context2 = {
//         length: 3
//     }
// console.log(fibonacciNumbersRange(context));
// console.log(fibonacciFunk(context2));