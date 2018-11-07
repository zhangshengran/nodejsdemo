const cp = require('child_process');
console.log('I am father processPID',process.pid);
console.log('cat 01-exec-file.js\n');
cp.execFile('cat',['01-exec-file.js'],(err,stdout)=>{
  if(err)console.error(err);
  console.log(stdout)
})
