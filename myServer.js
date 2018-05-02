const http = require('http');
const url = require('url');

exports.start = function (port, host, route, handle) {
    function onRequest(req, res) { 
        let sPostData = '';
        let sPathname = url.parse(req.url).pathname;

        req.setEncoding('utf-8');
        req.addListener('data', function (dataChunk) {
            sPostData += dataChunk;
            console.log('Chunk = ' + dataChunk);
        });
        req.addListener('end', function () {
            route(sPathname, handle, res, sPostData);
        });
    }

    http.createServer(onRequest).listen(port, host);
    console.log('Server is running at ' + host + ':' + port);
}