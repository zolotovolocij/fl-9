function reverseNumber(num) {
    if (num < 0) {
        return -reverseNumber(-num);
    }
    let revNum = num.toString().split('').reverse().join('');
    return parseFloat(revNum);
}