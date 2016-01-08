var http = require("http");
var fs = require("fs");
var zlib = require("zlib");

var server = http.createServer(function(req,res){
    var filename = req.headers.filename;
    
    console.log('File request recieved : ' + filename);
    
    req.pipe(zlib.createGzip())
       .pipe(fs.createWriteStream(filename + '1'))
       .on('finish', function(){
           res.writeHead(201, {'Content-Type': 'text/plain'});
           res.end('That\'s it\n');
           console.log('File saved: ' + filename);
       });
});

server.listen(3000, function(){
    console.log('listening');
})