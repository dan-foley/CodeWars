// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 
// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

// function duplicateEncode(word){
//   let nuWord = word.toLowerCase();
//   let counts = {};
//   let nuStr = '';
  
//   for (let char of nuWord){
//     if (counts[char]){
//       counts[char] += 1;
//     }else{
//       counts[char] = 1
//     }
//   }
  
//   for (let char of nuWord){
//     if (counts[char] > 1){
//       nuStr += ')';
//     }else{
//       nuStr += '(';
//     }
//   } 
//   return nuStr;

// }

//Simpler solution using string methods

function duplicateEncode(word){
  return word.toLowerCase().split('').map((c, _, arr) => arr.indexOf(c) === arr.lastIndexOf(c) ? '(' : ')').join('');
}

