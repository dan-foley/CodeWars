// You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.

// If the string's length is odd, return the middle character.
// If the string's length is even, return the middle 2 characters.
// Examples:
// "test" --> "es"
// "testing" --> "t"
// "middle" --> "dd"
// "A" --> "A"

function getMiddle(s) {
    let arr = s.split('');
    let half = s.length / 2;
    if (s.length % 2 === 0){
      return arr[half - 1] + arr[half];
    }else{
      return arr[Math.ceil(arr.length / 2) - 1];
    }
  }

//Simpler version using slice
// function getMiddle(s) {
//   return s.slice((s.length - 1) / 2, s.length / 2 + 1);
// }

//Slice implicitly converts non-integer numbers into integers by flooring them. Ex: 1.5 becomes 1, 2.7 becomes 2, etc.
