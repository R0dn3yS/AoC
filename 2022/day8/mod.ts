const input = Deno.readTextFileSync('./input.txt').trim().split('\n');

const SIZE = input.length;

const map = new Array(SIZE).fill(null).map((_) => new Array(SIZE).fill(0));

for (let x = 0; x < SIZE; x++) {
  for (let y = 0; y < SIZE; y++) {
    const treeNum = parseInt(input[x].split('')[y]);

    map[x][y] = treeNum;
  }
}

let visTrees = 0;
let scenicScore = 0;

for (let x = 0; x < SIZE; x++) {
  for (let y = 0; y < SIZE; y++) {
    const treeNum = map[x][y];

    if (x === SIZE - 1 || x === 0 || y === SIZE - 1 || y === 0) {
      visTrees++;
    } else {

      // Check down
      let down = true;
      for (let i = x + 1; i < SIZE; i++) {
        if (map[i][y] >= treeNum) down = false;
      }

      // Check up
      let up = true;
      for (let i = x - 1; i >= 0; i--) {
        if (map[i][y] >= treeNum) up = false;
      }

      // Check right
      let right = true;
      for (let j = y + 1; j < SIZE; j++) {
        if (map[x][j] >= treeNum) right = false;
      }

      // Check left
      let left = true;
      for (let j = y - 1; j >= 0; j--) {
        if (map[x][j] >= treeNum) left = false;
      }

      if (down || up || right || left) {
        visTrees++;
      }
    }
  }
}

for (let x = 0; x < SIZE; x++) {
  for (let y = 0; y < SIZE; y++) {
    const treeNum = map[x][y];

    let down = 0;
    let up = 0;
    let right = 0;
    let left = 0;

    if (x !== SIZE - 1) {
      for (let i = x + 1; i < SIZE; i++) {
        down++;
        if (map[i][y] >= treeNum) {
          break;
        }
      }
    }

    if (x !== 0) {
      for (let i = x - 1; i >= 0; i--) {
        up++
        if (map[i][y] >= treeNum) {
          break;
        }
      }
    }

    if (y !== SIZE - 1) {
      for (let j = y + 1; j < SIZE; j++) {
        right++;
        if (map[x][j] >= treeNum) {
          break;
        }
      }
    }

    if (y !== 0) {
      for (let j = y - 1; j >= 0; j--) {
        left++;
        if (map[x][j] >= treeNum) {
          break;
        }
      }
    }
  
    const thisScore = down * up * right * left;
    if (thisScore > scenicScore) scenicScore = thisScore;
  }
}

console.log(`Part one: ${visTrees}`);
console.log(`Part two: ${scenicScore}`);