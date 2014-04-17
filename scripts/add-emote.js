var fs = require('fs');
var child_process = require('child_process');
var emotenames = require('../emotes.names.json');
var emotes = JSON.parse(fs.readFileSync('emotes.json'));

var emote = process.argv[2],
    fnames = fs.readdirSync('source'),
    fname = findFilename(emote);

console.log('Adding/updating emote ' + emote);

child_process.exec('convert source/' + fname + '[0] emotes/' + emote + '.png', optimize(emote));

function finish() {
    console.log('Writing emotes.json');
    fs.writeFileSync('emotes.json', JSON.stringify(emotes, null, 4));
    console.log('Finished');
}

function optimize(emote) {
    child_process.execFile('TruePNG.exe', ['emotes/' + emote + '.png'], {}, function () {
        // Wait a bit for race conditions
        process.nextTick(function () {
            emotes[emotenames[emote]] = 'data:image/png;base64,' + fs.readFileSync('emotes/' + emote + '.png', 'base64');
            finish();
        });
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
