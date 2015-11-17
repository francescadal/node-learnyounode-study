var fs = require('fs');

var buf = fs.readFileSync(process.argv[2]);
var lines = buf.toString().split("\n").length;
if (lines > 0) lines -= 1;
console.log(lines);




     var fs = require('fs')
     var contents = fs.readFileSync(process.argv[2])
     var lines = contents.toString().split('\n').length - 1
     console.log(lines)
