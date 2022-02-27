const { readFile, writeFile } = require('fs').promises

//async function definition
const main = async () => {

    try {
        //awiting for the below method call to complete
        const first = await readFile('./FileModule/first.txt', 'utf-8')
        console.log(first);

        //awiting for the below method call to complete
        const second = await readFile('./FileModule/second.txt', 'utf-8')
        console.log(second);

        await writeFile('./FileModule/append-using-promisify.txt', 
            `\nPROMISIFY DATA:\n ${ first } \n ${ second }`, { flag: 'a'})
    } 
    catch(error) {
        console.log(error);
    }    
}

main();