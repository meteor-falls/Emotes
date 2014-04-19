var fs = require('fs');
var eutils = require('./eutils');
var emotenames = require('../emotes.names.json');
var emotes = require('../emotes.json');

var emote = process.argv[2],
    fname = eutils.findFilename(emote),
    emotealts = emotenames[emote];

console.log('Removing emote ' + emote);

delete emotes[emotealts];
delete emotenames[emote];

eutils.writeEmotes(emotes);
eutils.writeEmoteNames(emotenames);

console.log('Deleting source/' + fname);
fs.unlinkSync('source/' + fname);

console.log('Deleting emotes/' + emote + '.png');
fs.unlinkSync('emotes/' + emote + '.png');
