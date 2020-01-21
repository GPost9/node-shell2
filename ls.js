const lsLogic = process.stdout.on('data', (data) => {
    const cmd = data.toString().trim();
    if (cmd === 'ls') {
        process.stdout.write(`${fs.readdir('./', 'utf8', (err, files) => {
            if (err) {
                throw err
            } else {
                process.stdout.write(files.join('\n'))
                process.studout.write(" prompt > ")
            }
        })}`)
        process.stdout.write('\nprompt > ')
    }
})

// fs.readdir('./', 'utf8', (err, files) => {
//     if (err) {
//         throw err
//     } else {
//         process.stdout.write(files.join('\n'))
//         process.studout.write(" prompt > ")
//     }
// })



module.exports = lsLogic