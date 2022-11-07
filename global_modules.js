// const os=require('os')
// const user=os.userInfo()
// console.log(`the system uptime is ${os.uptime()} seconds`)

// const currentOS={
//     name:os.type(),
//     release:os.release(),
//     totalmem:os.totalmem(),
//     freemem:os.freemem()

// }
// console.log(currentOS)

const path=require('path')
console.log(path)
const filepath=path.join('/ex/','app','modules')
console.log(filepath)

const base=path.basename(filepath)
console.log(base)

const absolute=path.resolve(__dirname,'ex','modules','app')
console.log(absolute)
