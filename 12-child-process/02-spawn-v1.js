const cp = require('child_process');
console.log('I am father processPID',process.pid);
const child = cp.spawn('cat',['02-spawn-v1.js']);
child.stdout.pipe(process.stdout);
