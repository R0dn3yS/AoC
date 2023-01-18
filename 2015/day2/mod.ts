const input = Deno.readTextFileSync('./input.txt').split('\n');

let paper = 0;
let ribbon = 0;

for (const present of input) {
  const presentData = present.split('x');

  const sorted = [parseInt(presentData[0]), parseInt(presentData[1]), parseInt(presentData[2])].sort((a, b) => a - b);

  const a = sorted[0];
  const b = sorted[1];
  const c = sorted[2];

  paper += 2 * (a * b + b * c + c * a) + a * b;
  ribbon += a * 2 + b * 2 + a * b * c;
}

console.log(`Part one: ${paper}`);
console.log(`Part two: ${ribbon}`);