"use strict";

// implement memoize

const memoize = (f) => {
  const map = new Map();
  return (...args) => {
    const result = f(...args);
    const cached = map.get(result);
    if (cached) {
      return cached;
    }
    map.set(result, result);
    return result;
  };
};

const fib = memoize((n) => (n <= 1 ? n : fib(n - 1) + fib(n - 2)));

console.log(fib(10));
