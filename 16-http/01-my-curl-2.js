#!/usr/bin/node

const http = require('http');
const url = require('url');
const log = console.log;
var addr = process.argv[2] || 'http://sample.wangding.in/web/one-div.html';
var option = url.parse(addr);


option.methid = "GET";
option.headers = {
  'User-Agent':'01-my-curl.js'
};
http.get(option,(res) => {
  log('status',res.statusCode)
  log("status message:",res.statusMessage);
  log('HTTP Version',res.httpVersion);
  log(' ');

  log(res.headers);
  console.log('');

  res.pipe(process.stdout)
});
