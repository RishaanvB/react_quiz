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
  /* do not delete might be solution for cors */
  // app.use((req, res, next) => {
  //   res.header('Access-Control-Allow-Origin', '*');
  //   res.header(
  //     'Access-Control-Allow-Headers',
  //     'Origin, X-Requested-With, Content-Type, Accept'
  //   );
  //   next();
  // });
  app.use('/users', userRouter);
}
main().catch((error) => console.log(error));
// const db = mongoose.connection;
// const express = require('express');
// const pino = require('express-pino-logger')();

// const app = express();
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());
// app.use(pino);

// app.get('/api/greeting', (req, res) => {
//   const name = req.query.name || 'World';
//   res.setHeader('Content-Type', 'application/json');
//   res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
// });

// app.listen(3001, () =>
//   console.log('Express server is running on localhost:3001')
// );
