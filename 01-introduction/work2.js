    var num1, num2;
    /*2：向屏幕输出，提示信息，要求输入num1*/
    process.stdout.write('请输入num1的值：');
    /*3：监听用户的输入*/
    process.stdin.on('data', function (chunk) {
      if (num1!==2) {
                num1 = Number(chunk);
                        /*4：向屏幕输出，提示信息，要求输入num2*/
                        process.stdout.write('请重输入num1的值');
                            
      } else {
        process.stdout.write('请输入num2')
                num2 = Number(chunk);
                        process.stdout.write('结果是：' + (num1 + num2));
                            
      }

    });
