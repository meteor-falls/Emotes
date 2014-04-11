var fs = require('fs');
var emotenames = require('./emotes.names.json');
var emotes = JSON.parse(fs.readFileSync('emotes.json'));

var emote = process.argv[2];
console.log('Removing emote ' + emote);

delete emotes[emotenames[emote]];

console.log('Writing emotes.json');
fs.writeFileSync('emotes.json', JSON.stringify(emotes, null, 4));
console.log('Finished');

console.info('Remember to delete the files in the source and emotes directory.');
console.info('Remember to remove the emote entry from emotes.name.json');
