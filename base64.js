// Usage: node base64 {emote} "name|name|name"
var args = process.argv.slice(2);
var emote = 'emotes/' + args[0] + '.png';
var names = args[1] || args[0];

var fs = require('fs');
var file = fs.readFileSync(emote, 'base64');
fs.writeFileSync('base64/' + args[0] + '.txt', names + '\ndata:image/png;base64,' + file + '\n')