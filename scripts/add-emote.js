var fs = require('fs');
var child_process = require('child_process');
var eutils = require('./eutils');
var emotenames = require('../emotes.names.json');
var emotes = require('../emotes.json');

var emote = process.argv[2],
    fname = eutils.findFilename(emote);

console.log('Adding emote ' + emote);

child_process.exec('convert source/' + fname + '[0] emotes/' + emote + '.png', optimize(emote));

function finish() {
    eutils.writeEmotes(emotes);
}

function optimize(emote) {
    eutils.optimize('emotes/' + emote + '.png', function () {
        fs.readFile('emotes/' + emote + '.png', 'base64', function (err, data) {
            if (err) throw err;

            emotes[emotenames[emote]] = 'data:image/png;base64,' + data;
            setTimeout(finish, 1500);
        });
    });
}
