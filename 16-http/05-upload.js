#!/usr/bin/node

const http = require('http');
http.createServer((req,res)=>{
  if(req.url!== '/' || req.method!=='POST')
{
  res.statusCode = 404;
  
res.end('错误请求');
}else{
  req.end('OK');
  
}
}).listen(8080);
