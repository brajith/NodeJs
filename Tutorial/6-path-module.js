const path = require('path');

console.log(`Separator used is ${ path.sep }`);

const filePath = path.join('contents', 'subfolder', 'test.txt')
console.log(filePath);

console.log(`Basename is ${ path.basename(filePath) }`);

console.log(`Absolute path is ${ path.resolve(__dirname, 'contents', 'subfolder', 'test.txt') }`);

console.log(`Absolute path is ${ path.join(__dirname, 'contents', 'subfolder', 'test.txt') }`);