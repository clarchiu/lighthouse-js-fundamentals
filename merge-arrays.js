function merge(arrOne, arrTwo) {
  let sortedArray = [];
  let i = 0;
  let j = 0;
  while (i < arrOne.length && j < arrTwo.length) {
    if (arrOne[i] < arrTwo[j]) {
      sortedArray.push(arrOne[i]);
      i++;
    } else {
      sortedArray.push(arrTwo[j]);
      j++
    }
  }

  while (i < arrOne.length) {
    sortedArray.push(arrOne[i]);
    i++;
  }

  while (j < arrTwo.length) {
    sortedArray.push(arrTwo[j]);
    j++;
  }

  return sortedArray;
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);