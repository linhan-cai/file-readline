# file-readline

Read file line by line. Not so fast, but simple and easy to use.

## install 

```
npm install file-readline
```

## exemple

```
const FileReadLine = require('file-readline');

const file = './test.js';
const rl = new FileReadLine(file);
let i = 0;
// eslint-disable-next-line no-await-in-loop
while (await rl.next() !== false) {
    i += 1;
}
console.log(`${file} has ${i} lines`);

```