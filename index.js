const http = require('http')
const fs = require('fs')
const port = process.env.PORT || 8080

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html');
    let path = './'
    switch(req.url){
        case '/':
            path = './index.html'
            break
        case '/about':
            path = './about.html'
            break
        case '/contactme':
            path = './contactme.html'
            break
        default:
            path = './404.html'
            break;
    }


    fs.readFile(path, (err,data) => {
        if (err){
            console.log(err);
        }else{
            res.end(data);
        }
    })  
})

server.listen(port, () => {
  console.log(`Server running at port ${port}`)
})

