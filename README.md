# konradAPI
Distributes a local JSON-file as a REST-api using express.js

## Usage

### Start API

To start server and distribute json-file X, write:
node app.js X

Server then starts liteneing on port 313, distributing json-file.

### Register current time to json-file

To append current time to json-file X, run:
node updateFileWithCurrentTime.js X

If there is no file X, it will be created.

