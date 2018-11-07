var one;
one = process.argv[2];
if(one = 1)
  console.log(`安全退出`)
process.exit(one);
process.on('SIGINT',()=>{

})
