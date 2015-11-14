var Concentrate = require('concentrate');

var person = {
    sex: 1,
    name: 'simen',
    age: 37,
    height: 17200
};

var info = (person.sex << 7) | (0x7F & person.age); // bitwise operation

var personBuf = Concentrate().uint8(info)
                             .uint8(person.name.length)
                             .string(person.name, 'utf8')
                             .uint16(person.height)
                             .result();

console.log('info: 0x' + info.toString(16));
console.log(personBuf);