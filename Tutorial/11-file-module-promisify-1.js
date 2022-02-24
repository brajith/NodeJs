const { readFile, writeFile } = require('fs')
const util = require('util')

const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

//async function definition
const main = async () => {

    try {
        //awiting for the below method call to complete
        const first = await readFilePromise('./FileModule/first.txt', 'utf-8')
        console.log(first);

        //awiting for the below method call to complete
        const second = await readFilePromise('./FileModule/second.txt', 'utf-8')
        console.log(second);

        await writeFilePromise('./FileModule/append-using-promisify.txt', 
            `\nPROMISIFY DATA:\n ${ first } \n ${ second }`, { flag: 'a'})
    } 
    catch(error) {
        console.log(error);
    }    
}

main();