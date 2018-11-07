const cp = require('child_process');
const http = require('http');
http.createServer((req,res)=>{
  var child = cp.spawn('node',['02-child.js']);
  child.stdout.pipe(res);
}).listen(8080)
