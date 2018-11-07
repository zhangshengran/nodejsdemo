
const fs = require('fs');
var file = process.argv[2],
    src = process.argv[3];
try{
  fs.renameSync(src,dst);
}catch(err){
  console.error(err.message);

}
