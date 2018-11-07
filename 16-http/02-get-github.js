#!/usr/bin/node

const http = require('http');
const url = require('url');
var name = process.argv[2] || 'zhangshengran';
var addr = 'https://api.github.com/search/repositories?q=user:'+name;
var option = url.parse(addr);
option.method = "GET";
option.headers = {
  'User-Agent':'02-get.js'
};
http.get(option,(data)=>{
  data.pipe(process.stdout)
})

