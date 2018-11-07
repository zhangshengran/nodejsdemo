const fs = require('fs');
var file = process.argv[2] || __filename;
if(fs.existsSync(file))  
fs.createReadStream(file).pipe(process.stdout);

else{
  console.error('错误');
  process.exit(1);
}
