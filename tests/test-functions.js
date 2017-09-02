function randomArray (number) {
  let orderedArray = [];
  let randomizedArray = [];

  for (let i = 0; i < number; i++) {
    orderedArray.push(i + 1);
  }
  while (orderedArray.length) {
    let index = Math.floor(Math.random() * orderedArray.length);

    randomizedArray.push(orderedArray.splice(index, 1)[0]);
  }
  return randomizedArray;
}

module.exports = {randomArray};
