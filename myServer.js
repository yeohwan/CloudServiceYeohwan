
const http = require("http");
const url = require ("url");


function start (Port,HostName,route,handle){
    function onRequest(req,res){
        let sPathname = url.parse(req.url).pathname;
        let content = route(sPathname,handle);
        res.writeHead(200, {'Content-type': 'text/html'});
        res.write(content);
        res.end();
     }

    http.createServer(onRequest).listen(Port,HostName);
    console.log('Server is running at ' + HostName + ':' + Port);
}

exports.start = start;


