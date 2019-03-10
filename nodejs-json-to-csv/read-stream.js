const csvjson = require('csvjson');
const fs = require('fs');

const stream = require('stream');
const JSONStream = require('jsonstream');

const createReadStream = fs.createReadStream;
const createWriteStream = fs.createWriteStream;

let line = 0;
const transformJsonToCSV = new stream.Transform({
    transform: function transformer(chunk, encoding, callback) {
        line++;
        callback(false, csvjson.toCSV(chunk, {
            headers: line > 1 ? 'none' : 'key'
        }));
    },
    readableObjectMode: true,
    writableObjectMode: true,
});

createReadStream('./test-data.json', 'utf-8')
    .pipe(JSONStream.parse('*'))
    .pipe(transformJsonToCSV)
    .pipe(createWriteStream('./test-data-output-stream.csv'));
