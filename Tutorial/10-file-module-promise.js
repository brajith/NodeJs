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
    await getText('./FileModule/first.txt')
    .then(result => console.log(result))
    .catch(err => console.log(err))

    //awiting for the below method call to complete
    await getText('./FileModule/second.txt')
    .then(result => console.log(result))
    .catch(err => console.log(err))
}

getTextAsync();





