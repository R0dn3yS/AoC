const input = Deno.readTextFileSync('./input.txt').trim();

let count = 0;

for (const line of input.split('\n')) {
  const rangeOneString = line.split(',')[0];
  const rangeTwoString = line.split(',')[1];

  const rangeOne = [ parseInt(rangeOneString.split('-')[0]), parseInt(rangeOneString.split('-')[1]) ];
  const rangeTwo = [ parseInt(rangeTwoString.split('-')[0]), parseInt(rangeTwoString.split('-')[1]) ];

  const rangeOneArray = [];
  const rangeTwoArray = [];

  for (let i = rangeOne[0]; i <= rangeOne[1] + 1; i++) {
    rangeOneArray.push(i);
  }

  for (let i = rangeTwo[0]; i <= rangeTwo[1] + 1; i++) {
    rangeTwoArray.push(i);
  }

  const isRangeOne = check(rangeOneArray, rangeTwoArray);
  const isRangeTwo = check(rangeTwoArray, rangeOneArray);

  if (isRangeOne || isRangeTwo) {
    count++;
  }
}

function check(rangeOne: number[], rangeTwo: number[]): boolean {
  let state = true;

  for (const i of rangeTwo) {
    if (rangeOne.includes(i)) {
      continue;
    } else {
      state = false
    }
  }

  return state;
}

console.log(`Part one: ${count}`);
