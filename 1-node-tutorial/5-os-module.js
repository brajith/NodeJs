const os = require('os')

console.log(`User info is ${ os.userInfo() }`);

console.log(`System uptime is ${ os.uptime() }`);

console.log(`System name is ${ os.type() }`);

console.log(`System release is ${ os.release() }`);

console.log(`System total memory is ${ os.totalmem() }`);

console.log(`System free memory is ${ os.freemem() }`);