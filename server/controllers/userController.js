const userModel = require('../models/userModel');

exports.getUsers = async (req, res, next) => {
  const users = await userModel.find({}).exec();
  console.log(users);
  res.json(users);
  // const password = await userModel.find().limit(2)
  // console.log(users, '<--users')
};

// exports.createUser = async (req, res, next) => {
//   await userModel.create({
//     username: req.body.username,
//     score: req.body.score,
//   });
// };

// exports.createUsers = (req, res, next) => {
//   res.send('This is a post ');
// };

// userModel.create({ username: 'secondUser', score: 1000 }, (err, result) => {
//   console.log(err, '<--error');
//   console.log(result, '<--result');
// });
