const cp = require('child_process');
console.log('I am father processPID',process.pid);
var child = cp.spawn('node',['02-child.js'],{detached:true,stdio:[1,2]});
global.setTimeout(()=>{
  console.log('5 seconds passed.Father game over!');
  process.exit(1);
},5000)
