// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

// Note: no empty arrays will be given.

// Examples
// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

// function highestRank(arr){
//   let nums = {};
//   arr.forEach(n => {
//     nums[n] = (nums[n] || 0) + 1;
//   });
  
//   let maxFreq = 0;
//   let mostFreqNum = 0;
  
//   for (let n in nums){
//     n = Number(n);
    
//     if (nums[n] > maxFreq){
//       maxFreq = nums[n];
//       mostFreqNum = n;
//     } else if (nums[n] === maxFreq){
//       if (n > mostFreqNum){
//         mostFreqNum = n;
//       };
//     };
//   };
//   return mostFreqNum;

// };

function highestRank(arr){
  return arr.sort((a, b) => arr.filter(num => num === b).length - arr.filter(num => num === a).length || b - a)[0];
}
