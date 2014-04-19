var fs = require('fs');
var child_process = require('child_process');
var eutils = require('./eutils');
var emotenames = require('../emotes.names.json');

var done = [],
    emotes = {"@NOTICE": "THIS FILE IS GENERATED. CONTRACT A MAINTAINER TO ADD AN EMOTE."},
    total = Object.keys(emotenames).length,
    fname, i;

if (!fs.existsSync('emotes/')) {
    console.log('Creating emotes directory');
    fs.mkdirSync('emotes');
}

console.log('Converting and optimizing sources');
for (i in emotenames) {
    fname = eutils.findFilename(i);
    child_process.exec('convert source/' + fname + '[0] emotes/' + i + '.png', optimize(i));
}

function finish() {
    var j;
    console.log('Collecting optimized emotes');

    for (j in emotenames) {
        emotes[emotenames[j]] = 'data:image/png;base64,' + fs.readFileSync('emotes/' + j + '.png', 'base64');
    }

    eutils.writeEmotes(emotes);
}

function optimize(i) {
    eutils.optimize('emotes/' + i + '.png', function () {
        done.push(i);

        if (done.length === total) {
            finish();
        }
    });
}
