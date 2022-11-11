const finalPosition = function (moves) {
  let bestPosition = [0,0];
  for (let num = 0; num <= moves.length-1 ; num++) {
    if (moves[num] === "north") {
      bestPosition[1]++;
    } else if (moves[num] === "east") {
      bestPosition[0]++;
    } else if (moves[num] === "south") {
      bestPosition[1]--;
    } else if (moves[num] === "west") {
      bestPosition[0]--;
    } else {
      return;
    }
  }
  return bestPosition;
}

const moves = ['north'];

console.log(finalPosition(moves));


