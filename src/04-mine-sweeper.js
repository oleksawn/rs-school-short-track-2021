/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const matr = matrix || [];
  for (let i = 0; i < matr.length; i++) {
    for (let j = 0; j < matr[i].length; j++) {
      if (matr[i][j] === false) {
        matr[i][j] = 0;
      }
    }
  }
  for (let i = 0; i < matr.length; i++) {
    for (let j = 0; j < matr[i].length; j++) {
      if (matr[i][j] === true) {
        if (i > 0 && j > 0 && matr[i - 1][j - 1] !== true) {
          matr[i - 1][j - 1] = matr[i - 1][j - 1] + 1;
        }
        if (i > 0 && matr[i - 1][j] !== true) {
          matr[i - 1][j] = matr[i - 1][j] + 1;
        }
        if (i > 0 && j < matr[i].length - 1 && matr[i - 1][j + 1] !== true) {
          matr[i - 1][j + 1] = matr[i - 1][j + 1] + 1;
        }
        if (j > 0 && matr[i][j - 1] !== true) {
          matr[i][j - 1] = matr[i][j - 1] + 1;
        }
        if (j < matr[i].length - 1 && matr[i][j + 1] !== true) {
          matr[i][j + 1] = matr[i][j + 1] + 1;
        }
        if (i < matr.length - 1 && j > 0 && matr[i + 1][j - 1] !== true) {
          matr[i + 1][j - 1] = matr[i + 1][j - 1] + 1;
        }
        if (i < matr.length - 1 && matr[i + 1][j] !== true) {
          matr[i + 1][j] = matr[i + 1][j] + 1;
        }
        if (i < matr.length - 1 && j < matr[i].length - 1 && matr[i + 1][j + 1] !== true) {
          matr[i + 1][j + 1] = matr[i + 1][j + 1] + 1;
        }
      }
    }
  }
  for (let i = 0; i < matr.length; i++) {
    for (let j = 0; j < matr[i].length; j++) {
      if (matr[i][j] === true) {
        matr[i][j] = 1;
      }
    }
  }
  return matr;
}

module.exports = minesweeper;
