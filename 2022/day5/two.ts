const input = Deno.readTextFileSync('./input.txt');

const initState = input.split('\n\n')[0].split('\n');
const instructions = input.split('\n\n')[1].split('\n');

const positionsToCheck = [ 1, 5, 9, 13, 17, 21, 25, 29, 33 ];

const state: string[][] = [
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
];

function checkLength(): number {
  let i = 0;
  for (const line of initState) {
    if (line[1] === '1') break;
    i++;
  }
  return i;
}

for (let i = checkLength() - 1; i >= 0; i--) {
  for (const position of positionsToCheck) {
    const letter = initState[i][position];
    const posNum = positionsToCheck.indexOf(position);

    if (letter !== ' ') {
      state[posNum].push(letter);
    }
  }
}

for (const instruction of instructions) {
  const newInstruction = instruction.split(' ');

  const amount = parseInt(newInstruction[1]);
  const from = parseInt(newInstruction[3]);
  const to = parseInt(newInstruction[5]);

  const buffer: string[] = [];

  for (let i = 0; i < amount; i++) {
    buffer.push(state[from - 1].pop()!);
  }
  
  for (let i = 0; i < amount; i++) {
    state[to - 1].push(buffer.pop()!);
  }
}

let partTwo = '';

for (const stack of state) {
  partTwo += stack.pop();
}

console.log(`Part two: ${partTwo}`);