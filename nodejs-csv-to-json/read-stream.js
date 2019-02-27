const csvjson = require('csvjson');
const createReadStream = require('fs').createReadStream;
const createWriteStream = require('fs').createWriteStream;

const stringify = csvjson.stream.stringify();
const toObject = csvjson.stream.toObject();

createReadStream('./test-data.csv', 'utf-8')
    .pipe(toObject)
    .pipe(stringify)
    .pipe(createWriteStream('./test-data-output-stream.json'));
