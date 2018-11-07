#!/usr/bin/node

const http = require('http');
var address = process.argv[2] || 'http://sample.wangding.in/web/one-div.html';
http.get(address,(res)=>{
  console.log(res.headers);
  res.pipe(process.stdout)
})
