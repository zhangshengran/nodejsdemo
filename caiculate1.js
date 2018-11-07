
var space1 = process.argv[2];
var space2 = process.argv[3];//命令行输入变量
var a ,b;//交互输入变量
        function log(x,y)//对数运算公式
        {
        return Math.log(x)/Math.log(y);

        }
        function calculate(array)//逗号输入方式计算方式
        {
        var Hp = 0;
        for(var m = 0;m<array.length;m++)
        {
        Hp += -array[m]*log(array[m], 2)

        }
        return Hp;
        process.exit(1);

        }
        function calculate1(a,b)//交互输入方式计算
        {
            var Hp = 0;
            Hp = -a*log(a, 2)-b*log(b, 2)
            
            return Hp;
            }
        //交互输入模块
        function Stdin(){
            console.log(`请输入p0\n`);
            process.stdin.resume();
        process.stdin.setEncoding('utf8');
        
        process.stdin.on('data', (chunk) => {
        
        if(!a){ 
                        if(typeof chunk === 'string'){
                        chunk = chunk.slice(0,-1);
                            
                        }
                        if(isNaN(chunk))
                        {
                            process.stdout.write("请输入数字");
                        }
        
        
                        if (Number(chunk) >=1) {
                            process.stdout.write("请输入小于1的数");
                                
                        }
                        if (chunk <=0) {
                            process.stdout.write("请输入大于0的数");
                            
                        }
                        if(chunk <1 &&chunk>0){
                            a = chunk; 
        
                            chunk = "  ";
                            console.log(`请输入p1`);
                        }
              }
        
        else{
                   
                if(typeof chunk === 'string'){
                chunk = chunk.slice(0,-1);
                    
                }
                if(isNaN(chunk))
                {
                process.stdout.write("请输入数字");
                }
        
        
                if (Number(chunk) >=1) {
                process.stdout.write("请输入小于1的数");
                    
                }
                if (chunk <=0) {
                process.stdout.write("请输入大于0的数");
                
                }
                if(chunk <1 &&chunk>0){
                b = chunk; 
              if(Number(a)+Number(b) !==1){
                  console.log("概率空间不封闭，程序退出！")
                  process.exit(1);
              }
        console.log(calculate1(a,b)) ;
            //    process.stdin.emit('end');
                }
            }
            // process.stdin.on('end', () => {
            //     process.stdout.write('end');
            //   });
        });
        
        }
       
       

if(process.argv.length ==2)
{
        console.log("请输入数据！");
        Stdin();
       

}
else if(process.argv.length == 3)//逗号输入
{
        var place = space1.split(",");//得到输入数据的数组
        for(var j =0;j<place.length;j++)
        {
                if(isNaN(place[j]))
                {
                console.log("数据中有非数字");
                 Stdin();        
                console.log("p:"+"["+place+"]")
                var hp = calculate(place);
                console.log("H(p):"+hp.toFixed(3)+"bit");           
                }
                if(place[j]>=1 || place[j]<0)
                {
                console.log("数据中有数字超出概率范围");
                Stdin();        
                console.log("p:"+"["+place+"]")
                var hp = calculate(place);
                console.log("H(p):"+hp.toFixed(3)+"bit");                             
                                                                        
                }
                
                
        }
        var sum = 0;
        for(var k = 0;k<place.length;k++)
        {

                sum+=parseFloat(place[k]);


        }
        if(sum!==1)
        {

                console.log("概率和不唯一");
                Stdin();                 
                        
        }
        else{ console.log("p:"+"["+place+"]")
        var hp = calculate(place);
        console.log("H(p):"+hp.toFixed(3)+"bit");}
       


}
else if(process.argv.length == 4)//空格输入俩参数
{
    if(isNaN(space1) || isNaN(space2))//如果有一个输入不是数字
    {
            Stdin();                
    }
    else{
    console.log("p:"+"["+space1+","+space2+"]")
        var hp = calculate1(space1,space2)
        console.log("H(p):"+hp.toFixed(3)+"bit");     
    }
}
else if(process.argv.length > 4)
{
        console.log("输入参数太多，已退出！");
        process.exit(1);

}




