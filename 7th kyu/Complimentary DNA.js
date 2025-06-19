// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

const pairs = {
  'A' : 'T',
  'T' : 'A',
  'C' : 'G',
  'G' : 'C'
}

function dnaStrand(dna){
  return dna.replace(/./g, char => pairs[char])
}

// Uses a regular expression to match every single character (.) in the string.
// The g flag makes it global, so it replaces every character in the string.
// For each character char (like 'A', 'T', 'C', or 'G'), it looks up its complement in the pairs object and replaces it.

// Old solution:
// function dnaStrand(dna){
//   let str = [];
//   for (let i = 0; i <= dna.length; i++){
//     if (dna[i] === 'A'){
//       str.push('T')
//     }else if (dna[i] === 'T'){
//       str.push('A')
//     }else if (dna[i] === 'C'){
//       str.push('G')
//     }else if (dna[i] === 'G'){
//       str.push('C')
//     }
//   }
//   return str.join('');
// }
