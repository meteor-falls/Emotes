var fs = require('fs');
var child_process = require('child_process');

var toProcess = fs.readdirSync('source');

toProcess.forEach(function (file) {
	var fname = file.split('.')[0]
	child_process.exec('convert source/' + file + ' emotes/' + fname + '.png', function () {
		child_process.execFile('TruePNG.exe', ['emotes/' + fname + '.png', '/o max']);
	});
})