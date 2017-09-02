function sort(array) {

  quickSort(array, 0, array.length - 1);

  return array;
}

function quickSort(array, firstIndex, lastIndex) {

  if (firstIndex < lastIndex) {
    const pivIndex = partition(array, firstIndex, lastIndex);

    quickSort(array, firstIndex, pivIndex - 1);

    quickSort(array, pivIndex + 1, lastIndex);
  }
}

function partition(array, firstIndex, lastIndex) {

  const pivot = array[firstIndex];
  let up = firstIndex;
  let down = lastIndex;

  do {

    while((up < lastIndex) && (pivot - array[up] >= 0)) {
      up++;
    }

    while (pivot - array[down] < 0) {
      down--;
    }

    if (up < down) {
      swap(array, up, down);
    }
  } while (up < down);

  swap(array, firstIndex, down);

  return down;
}

function swap(array, first, last) {
  let temp = array[first];
  array[first] = array[last];
  array[last] = temp;
}

module.exports = {sort, quickSort, partition, swap};
