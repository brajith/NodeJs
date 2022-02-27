const { readFile, writeFile } = require('fs')

readFile('./FileModule/first.txt', 'utf-8', (err, result) => {
    if(err){
        console.log(err);
        return;
    }
    const first = result;
    readFile('./FileModule/second.txt', 'utf-8', (err, result) => {
        if(err){
            console.log(err);
            return;
        }
        const second = result;
        writeFile('./FileModule/append.txt', 
            `The appended result of first and second file are : \n
            ${ first } \n
            ${ second }`,
            {flag: 'a'},
            (err, result) => {
                if(err){
                    console.log(err);
                    return;
                }
                console.log(result);
        })
    })
})
