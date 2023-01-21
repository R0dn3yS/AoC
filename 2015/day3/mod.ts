const input = Deno.readTextFileSync('./input.txt').split('');

let curX = 0;
let curY = 0;

const beenTo: string[] = [];
beenTo.push(`${curX}:${curY}`);

for (const direction of input) {
  switch (direction) {
    case '^': curY += 1; break;
    case 'v': curY -= 1; break;
    case '>': curX += 1; break;
    case '<': curX -= 1; break;
  }

  if (!beenTo.includes(`${curX}:${curY}`)) {
    beenTo.push(`${curX}:${curY}`);
  }
}

let santaX = 0;
let santaY = 0;

let roboX = 0;
let roboY = 0;

const beenTo2: string[] = [];
beenTo2.push('0:0');

let turn = true;

for (const direction of input) {
  if (turn) {
    switch (direction) {
      case '^': santaY += 1; break;
      case 'v': santaY -= 1; break;
      case '>': santaX += 1; break;
      case '<': santaX -= 1; break;
    }

    if (!beenTo2.includes(`${santaX}:${santaY}`)) {
      beenTo2.push(`${santaX}:${santaY}`);
    }
    turn = !turn;
  } else {
    switch (direction) {
      case '^': roboY += 1; break;
      case 'v': roboY -= 1; break;
      case '>': roboX += 1; break;
      case '<': roboX -= 1; break;
    }

    if (!beenTo2.includes(`${roboX}:${roboY}`)) {
      beenTo2.push(`${roboX}:${roboY}`);
    }
    turn = !turn;
  }
}

console.log(`Part one: ${beenTo.length}`);
console.log(`Part two: ${beenTo2.length}`);