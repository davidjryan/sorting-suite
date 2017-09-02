function sort(array) {
  if (array.length > 1) {
    let halfSize = array.length / 2;
    let leftArray = array.slice(0, halfSize);
    let rightArray = array.slice(halfSize)

    sort(leftArray);
    sort(rightArray);

    merge(array, leftArray, rightArray)
  }
  return array;
}

function merge(outputSequence, leftSequence, rightSequence) {
  let iLeft = 0;
  let jRight = 0;
  let kOut = 0;

  while (iLeft < leftSequence.length && jRight < rightSequence.length) {
    if (leftSequence[iLeft] - rightSequence[jRight] < 0) {
      outputSequence[kOut++] = leftSequence[iLeft++];
    } else {
      outputSequence[kOut++] = rightSequence[jRight++];
    }
  }

  while (iLeft < leftSequence.length) {
    outputSequence[kOut++] = leftSequence[iLeft++];
  }

  while (jRight < rightSequence.length) {
    outputSequence[kOut++] = rightSequence[jRight++];
  }
}

module.exports = {sort, merge}; 
