const express = require('express');
const app = express();
const cors = require('cors');
const connectDb = require('./src/database');
const faker = require('faker');

const User = require('./src/models/user.model');

// configure express to use cors()
// ------------------------------------------------------------------
app.use(cors());

app.get('/users', async (req, res) => {
  const users = await User.find();

  res.json(users);
});

app.get('/user-create', async (req, res) => {
  const user = new User({
    username: faker.internet.userName(),
    email: faker.internet.email(),
  });

  await user.save().then(() => console.log('User created'));

  res.send('User created \n');
});

app.get('/users-delete', async (req, res) => {
  await User.deleteMany({}).then(() => console.log('Users deleted'));

  res.send('Users deleted \n');
});

app.get('/', (req, res) => {
  res.send('Hello from Node.js app \n');
});

// start server
// -----------------------
app.listen(8080, function () {
  console.log('Running on port 8080! - http://localhost:8080');
  connectDb().then(() => console.log('MongoDb connected'));
});
