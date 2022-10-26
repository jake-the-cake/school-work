const mongoose = require('mongoose');
const User = require('./models/user.model');

const connection = 'mongodb://mongo:27017';

const connectDb = () => {
  return mongoose.connect(connection).then(() => console.log('connected')).catch((err) => {
    console.log(err.message)
  });
};

module.exports = connectDb;
