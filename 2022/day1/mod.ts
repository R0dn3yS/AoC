const input = Deno.readTextFileSync('./input.txt').trim();

let buffer = 0;
const dict: number[] = [];

for (const num of input.split('\n')) {
  if (num === '') {
    dict.push(buffer);
    buffer = 0;
  } else {
    buffer += parseInt(num);
  }
}

dict.sort((n1, n2) => n1 - n2);
console.log(`Part one: ${dict.at(-1)}`);
console.log(`Part two: ${dict.slice(-3).reduce((a, c) => a + c)}`);
