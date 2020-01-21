const pwdRequired = require('./pwd')

process.stdout.write('prompt > ');

process.stdout.on('data', (data) => {
    const cmd = data.toString().trim();
    process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt > ');
    });

pwdRequired()