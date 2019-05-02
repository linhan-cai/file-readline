const ReadLineSync = require('../readline-sync');

const ReadLineAsync = require('../readline-async');

async function totalLine(file, opts) {
  const rl = new ReadLineAsync(file, opts);
  let i = 0;
  // eslint-disable-next-line no-await-in-loop
  while (await rl.next() !== false) {
    i += 1;
  }
  return i;
}

function totalLineSync(file, opts) {
  const rls = new ReadLineSync(file, opts);
  let i = 0;
  while (rls.next() !== false) {
    i += 1;
  }
  return i;
}

async function run() {

  const file = './test/test.js';
  const opts = { separator: '\n' };
  const rls = new ReadLineSync(file, opts);
  const rla = new ReadLineAsync(file, opts);

  let line;
  while ((line = rls.next()) !== false) {
    console.log(line.toString());
  }

  while ((line = await rla.next()) !== false) {
    console.log(line.toString());
  }

  totalLine(file, opts).then((n) => { console.log('async', n); });
  const n = totalLineSync(file, opts);
  console.log('sync', n);
}

run();
