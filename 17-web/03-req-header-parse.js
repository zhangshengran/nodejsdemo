#!/usr/bin/node
  const http = require('http');
  const log = console.log;
  http.createServer((req,res)=>{
    console.log(req.headers);

    log('\nUser-Agent:', req.headers['user-agent']);
      log('Host:', req.headers.host);
        log('Content-Type:', req.headers['content-type']);
          log('');
          req.pipe(process.stdout);

            res.end('OK!');
  }).listen(8080);
