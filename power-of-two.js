function isPowerOfTwo(n) {
  if (n <= 0) return false;

  while (n % 2 === 0) {
    n = n / 2; // half
  }

  return n === 1;
}

console.log(isPowerOfTwo(16));
console.log(isPowerOfTwo(18));
console.log(isPowerOfTwo(8));
console.log(isPowerOfTwo(64));
console.log(isPowerOfTwo(1));

// O(log n)
