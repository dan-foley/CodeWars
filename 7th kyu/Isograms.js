// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

// function isIsogram(str){
//     str = str.toLowerCase();
//     let arr = [];
//     for (let i = 0; i < str.length; i++){
//       if (arr.includes(str[i])){
//         return false
//       }else{
//         arr.push(str[i])
//       }
//     }
//     return true;
//   }


const isIsogram = str => new Set(str.toLowerCase()).size === str.length;
