const express = require('express')
const app = express()
var fs = require('fs');
const port = 313
const filename = process.argv[2]

app.get('/', (req, res) => {
    
    try {
        let rawdata = fs.readFileSync(filename)
        let mailData = JSON.parse(rawdata)
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