// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

//    12 --> "10 + 2"
//    45 --> "40 + 5"
// 70304 --> "70000 + 300 + 4"
// NOTE: All numbers will be whole numbers greater than 0.

function expandedForm(num) {
  const str = num.toString();
  const parts = [];
  
  for (let i = 0; i < str.length; i++){
    let digit = str[i];
    if (digit !== '0'){
      parts.push(digit + '0'.repeat(str.length - i - 1));
    }
  }
  return parts.join(' + ');
}