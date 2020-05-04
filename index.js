//import express from 'express'; 
//ES2015 MODULES. This is old!

//CommonJS Modules. This is current!. gives access to express
const express = require('express')

//Create server
const server = express();

server.get('/', (req, res) => {
  res.json({ api: "We all good!" })
}); 

server.listen(8000, () => console.log("\n==API IS UP==\n"))