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
    var data = fs.readFileSync('emotes/' + emote + '.png', 'base64');

    emotes[emotenames[emote]] = 'data:image/png;base64,' + data;
    eutils.writeEmotes(emotes);
}

function optimize(emote) {
    eutils.optimize('emotes/' + emote + '.png', function () {
        setTimeout(finish, 1500);
    });
}
