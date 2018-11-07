console.log("我是子程序");
var timer = setInterval(()=>{
  console.log('child_provess is running')
},1000);
setTimeout(()=>{
  clearInterval(timer)
},5000)
