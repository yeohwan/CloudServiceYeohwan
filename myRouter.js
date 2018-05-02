function route(pathname, handle, res, postData) {
    console.log('Routing for' + pathname);
    if (typeof handle[pathname] === 'function') {
        return handle[pathname](res, postData);
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write('404 Not Found!');
        res.end();
    }
}
exports.route = route;