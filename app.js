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

/*
app.get('/removeID/:id', function (req, res) {
    console.log("Remove request on ID: " + req.params.id)
    var idToRemove = req.params.id
    
    fs.readFile(filename, 'utf8', function readFileCallback(err, data) {
        if (err) {
            console.log(err);
        } else {
            
            obj = JSON.parse(data); //now it an object
            var length = Object.keys(obj.mailRecievedTable).length
            
            for(var i = 0; i<length; i++){
                console.log(obj.mailRecievedTable[i])
                if (obj.mailRecievedTable[i].id == req.params.id){

                    delete obj.mailRecievedTable[i]

                    json = JSON.stringify(obj); //convert it back to json

                    fs.writeFileSync(filename, json, 'utf8'); // write it back 

                    console.log("Removed")
                    res.send('Removed ID: ' + req.params.id);
                }

            }

        }
    });
});
*/

app.listen(port, () => {
    console.log(`KonradAPI listening on port ${port}!`)
})