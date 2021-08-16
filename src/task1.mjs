function checkValue(obj) {
    let errorMessage = {
        status: "failed",
        reason: "Check your values. Width and Height must be: integer, natural, >0 , <=20. Symbol lenght must be 1"
    };
    let nWidth = obj.width;
    let nHeight = obj.height;
    let customSymbol = obj.symbol;

    if (nWidth && nHeight &&
        Number.isInteger(nWidth) && Number.isInteger(nHeight) &&
        nWidth > 0 && nHeight > 0 &&
        nWidth <= 20 && nHeight <= 20 &&
        customSymbol.length && customSymbol.length === 1) {
        return false;
    } else {
        return errorMessage;
    }
}



function createChessString(nWidth, nHeight, customSymbol) {
    let chessString = "";
    for (let i = 0; i < nHeight; i += 1) {
        for (let j = 0; j < nWidth; j += 1) {
            if (i % 2 === 1) {
                j % 2 === 1 ? chessString += `${customSymbol}` : chessString += ' ';
            } else {
                j % 2 === 1 ? chessString += ' ' : chessString += `${customSymbol}`
            }
        }
        chessString += '\n';
    }

    return chessString;
}

function showChessDesk(obj) {
    if (checkValue(obj)) {
        return checkValue(obj);
    }
    let result = createChessString(obj.width, obj.height, obj.symbol);
    return result;
}

export { showChessDesk };
// const context = {
//     width: 3,
//     height: 3,
//     symbol: "&"
// }

// console.log(showChessDesk(context));