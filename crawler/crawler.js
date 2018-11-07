const http    = require('http'),
      cheerio = require('cheerio'),
      log     = console.log;


var addr = 'http://edu.51cto.com/courselist/index-zh5-p1.html';

for(var i = 0;i<86;i++){
    var addr = `http://edu.51cto.com/courselist/index-zh5-p${i}.html`;
    http.get(addr, (res) => {
        var result = '';
      
        res.on('data', (data) => {
          result += data.toString('utf8');
        });
      
        res.on('end', () => {
            var a = 0;
          var $ = cheerio.load(result);
          $('body').find('div.main').each(function(){
            var cName = $(this).find('a').text(),
                cTime = $(this).find('p.fl').text(),
                cTarget = $(this).find('div.course_target').text(),
                cURL = $(this).find('a').attr('href');
         
            if(cTime === '') return;
      
            log('课程名称：', cName);
            log('课时数量：', cTime);
            log('课程网址：', cURL.trim());
            log('教学目标：', cTarget.trim());
            a++;
            log(a);
          });
        });
      });
}
