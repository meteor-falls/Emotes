var fs = require('fs');
var child_process = require('child_process');

var fnames = fs.readdirSync('source');

module.exports = {
    // Naive but simple
    findFilename: function findFilename(emote) {
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
    },
    writeEmotes: function writeEmotes(obj) {
        // -1 because of the header
        console.log('Writing emotes.json [' + (Object.keys(obj).length - 1) + ' emotes]');
        fs.writeFileSync('emotes.json', JSON.stringify(obj, null, 4));
    },
    writeEmoteNames: function writeEmoteNames(obj) {
        console.log('Writing emotes.names.json [' + Object.keys(obj).length + ' emotes]');
        fs.writeFileSync('emotes.names.json', JSON.stringify(obj, null, 4));
    },
    optimize: function (path, cb) {
        child_process.exec('TruePNG.exe ' + path + ' /o max', cb);
    }
};
