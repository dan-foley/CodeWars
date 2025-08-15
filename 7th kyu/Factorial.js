// Your task is to write function factorial.

// https://en.wikipedia.org/wiki/Factorial

function factorial(n){
  let result = 1;
  for (let i = n; i > 1; i--){
    result *= i;
  };
  return result;
};