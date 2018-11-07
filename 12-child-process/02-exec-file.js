const cp = require('child_process');
  console.log('I am father process. PID:', process.pid);

  cp.execFile('node',['02-child.js'], (err, stdout) => {
      console.log(stdout);

  });
