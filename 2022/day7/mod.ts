const input = Deno.readTextFileSync('./input.txt').trim().split('\n').slice(1);

type Directory = {
  name: string;
  body: (Directory | File)[];
  parent: Directory | null;
}

type File = {
  name: string;
  size: number;
}

const root: Directory = {
  name: '/',
  body: [],
  parent: null,
}

let current = root;

let ls = false;

const dirSizeMap = new Map<Directory, number>();

const exec = (line: string) => {
  const cmd = line.replace(/^\$ /, '');

  if (cmd === 'ls') {
    ls = true;
    return;
  }

  const dir = cmd.split(' ')[1];
  if (dir === '..') {
    if (!current.parent) {
      throw new Error('you failed');
    }

    current = current.parent;
  } else {
    const newDir = current.body.find((d) => d.name === dir);
    current = newDir as Directory;
  }

  ls = false;
}

for (const line of input) {
  if (line.startsWith('$')) {
    exec(line);
  } else if (ls) {
    if (line.startsWith('dir')) {
      const name = line.split(' ')[1];
      const dir: Directory = {
        name,
        body: [],
        parent: current,
      }

      current.body.push(dir);
    } else {
      const l = line.split(' ');
      const name = l[1];
      const size = parseInt(l[0], 10);
      const file: File = {
        name,
        size,
      }

      current.body.push(file);
    }
  }
}

function dirSize(dir: Directory) {
  let size = 0;
  if (dirSizeMap.has(dir)) {
    return dirSizeMap.get(dir)!;
  }

  for (const item of dir.body) {
    if ('body' in item) {
      size += dirSize(item);
    } else {
      size += item.size;
    }
  }
  dirSizeMap.set(dir, size);

  return size;
}

const used = 70000000 - dirSize(root);
const needed = 30000000 - used;
let best = 70000000;

let total = 0;

for (const d of root.body) {
  if ('body' in d) {
    dirSize(d);
  }
}

for (const size of dirSizeMap.values()) {
  if (size <= 100000) {
    total += size;
  }
}

for (const size of dirSizeMap.values()) {
  if (needed <= size && size < best) {
    best = size;
  }
}

console.log(`Part one: ${total}`);
console.log(`Part two: ${best}`);