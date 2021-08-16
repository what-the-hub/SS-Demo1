function numberSequence(n, m) {
    if (isValid6(n, m)) {
        return isValid6(n, m);
    }
    let arr = [];
    let startPosition = Math.ceil(Math.sqrt(m));

    for (let i = startPosition; i < startPosition + n; i += 1) {
        arr.push(i);
    }
    return arr.join(',');

}
// console.log(numberSequence(1, 4));


function isValid6(n, m) {
    if (!n || !m || isNaN(n) || isNaN(m) ||
        !Number.isInteger(n) || !Number.isInteger(m) ||
        n < 1 || m < 1) {
        let errorMessage = {
            status: "failed",
            reason: "Check your values. it must be 2 integer numbers > 1."
        };
        return errorMessage;
    } else return false;
}

export { numberSequence };