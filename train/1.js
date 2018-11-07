var cp = require('child_process');
cp.execFile('noe',['setInterval.js'],(err,stdout,stderr)=>{
  if(err){
    console.log("错误",stderr);
  }
  console.log(stdout.toString('utf8'));
});


