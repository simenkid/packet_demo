var Dissolve = require('dissolve');
// <Buffer 01 05 73 69 6d 65 6e 25 30 43>
var personBuf = new Buffer([ 0x01, 0x05, 0x73, 0x69, 0x6d, 0x65, 0x6e, 0x25, 0x30, 0x43 ]);

var parser = Dissolve().loop(function (end) {
    this.uint8('sex').uint8('len')
        .tap(function () {
            this.string('name', this.vars.len);
            delete this.vars.len;
        }).uint8('age').uint16le('height')
        .tap(function () {
            this.push(this.vars);
            this.vars = {};
        });
});

parser.on('readable', function() {
  var e;
  while (e = parser.read()) {
    console.log(e);
  }
});

parser.write(personBuf);
parser.write(personBuf);
parser.write(personBuf);
parser.write(personBuf);