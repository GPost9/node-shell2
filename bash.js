const { pwdLogic } = require('./pwd')
const { lsLogic } = require('./ls')
const fs = require('fs')
process.stdout.write('prompt > ');

process.stdout.on('data', (data) => {
    const cmd = data.toString().trim();
    process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt > ');
    });


lslogic
// console.log(pwdRequired)

