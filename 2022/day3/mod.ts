const input = Deno.readTextFileSync('./input.txt').trim();
const inputByLine = input.split('\n');

const priorities = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

let prioOne = 0;
let prioTwo = 0;

for (const line of inputByLine) {
  const half1 = line.slice(0, line.length / 2);
  const half2 = line.slice(line.length / 2, line.length);

  for (const char of half1) {
    if (half2.includes(char)) {
      prioOne += priorities.indexOf(char) + 1;
      break;
    }
  }
}

for (let index = 0; index < inputByLine.length; index += 3) {
  const lines = inputByLine.slice(index, index + 3);

  for (const char of lines[0]) {
    if (lines[1].includes(char) && lines[2].includes(char)) {
      prioTwo += priorities.indexOf(char) + 1;
      break;
    }
  }
}

console.log(`Part one: ${prioOne}`);
console.log(`Part two: ${prioTwo}`);