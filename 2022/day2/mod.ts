const input = Deno.readTextFileSync('./input.txt').trim();

let scoreOne = 0;
let scoreTwo = 0;

const RPS_C = [ 'A', 'B', 'C' ];
const RPC_U = [ 'X', 'Y', 'Z' ];

for (const game of input.split('\n')) {
  const C = RPS_C.indexOf(game[0]);
  const U = RPC_U.indexOf(game[2]);

  scoreOne += U + 1;

  if (C === U) {
    scoreOne += 3;
  } else if ((U === 0 ? 'C' : (RPS_C[U - 1])) === RPS_C[C]) {
    scoreOne += 6;
  }
}

const RPS: Record<string, Record<string, number>> = {
  'A': { 'X': 3, 'Y': 4, 'Z': 8 },
  'B': { 'X': 1, 'Y': 5, 'Z': 9 },
  'C': { 'X': 2, 'Y': 6, 'Z': 7 },
};


for (const game of input.split('\n')) {
  scoreTwo += RPS[game[0]][game[2]];
}

console.log(`Part one: ${scoreOne}`);
console.log(`Part two: ${scoreTwo}`);