const { readFileSync, writeFileSync } = require('fs')

const first = readFileSync('./FileModule/first.txt', 'utf-8')
const second = readFileSync('./FileModule/second.txt', 'utf-8')

writeFileSync('./FileModule/append.txt', 
`The appended result of first and second file are : \n
${ first } \n
${ second }`,
{flag: 'a'}) //flag is set to append mode