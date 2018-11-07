const fs = require('fs');
var file = process.argv[2] || __filename;
fs.readFile(file,(err,buf)=>{
  if(err){
    console.err(err.message);
  }else{
    console.log(buf.toString('utf8'))
  }
})
