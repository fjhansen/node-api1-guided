//import express from 'express'; 
//ES2015 MODULES. This is old!

//CommonJS Modules. This is current!. gives access to express
const express = require('express')

//Create server
const server = express();

server.use(express.json()); // teaches express to use JSON from the body

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

// everything that comes out of URL is a string. so remember to use Number constructor or use != instead of !==
server.delete("/api/lessons/:id", function(req, res) {
  const id = Number(req.params.id);

  // find the lesson on the array and remove it
  lessons = lessons.filter(lesson => lesson.id !== id);
  res.status(200).json(lessons);
})

server.listen(8000, () => console.log("\n==API IS UP==\n"))