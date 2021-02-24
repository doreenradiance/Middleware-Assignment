const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");


const server = express("server");

const homeRequestHandler = (req, res) =>{
   // let body ="";
   // req.on("data",chunk =>{
   //    body += chunk;
   // });
   // req.on("end",() =>{
   //    //parse with regEx

   //    console.log(body)
   // })
   console.log(req.body.email)
   console.log(req.body.password)
   res.send("Done")
}

// middleWares
server.use(express.static(path.join(__dirname,"public")));
server.use(bodyParser.urlencoded({extended :false}))


//routes
server.post("/login", homeRequestHandler)

server.listen(4005, () => console.log('Server is ready'))