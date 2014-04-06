var fs = require('fs');
var child_process = require('child_process');
var emotenames = require('./emotes.names.json');

var done = [],
    emotes = {"@NOTICE": "THIS FILE IS GENERATED. CONTRACT A MAINTAINER TO ADD AN EMOTE."},
    fnames = fs.readdirSync('source'),
    total = Object.keys(emotenames).length,
    fname, i;

fs.mkdirSync('emotes');
console.log('Converting sources and optimizing PNGs');
for (i in emotenames) {
    fname = findFilename(i);
    child_process.exec('convert source/' + fname + '[0] emotes/' + i + '.png', optimize(i));
}

function finish() {
    console.log('Writing emotes.json [' + total + ' emotes]');
    fs.writeFileSync('emotes.json', JSON.stringify(emotes, null, 4));
    console.log('exit(0)');
}

function optimize(i) {
    child_process.execFile('TruePNG.exe', ['emotes/' + i + '.png', '/o max'], {}, function () {
        done.push(i);
        emotes[emotenames[i]] = 'data:image/png;base64,' + fs.readFileSync('emotes/' + i + '.png', 'base64');

        if (done.length === total) {
            finish();
        }
    });
}

// Naive but simple
function findFilename(emote) {
    var jpg = emote + '.jpg',
        png = emote + '.png',
        gif = emote + '.gif';

    if (fnames.indexOf(jpg) > -1) {
        return jpg;
    } else if (fnames.indexOf(png) > -1) {
        return png;
    } else if (fnames.indexOf(gif) > -1) {
        return gif;
    }

    console.error('Unknown extension for ' + emote + '.');
}
