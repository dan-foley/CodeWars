// Find the number with the most digits.

// If two numbers in the argument array have the same number of digits, return the first one in the array.

function findLongest(array){
  const sorted = array.map(num => num.toString()).sort((a, b) => a.length - b.length);
  for (let i = sorted.length - 1; i >= 0; i--){
    if (sorted[i].length > sorted[i-1].length){
      return Number(sorted[i]);
    };
  };
};