const input = Deno.readTextFileSync('./input.txt').trim().split('');

function solve(p: number) {
  const charArr: string[] = [];
  for (let i = 0; i < p; i++) {
    charArr.push(input[i]);
  }
  
  for (let i = 3; i < input.length; i++) {
    if (!charArr.includes(input[i]) && new Set(charArr).size === charArr.length) {
      return i + 1;
    } else {
      charArr.shift();
      charArr.push(input[i]);
    }
  }
}

console.log(`Part one: ${solve(3)}`);
console.log(`Part two: ${solve(13)}`);