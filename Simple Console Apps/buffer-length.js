const buf = Buffer.alloc(50);
const bytesWritten = buf.write('Yo man');
var len = buf.length
console.log(len)