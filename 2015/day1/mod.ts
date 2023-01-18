const input = Deno.readTextFileSync('./input.txt').split('');

let floor = 0;
let part2 = 0;

for (let i = 0; i < input.length; i++) {
  input[i] === '(' ? floor += 1 : floor -= 1;
  if (floor === -1 && part2 === 0) {
    part2 = i + 1;
  }
}

console.log(`Part one: ${floor}`);
console.log(`Part two: ${part2}`);