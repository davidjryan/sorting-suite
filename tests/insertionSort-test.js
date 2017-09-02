import { assert } from 'chai';
import { randomArray } from './test-functions'
import { sort, insert } from '../scripts/insertionSort';

describe('Insertion Sort', () => {
  it('should be a function', function () {
    assert.isFunction(sort);
  });

  it('should return a small sorted array', function () {

    assert.deepEqual(sort([ 3, 5, 9, 1, 6, 2, 8, 4, 7 ]), [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]);

  });

  it('should return a large sorted array', function () {
    let massiveArray = randomArray(1000);
    let massiveArraySorted = massiveArray.sort( (a, b) => {
      return a - b
    });

    assert.deepEqual(sort(massiveArray), massiveArraySorted);

  });
});
