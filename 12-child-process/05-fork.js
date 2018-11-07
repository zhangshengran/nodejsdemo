const cp = require('child_process');
console.log(process.pid);
cp.fork('./02-child.js');
setTimeout(()=>{
  process.exit(1);
},5000)
