const userModel = require('../models/userModel');
const { body, validationResult } = require('express-validator');

exports.getUsers = async (req, res, next) => {
  const users = await userModel.find({}).sort({ score: -1 }).limit(10).exec();
  console.log(users);
  res.json(users);
};

exports.createUser = [
  body('username')
    .trim()
    .isLength({ min: 1, max: 8 })
    .escape()
    .withMessage('Username should be of length 1-8')
    .isAlphanumeric()
    .withMessage('Username should not contain special characters'),
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      console.log('there is an error with creating a user');
      console.log(errors.array());

      return res.status(400).json({ errors: errors.array() });
    } else {
      userModel
        .create({ username: req.body.username, score: req.body.score })
        .then((user) => res.json(user));
      console.log('user created');
    }
  },
];
