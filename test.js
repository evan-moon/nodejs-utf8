const utf8 = require('./index');
const encoded = utf8.encode('안녕하세요');
console.log(utf8.decode(encoded));