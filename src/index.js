module.exports = function reverse(n) {
    let result = [];
    if (n < 0) {
        n = n * (-1);
    }
    result.push(String(n).split('').reverse().join(''));
    return Number(result);
}
