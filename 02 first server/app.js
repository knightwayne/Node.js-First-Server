
const http = require('http');

/*
function reqListner(req,res){
    console.log(req);
};
const server = http.request(reqListner);
*/

const server = http.createServer(
    function reqListner(req,res){

        //processing of request
        console.log(req.url, req.method, req.headers);
        
        //processing of response
        console.log(res);
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head><title>Response Page using Node.js</title></head>');
        res.write('<body>First response page using Node.js!!!</body>');
        res.write('</html>');
        res.end();
        //process.exit();
    }
);

server.listen(3000);