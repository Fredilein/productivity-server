const express = require('express');
const PORT = process.env.PORT || 4040;
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config/db');
const app = express();

// routes
var tasks = require('./api/routes/task');

//configure database and mongoose
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true)
mongoose
  .connect(config.database, { useNewUrlParser: true })
  .then(() => {
    console.log('Database is connected');
  })
  .catch(err => {
    console.log({ database_error: err });
  });

app.use(cors());

app.use(express.urlencoded({extended: true}));
app.use(express.json()) // To parse the incoming requests with JSON payloads

app.use(morgan('dev'));

app.use('/tasks', tasks);

app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`);
});
