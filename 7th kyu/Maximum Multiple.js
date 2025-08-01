// Task
// Given a Divisor and a Bound , Find the largest integer N , Such That ,

// Conditions :
// N is divisible by divisor

// N is less than or equal to bound

// N is greater than 0.

// Notes
// The parameters (divisor, bound) passed to the function are only positive values .

function maxMultiple(divisor, bound){
  while (bound > 0){
    if (bound % divisor === 0) return bound;
    bound --;
  }
}