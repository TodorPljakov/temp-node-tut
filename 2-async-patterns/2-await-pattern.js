const {readFile, writeFile} = require('fs').promises
const util = require('util')

// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

const start = async () => {
    try {
        const first = await readFile('./content/first.txt', 'utf8')
        const second = await readFile('./content/second.txt', 'utf8')
        await writeFile('./content/result-async.txt', first + ', ' +second, 'utf8')
    } catch (error){
        console.log(error)
    }
}

start()

// getText('./content/first.txt')
//     .then((result) => console.log(result))
//     .catch((err) => console.log(err))