/** @format */

// function fibonacchi2(n) {
//   const fibo = [0, 1];

//   for (i = 2; i < n; i++) {
//     fibo[i] = fibo[i - 1] + fibo[i - 2];
//   }
//   return fibo.at(-1);
// }

// // console.log(fibonacchi2(8));

// ///is power of two

// function isPowerOfTwo(num) {
//   if (num <= 0) return false;

//   while (num % 2 === 0) {
//     num = num / 2;
//   }

//   return num === 1;
// }

// console.log(isPowerOfTwo(10));

function factorial(n) {
  let fact = 1;
  let str = "";

  for (let i = 2; i <= n; i++) {
    fact = fact * i;
    str += `${i} * ${i + 1} * `;
  }
  return { fact, str };
}

console.log(factorial(5));
