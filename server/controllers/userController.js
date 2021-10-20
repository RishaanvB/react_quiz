const userModel = require('../models/userModel');
const { body, validationResult } = require('express-validator');

exports.getUsers = async (req, res, next) => {
  const users = await userModel.find({}).limit(10).exec();
  console.log(users);
  res.json(users);
};

exports.createUser = [
  body('username')
    .trim()
    .isAlphanumeric()
    .isLength({ min: 1 })
    .escape()
    .withMessage('Username should not contain special characters'),
  (req, res, next) => {
    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log('there is an error with creating a user');
      return;
    } else {
      userModel.create({ username: req.body.username, score:5 });
      console.log('user created')
    }
  },
];
