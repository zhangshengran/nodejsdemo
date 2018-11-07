const stdin = process.stdin;
var num1,num2;
stdin.on('data',(data)=>{
  if(num1 ==undefined){
     console.log('请输入num1,01之间') 
 


  if(Number(data)>0 &&Number(data)<1){
  num1 = data;
  console.log('你输入的num1为'+num1);
  }
  else
    console.log('请重新输入合法数据')
  }
  else{
    console.log('请输入num2');
    if(Number(data)==2){
  num2 = data;
console.log(num1,num2);
stdin.emit('end');}
    else{
      console.log('请重新输入');
    }
  }
})
stdin.on('end',()=>{
  stdout.write('end');
})
