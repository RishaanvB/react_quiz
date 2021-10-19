const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
  username: String,
  score: Number,
  created: { type: Date, default: new Date() },
});

module.exports = mongoose.model('User', UserSchema);
