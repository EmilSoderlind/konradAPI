// Required 
var fs = require("fs");
var filename = process.argv[2]
var obj = {
    mailRecievedTable: []
};
const path = filename


if (require.main === module) {
    main();
}

function main(){
    try {
        if (fs.existsSync(path)) {
            console.log("File exist.")
            appendToFile(filename, getCurrentDate())

        } else {
            console.log("File does not exist.")
            createFileAndAppendCurrentTime(filename)
        }
    } catch (err) {
        console.error(err)
    }
}

// When json-file does not exist, create a new file and append current time
function createFileAndAppendCurrentTime(filename){

    obj.mailRecievedTable.push({ id: 0, time: new Date() });
    fs.writeFile(filename, JSON.stringify(obj), function (err) {
        if (err) throw err;
        console.log('File is created successfully.');
        console.log("Appended current time to file.")
        console.log("File length: " + 1)
    }); 
}


function getCurrentDate(){
    return new Date()
}

// When json-file already exit, append current time
function appendToFile(filename, date) {

    fs.readFile(filename, 'utf8', function readFileCallback(err, data) {
        if (err) {
            console.log(err);
        } else {
            obj = JSON.parse(data); //now it an object
            var length = Object.keys(obj.mailRecievedTable).length
            obj.mailRecievedTable.push({ id: length, time: date }); //add some data
            json = JSON.stringify(obj); //convert it back to json
            fs.writeFileSync(filename, json, 'utf8'); // write it back 
            console.log("Appended current time to file. <" + getDateTime() + ">")
            console.log("File length: " + (length+1))
        }
    });
} 

function getDateTime() {

    var date = new Date();

    var hour = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;

    var min = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;

    var sec = date.getSeconds();
    sec = (sec < 10 ? "0" : "") + sec;

    return hour + ":" + min + ":" + sec;

}
