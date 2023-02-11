const input = Deno.readTextFileSync('./input.txt').trim().split('\n');

const vowels = [ 'a', 'e', 'i', 'o', 'u' ];
const banned = [ 'ab', 'cd', 'pq', 'xy' ];
let niceCount = 0;

for (const name of input) {
  let vowelCount = 0;
  let double = false;
  let isBanned = false;

  for (const letter of name) {
    if (vowels.includes(letter)) {
      vowelCount++
    }
  }

  for (let i = 0; i < name.length - 1; i++) {
    if (name[i] === name[i + 1]) double = true;
  }

  for (const pair of banned) {
    if (name.includes(pair)) isBanned = true;
  }

  if (vowelCount >= 3 && double && !isBanned) niceCount++;
}

console.log(`Part one: ${niceCount}`);