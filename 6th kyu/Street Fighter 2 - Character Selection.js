//https://www.codewars.com/kata/5853213063adbd1b9b0000be

function streetFighterSelection(fighters, position, moves){
  let [row, col] = position;
  const result = [];
  
  for (let move of moves){
    if (move === 'up') row = 0;
    if (move === 'down') row = 1;
    if (move === 'left') col === 0 ? col = 5 : col--;
    if (move === 'right') col === 5 ? col = 0 : col++;
    
    result.push(fighters[row][col]);
  };
  
  return result;
};