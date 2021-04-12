/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let res = 0;
  const arr1 = s1.split('').sort();
  const arr2 = s2.split('').sort();
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr2[j] === arr1[i]) {
        res++;
        arr2.splice(j, 1);
        j = arr2.length - 1;
      }
    }
  }
  return res;
}

module.exports = getCommonCharacterCount;
