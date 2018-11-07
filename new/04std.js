 var arr= {},
     i = 0;
var arr2 = ['name','email','QQ','Tel'];
const log = console.log;
 log(`${arr2[i]}`+':');
 const stdin = process.stdin;
 stdin.on('data',(msg)=>{
arr[arr2[i]] = msg.slice(0,msg.length-1).toString('utf-8');
   if(i===3)
 {
   stdin.emit('end');
   log(arr)}
   else{
     log(`${arr2[++i]}`+':');
   }
 
 })
stdin.on('end',()=>log('OK'))
