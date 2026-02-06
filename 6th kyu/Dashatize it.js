// Given an integer, return a string with dash '-' marks before and after each odd digit, but do not begin or end the string with a dash mark.

// Ex:

// 274 -> '2-7-4'
// 6815 -> '68-1-5'

function dashatize(num) {
  num = Math.abs(num);
  let str = String(num);
  let result = '';
  
  for (let i = 0; i < str.length; i++){
    let curr = str[i];
    let prev = str[i-1];
    
    if (i > 0 && (curr % 2 !==0 || prev % 2 !== 0)) {
      result += '-'
    }
    
    result += curr;
  }
  
  return result;
}