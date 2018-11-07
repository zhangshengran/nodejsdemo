const cp = require('child_process');
var cmd = process.argv[2];

cp.exec(cmd,(err,stdout)=>{
  if(err)console.log('错误')
  console.log(stdout)
})
