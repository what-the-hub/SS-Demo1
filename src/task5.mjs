function isValid(obj) {
    let revisionContext = {
        min: 0,
        max: 0
    };
    let minValue = parseInt(obj.min, 10);
    let maxValue = parseInt(obj.max, 10);

    if (!obj || !minValue || !maxValue ||
        isNaN(minValue) || isNaN(maxValue) ||
        !Number.isInteger(minValue) || !Number.isInteger(maxValue) ||
        minValue < 1 || maxValue < 1 || minValue > 999999 || maxValue > 999999) {
        let errorMessage = {
            status: "failed",
            reason: "Check your values. it must be obj {min: number, max:number}. min, max in range [1, 999999] and integer."
        };
        return errorMessage;
    }
    if (maxValue < minValue) {
        let temp = maxValue;
        maxValue = minValue;
        minValue = temp;
    }
    revisionContext.min = minValue;
    revisionContext.max = maxValue;
    return revisionContext;
}

function numToArr(num) {
    let arr = [0, 0, 0, 0, 0, 0];
    let numToStr = num.toString();
    for (let i = 0; i < numToStr.length; i++) {
        arr[arr.length - i - 1] = parseInt(numToStr[numToStr.length - i - 1]);
    }
    return arr;
}

function simpleWayFunctionCounter(arr) {
    const leftSide = arr[0] + arr[1] + arr[2];
    const rightSide = arr[3] + arr[4] + arr[5];
    if (leftSide === rightSide) {
        return 1;
    } else return 0;
}

function difficultWayFunctionCounter(arr) {
    const evenSum = arr[1] + arr[3] + arr[5];
    const oddSum = arr[0] + arr[2] + arr[4];
    if (oddSum === evenSum) {
        return 1;
    } else return 0;
}

function ticketsChecker(obj) {
    if (isValid(obj).reason) {
        return isValid(obj);
    }
    const validObj = isValid(obj);
    let simpleCounter = 0,
        difficultCounter = 0;
    for (let i = validObj.min; i <= validObj.max; i += 1) {
        let ticket = numToArr(i);
        simpleCounter += simpleWayFunctionCounter(ticket);
        difficultCounter += difficultWayFunctionCounter(ticket);
    }
    let infoObj = {
        tickets: {
            simple: simpleCounter,
            hard: difficultCounter
        },
        winner: ""
    }
    if (simpleCounter > difficultCounter) {
        infoObj.winner = "simple";
    } else if (difficultCounter > simpleCounter) {
        infoObj.winner = "hard";
    } else {
        infoObj.winner = "both"
    }
    return infoObj;
}
export { ticketsChecker }

// const context = {
//     min: 555555,
//     max: 555555
// };
// console.log(ticketsChecker(context));