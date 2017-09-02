function bubbleSort(array) {
  let pass = 1;
  let exchanges = false;

  do {
    exchanges = false;

    for (let i = 0; i < array.length - pass; i++) {
      if (array[i] - array[i + 1] > 0) {
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        exchanges = true;
      }
    }
    pass++;
  } while (exchanges)
  return array;
}

module.exports = {bubbleSort};
