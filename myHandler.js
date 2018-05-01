function sleep(millisec){
    let timeStart = new Date().getime;
    while (new Data().getTime()< timeStart + millisec);
}

function Start(res) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write('Hello,start!');
      res.end();
      return ;
}

function hello(res) {
    sleep(20000);
    res.write('Hello,start!');
    res.end();
    return ;
}

exports.start = start;
exports.hello = hello;