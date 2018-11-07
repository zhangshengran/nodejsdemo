const cp = require('child_process');
console.log('I am father process. PID:', process.pid);
const child = cp.spawn('node',['02-child.js'])
child.stdout.pipe(process.stdout)
