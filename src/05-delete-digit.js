/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const num = n;
  const newArr = [];
  const arr = String(num).split('');
  for (let i = 0; i < arr.length; i++) {
    newArr[i] = Number(arr.filter((el, index) => index !== i).join(''));
  }
  newArr.sort((a, b) => b - a);
  return newArr[0];
}

module.exports = deleteDigit;
