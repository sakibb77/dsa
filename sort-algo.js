//bubble sort

function bubbleSort(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
      }
    }
  }
  return arr;
}
// console.log(bubbleSort([5, 8, 7, 2, 4, 3, 6, 9]));

//marge sort

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const container = [];

  let li = 0;
  let ri = 0;

  while (li < left.length && ri < right.length) {
    console.log([...left, "", ...right]);
    if (left[li] < right[ri]) {
      container.push(left[li++]);
    } else {
      container.push(right[ri++]);
    }
  }

  // console.log([...left, "", ...right]);
  // console.log(container);

  return container.concat(left.slice(li)).concat(right.slice(ri));
}
console.log(mergeSort([5, 3, 0, -1, 4, 9, 6, 58, 65]));
