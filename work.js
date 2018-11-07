const stdin = process.stdin;
var num1,num2;
        process.stdin.resume();
        process.stdin.setEncoding('utf8');
        console.log('请输入num1，0到1之间的数') 
stdin.on('data',(data)=>{

  if(!num1){
        
        if(Number(data)>0 && Number(data)<1)
        {
            num1 = data;
            console.log('你输入的num1为'+num1);
            console.log('请输入num2');
        }
        else
            {console.log('请重新输入合法数据')}
        }
  else{
    
    if(Number(data)==2){
    num2 = data;
    console.log('你输入的NUM1和NUM2为'+num1,num2);
    stdin.emit('end');}
    else{
      console.log('请重新输入num2');
    }
  }
})
stdin.on('end',()=>{
  process.stdout.write('end');
})
