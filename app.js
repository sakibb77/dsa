// algorithms
// an algorthm is a set of instructions or steps for solving a probelm

// why you should learn algorithms?
// 01. critical thinking and abstraction
// 02. problem solving
// 03. computer science
// 04. career advancement
// 05. understanding new techs

// time complexity, space complexity
// time complexity is a way to analyze the total time or performance of an algorithm
// space complexity is a way to analyze the total space or memory need for an algorithm

// asymptotic notation
// describe time complexity or space complexity

// big o notation, big omega notation and ig theta notation

// big o notation
// O(1) --> constant / base time or space complexity
// O(log n) --> logarithmic
// O(n) --> linear
// O(n log n) --> linear logarithmic
// O(n^c) --> polynomial time / c = power

// O(c^n) --> exponential time
// O(n!) --> factorial

// given an array, find the largest el

function largestEl(arr) {
  let largeEl = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largeEl) {
      largeEl = arr[i];
    }
  }

  return largeEl;
}

console.log(largestEl([5, 11, 22, 15, 10])); // 22

// el = 5, run = 5
// el = 1000, run = 1000
// el = n, run = n
// O(n) --> linear

// given an array, find the first el

function findFirstEl(arr) {
  return arr.at(0);
}

console.log(findFirstEl([10, 20, 30, 50, 60, 40])); // 10

// el = 10, run = 1
// el = 1000, run = 1
// O(1) --> constant
