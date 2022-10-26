require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const low = require('lowdb')
const FileAsync = require('lowdb/adapters/FileAsync')
//const authMiddleware = require('./auth')
// Create server
const app = express()
app.use(bodyParser.json())
//app.use(authMiddleware)
// Create database instance and start server
const adapter = new FileAsync('db.json')
low(adapter)
  .then(db => {
    // Routes
    app.get('/posts', (req, res) => {
      result = db.getState();
      res.send(result.posts)
    })
    // GET /posts/:id
    app.get('/posts/:id', (req, res) => {
      var ival = {"id":parseInt(req.params.id)};
      var result = db.get('posts')
        .find(ival)
        .value();
      res.send(result)
    })

    // POST /posts
    app.post('/posts', (req, res) => {
      db.get('posts')
        .push(req.body)
        .last()
        .assign({ id: Date.now().toString() })
        .write()
        .then(post => res.send(post))
    })
// add post
// ----------------------------
/*
db.get('posts')
  .push({ id: 2, title: 'good', published:'false'})
  .write()

db.get('posts')
  .push({ id: 3, title: 'cool', published:'true'})
  .write()

db.get('posts')
  .push({ id: 4, title: 'great', published:'true'})
  .write()  
*/

// lets test hitting db.json
  var result = db.get('posts')
    .find({ id: 2 })
    .value()
  console.log(result)

// use map to interact with each entry
/*
  db.get('posts')
    .map(function(item){
      console.log(item.id);
    })
    .value()


// all matches of published false
// ----------------------------
// YOUR CODE. use .filter

// find post with published false
// ----------------------------
// YOUR CODE
  db.get('posts')
    .find({ published: 'false' })
    .assign({ published: 'true'})
    .write()
    console.log ('posts '+ JSON.stringify(result.posts));

    // Set db default values
    return db.defaults({ posts: [] }).write()
    */
})
  .then(() => {
    app.listen(3000, () => console.log('listening on port 3000'))
  })