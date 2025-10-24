// Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

// Examples:

// encrypt("012345", 1)  =>  "135024"
// encrypt("012345", 2)  =>  "135024"  ->  "304152"
// encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

// encrypt("01234", 1)  =>  "13024"
// encrypt("01234", 2)  =>  "13024"  ->  "32104"
// encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
// Together with the encryption function, you should also implement a decryption function which reverses the process.

// If the string S is an empty value or the integer N is not positive, return the first argument without changes.

function encrypt(text, n) {
  if (!text || n <= 0) return text;
  let currentText = text;
  for (let i = 0; i < n; i++){
    let odds = '';
    let evens = '';    
    for (let j = 0; j < currentText.length; j++){
      if (j % 2 !== 0){
        odds += currentText[j]
      } else {
        evens += currentText[j]
      };
    };
    currentText = odds + evens;
  };
  return currentText;
};

function decrypt(encryptedText, n) {
  if (!encryptedText || n <= 0) return encryptedText;
  let currentText = encryptedText;
  const len = encryptedText.length;
  for (let i = 0; i < n; i++){
    const oddLength = Math.floor(len / 2);
    const odds = currentText.slice(0, oddLength);
    const evens = currentText.slice(oddLength);
    let decrypted = '';
    for (let j = 0; j < len; j++){
      if (j % 2 === 0){
        decrypted += evens[j / 2];
      } else {
        decrypted += odds[(j - 1) / 2];
      };
    };
    currentText = decrypted;
  };
  return currentText; 
};