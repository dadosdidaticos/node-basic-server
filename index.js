const fs = require('fs')
const port = process.env.PORT || 8080

const express = require('express');
const app = express();

app.get('/',routeHandler)
app.get('/about',routeHandler)
app.get('/contactme',routeHandler)
app.use(notFound)

const routeHandler = function (req,res) {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    fs.readFile(`https://node-basic-server.marcos-vinici70.repl.co${req.url}.html`, (err,data) => {
        if (err){
            console.log(err);
        }else{
            res.end(data);
        }
    })
} 

const notFound = function(req,res) {
    res.statusCode = 404
    res.setHeader('Content-Type', 'text/html')
    fs.readFile(`https://node-basic-server.marcos-vinici70.repl.co/404.html`, (err,data) => {
        if (err){
            console.log(err);
        }else{
            res.end(data);
        }
    })
}

app.listen(port, () => {
  console.log(`Server running at port ${port}`)
})

