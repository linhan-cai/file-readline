# file-readline

Read file line by line. Anyway, it is works!

## install 

```
npm install file-readline
```

## exemple

### in async
```
const FileReadLine = require('file-readline');

async function run() {
    fileReadLine = new FileReadLine('./test.dat');

    let line;
    while(line = (await fileReadLine.next())) {
        console.log(line.toString());
    }
}

run();
```

### in sync
```
const FileReadLineSync = require('file-readline/file-readline-sync');
const fileReadLineSync = new FileReadLineSync('./test.dat');
let line;
while(line = (fileReadLineSync.next())) {
    console.log(line.toString());
}
```

### other encoding
```
const FileReadLineSync = require('file-readline/file-readline-sync');
const fileReadLineSync = new FileReadLineSync('./test.dat', {separator: Buffer.from('\n', 'utf16le')});
let line;
while(line = (fileReadLineSync.next())) {
    console.log(line.toString('utf16le'));
}
```

## options
|-|-|-| - |
| name | type | default | commend |
| separator | String or Buffer | `'\n'` | ending of line |
| step | number | 1 | get `step` line in each fileReadLine.next() |