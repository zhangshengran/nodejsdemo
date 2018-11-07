const fs = require('fs');
var file = process.argv[2];
var mod = process.argv[3];
if(process.argv!==4){
  console.error('命令行参数不正确');
  process.exit(1);
}
try{
  fs.chmodSync(src,mod);
}catch(err){
  console.error(err.message);
  process.exit(1);
}
