const fs=require('fs');

const routeFunction = (req,res) =>{

    const url=req.url;
    const method=req.method;

    if(url==='/')
    {
        res.setHeader('Content-Type', 'text/html');
        res.write('<head><title>Enter Message</title></head>')
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="Submit">Submit</button></form></body>')
        return res.end();   //return to quit the function
    }

    if(url==='/message' && method==='POST')
    {
        const body=[];
        req.on('data', (chunk)=>{       //data event gets fired when you are ready to read a buffer of data;
            console.log(chunk);         //'data' is event, 'chunk' is piece of data we would work on with;
            body.push(chunk);
        });

        return req.on('end', ()=>{  //return being stated here, else code after it would be executed (vid-36)
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const message=parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, ()=>{
                res.statusCode=302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });       
    }
    
    //console.log("nomaf");
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>Response Page using Node.js</title></head>');
    res.write('<body>First response page using Node.js!!!</body>');
    res.write('</html>');
    res.end();
};

module.exports = {
    route: routeFunction    //expoting routeFunction as route
};
