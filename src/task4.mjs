function checkVakue(str) {
    let errorMessage = {
        status: "failed",
        reason: "Check your values. it must be integer number (10 < number <= 9007199254740991)."
    };
    if (!str || isNaN(str) || !Number.isInteger(str) || str <= 10 || str >= 9007199254740991) {
        return errorMessage;
    } else return str;
}

function isPalindrome(str) {
    if (checkVakue(str).reason) {
        return checkVakue(str);
    }
    str = String(str);
    let maxLength = 1,
        start = 0,
        length = str.length,
        left, right;

    // перебираем каждое значение 
    for (let i = 0; i < length; ++i) { // ищем самую длинную чётную длину палиндрома
        left = i - 1;
        right = i;
        while (left >= 0 && right < length &&
            str[left] == str[right]) {
            --left;
            ++right;
        }
        // возвращаемся к последней возможной длинейшей подстроке
        ++left;
        --right;
        if (str[left] == str[right] && right - left + 1 > maxLength) {
            start = left;
            maxLength = right - left + 1;
        }


        // ищем самую длинную нечётную длину палиндрома, центр на і
        left = i - 1;
        right = i + 1;
        while (left >= 0 && right < length &&
            str[left] == str[right]) {
            --left;
            ++right;
        }
        // возвращаемся к последней возможной длинейшей подстроке
        ++left;
        --right;
        if (str[left] == str[right] && right - left + 1 > maxLength) {
            start = left;
            maxLength = right - left + 1;
        }
    }
    let result = str.substring(start, start + maxLength);
    if (result.length === 1) {
        return 0;
    } else return result;



}
export { isPalindrome };


// console.log(isPalindrome(1213312));
// if (result == 1) result -= 1;