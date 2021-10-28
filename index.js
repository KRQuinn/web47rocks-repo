const express = require('express')

const app = express()

const Port = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send(`
        <h1>Web 47 rocks!</h1>
    `)
})

app.listen(Port, () => {
        console.log(`listening`)
})





function cohortRocks() { // eslint-disable-line
    console.log('arguments:', process.argv.slice(2))
    console.log(`web ${process.argv[2]} rocks`)
}
function cohortRocksEnv(){
    console.log(`home folder is ${process.env.HOME}`)
    console.log(`my shell is ${process.env.SHELL}`)
    console.log(`my OS is ${process.env.OS}`)
    console.log(`my host name is ${process.env.HOSTNAME}`)
    console.log(`my username is ${process.env.USERNAME}`)

    console.log(`In my environment FOO is "${process.env.FOO}"`)
    console.log(`My super secret comes from "${process.env.SUPER_SECRET}""`)

}
cohortRocksEnv()