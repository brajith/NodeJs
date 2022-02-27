const { readFile } = require('fs')

const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf-8', (err, data) => {
            if(err){
                reject(err)
            }
            else {
                resolve(data)
            }
        })
    })
}

//async function definition
const getTextAsync = async () => {

    //awiting for the below method call to complete
    const first = await getText('./FileModule/first.txt')
    console.log(first);

    //awiting for the below method call to complete
    const second = await getText('./FileModule/second.txt')
    console.log(second);
}

getTextAsync();





