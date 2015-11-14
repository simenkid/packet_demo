var Concentrate = require('concentrate');

var person = {
    sex: 1,
    name: 'simen',
    age: 37,
    height: 17200
};

var personBuf = Concentrate().uint8(person.sex)
                             .uint8(person.name.length)
                             .string(person.name, 'utf8')
                             .uint8(person.age)
                             .uint16(person.height)
                             .result();

console.log(personBuf);