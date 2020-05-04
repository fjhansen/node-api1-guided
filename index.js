//import express from 'express'; 
//ES2015 MODULES. This is old!

//CommonJS Modules. This is current!. gives access to express
const express = require('express')

//Create server
const server = express();

  // return an array of lessons (id, name)
  // this is in global scope, so other functions can use it.
  let lessons = [
    {
      id: 1,
      name :'introduction to HTTP APIs with node and express'
    }
  ];

server.get('/', (req, res) => {
  res.json({ api: "We all good!" })
}); 

server.get('/api/lessons', function(req, res) {

  //dont send strings. JSON objects! 
  //they do something special: 
  res.json(lessons);
})

server.post('/api/lessons', function(req, res) {
  const lessonInformation = req.body;

  lessons.push(lessonInformation);

  res.status(201).json(lessonInformation);
})

server.listen(8000, () => console.log("\n==API IS UP==\n"))