function getClosestToZero(...arr) {
    let absArr = arr.map(number => Math.abs(number));
    return arr[absArr.indexOf(Math.min(...absArr))];
}