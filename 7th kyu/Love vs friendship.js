// If a = 1, b = 2, c = 3 ... z = 26

// Then l + o + v + e = 54

// and f + r + i + e + n + d + s + h + i + p = 108

// So friendship is twice as strong as love :-)

// Your task is to write a function which calculates the value of a word based off the sum of the alphabet positions of its characters.

// The input will always be made of only lowercase letters and will never be empty.

function wordsToMarks(string){
  return string.split('').map(char => char.charCodeAt(0) -96).reduce((sum, num) => sum += num, 0)
}

// char.charCodeAt(0) gives the character's Unicode number, for example a is 97, and subtracting 96 shifts it so that a becomes 1, b becomes 2, and so on up to z as 26.