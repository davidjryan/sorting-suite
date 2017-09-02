function sort(array) {
  for (let nextPos = 1; nextPos < array.length; nextPos++) {
    insert(array, nextPos)
  }
  return array;
}

function insert(array, nextPos) {
  let nextVal = array[nextPos];
  while (nextPos > 0 && nextVal - array[nextPos - 1] < 0) {
    array[nextPos] = array[nextPos - 1];
    nextPos--;
  }
  array[nextPos] = nextVal;
}

module.exports = {sort, insert};
