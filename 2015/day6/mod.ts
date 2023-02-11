const input = Deno.readTextFileSync('./input.txt').trim().split('\n');

const gridOne = new Array(1000).fill(null).map((_) => new Array(1000).fill(false));
const gridTwo = new Array(1000).fill(null).map((_) => new Array(1000).fill(0));

function partOne() {
  let count = 0;

  for (let instruction of input) {
    instruction = instruction.replaceAll('turn ', '');
    const split = instruction.split(' ');
    const option = split[0];
  
    const oneX = parseInt(split[1].split(',')[0]);
    const oneY = parseInt(split[1].split(',')[1]);
  
    const twoX = parseInt(split[3].split(',')[0]);
    const twoY = parseInt(split[3].split(',')[1]);
  
    for (let x = oneX; x <= twoX; x++) {
      for (let y = oneY; y <= twoY; y++) {
        switch (option) {
          case 'on': gridOne[x][y] = true; break;
          case 'off': gridOne[x][y] = false; break;
          case 'toggle': gridOne[x][y] = !gridOne[x][y];
        }
      }
    }
  }

  for (let x = 0; x < 1000; x++) {
    for (let y = 0; y < 1000; y++) {
      if (gridOne[x][y]) count++;
    }
  }

  return count;
}

function partTwo() {
  let brightness = 0;

  for (let instruction of input) {
    instruction = instruction.replaceAll('turn ', '');
    const split = instruction.split(' ');
    const option = split[0];
  
    const oneX = parseInt(split[1].split(',')[0]);
    const oneY = parseInt(split[1].split(',')[1]);
  
    const twoX = parseInt(split[3].split(',')[0]);
    const twoY = parseInt(split[3].split(',')[1]);
  
    for (let x = oneX; x <= twoX; x++) {
      for (let y = oneY; y <= twoY; y++) {
        switch (option) {
          case 'on': gridTwo[x][y]++; break;
          case 'off': gridTwo[x][y] - 1 < 0 ? gridTwo[x][y] = 0 : gridTwo[x][y]--; break;
          case 'toggle': gridTwo[x][y]+= 2; break;
        }
      }
    }
  }

  for (let x = 0; x < 1000; x++) {
    for (let y = 0; y < 1000; y++) {
      brightness += gridTwo[x][y];
    }
  }

  return brightness;
}

console.log(`Part one: ${partOne()}`);
console.log(`Part two: ${partTwo()}`);