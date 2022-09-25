const port = process.env.PORT || 8080
const express = require('express');
const app = express();

app.get('/',routeHandler)
app.get('/about',routeHandler)
app.get('/contactme',routeHandler)
app.use(notFound)

app.listen(port, () => {
  console.log(`Server running at port ${port}`)
})

function routeHandler (req,res) {
    res.statusCode = 200
    let path
    req.url!=='/' ? path = `${__dirname}/${req.url}.html`: path = `${__dirname}/index.html`
    res.sendFile(path, readErrHandler)
} 

 function notFound (req,res) {
    res.statusCode = 404
    res.sendFile(`${__dirname}/404.html`, readErrHandler)
} 

function readErrHandler (err) {
  if (err){console.log(err)}
}

