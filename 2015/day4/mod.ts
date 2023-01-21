import { createHash } from 'https://deno.land/std@0.80.0/hash/mod.ts';

const input = Deno.readTextFileSync('./input.txt').trim();

let i = 0;
let j = 0;

while(true) {
  const md5 = createHash('md5').update(`${input}${i}`).toString();
  if (md5.startsWith('00000')) {
    break;
  }
  i++;
}

while(true) {
  const md5 = createHash('md5').update(`${input}${j}`).toString();
  if (md5.startsWith('000000')) {
    break;
  }
  j++;
}

console.log(`Part one: ${i}`)
console.log(`Part one: ${j}`);