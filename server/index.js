const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRouter = require('./routes/userRoutes');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const collectionName = 'quiz';
const URI = `mongodb+srv://rishaan:${process.env.MONGO_PASS}@cluster0.nektk.mongodb.net/${collectionName}?retryWrites=true&w=majority`;
const PORT = process.env.PORT || 5000;

async function main() {
  await mongoose.connect(URI);
  await app.listen(PORT, () => console.log(`server running on ${PORT}`));

  app.use('/users', userRouter);
}
main().catch((error) => console.log(error));
