const express = require('express')
const app = express()
var fs = require('fs');
const port = 54545
const filename = process.argv[2]

app.get('/', (req, res) => {
    
    try {
        var rawdata = fs.readFileSync(filename)
        var mailData = JSON.parse(rawdata)
        res.send(mailData)
    }catch (error) {
        console.error(error);
        res.send("Could not open file.")
        console.error("Could not open file: " + filename)
        process.exit()
    }
})

app.listen(port, () => {
    console.log(`KonradAPI listening on port ${port}!`)
})