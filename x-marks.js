const finalPosition = function(moves) {
  let pos = [0,0];
  for (let move of moves) {
    switch (move) {
      case 'north':
        pos[1]++;
        break;
      case 'south':
        pos[1]--;
        break;
      case 'west':
        pos[0]--;
        break;
      case 'east':
        pos[0]++;
        break;
    }
  }
  return pos;
}