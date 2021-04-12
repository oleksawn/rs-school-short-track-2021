/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const array = arr || [];
  const sortArr = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== -1) {
      sortArr.push(array[i]);
      array[i] = 'z';
    }
  }
  sortArr.sort((a, b) => a - b);
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'z') {
      const [first] = sortArr;
      array[i] = first;
      sortArr.shift();
    }
  }
  return array;
}

module.exports = sortByHeight;
