#!/usr/bin/node

const http = require('http');
const url = require('url')
var city = process.argv[2] || '石家庄'
var result = '';
var url2 = 'http://v.juhe.cn/weather/index?format=2&cityname='+city+'&key=4c9a8cfb2c2ced97479eef53facfd188';
http.get(encodeURI(url2),(res)=>{
//result += res;
res.pipe(process.stdout)
//console.log(JSON.parse(result))
res.on('data',(data)=>{
  result += data.toString('utf8')
})
res.on('end',()=>{
  var weather = JSON.parse(result)
console.log(weather);
});
})
