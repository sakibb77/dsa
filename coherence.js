function getCoherence(arr1, arr2) {
  const container = [];
  let i = 0;
  while (i <= arr1.length) {
    if (arr1[i] !== arr2[i]) {
      container.push(arr1[i], arr2[i]);
    }
    i++;
  }

  return container;
}

console.log(getCoherence([2, 3, 5, 6, 7], [4, 3, 8, 9, 7, 6]));
