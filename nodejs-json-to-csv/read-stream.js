const csvjson = require('csvjson');
const fs = require('fs');
const stream = require('stream');

const createReadStream = fs.createReadStream;
const createWriteStream = fs.createWriteStream;

const transformJsonToCSV = new stream.Transform({
    transform: function transformer(chunk, encoding, callback) {
        callback(false, csvjson.toCSV(chunk, {
            headers: 'key'
        }));
    },
    readableObjectMode: true,
    writableObjectMode: true,
});

createReadStream('./test-data.json', 'utf-8')
    .pipe(transformJsonToCSV)
    .pipe(createWriteStream('./test-data-output-stream.csv'));
