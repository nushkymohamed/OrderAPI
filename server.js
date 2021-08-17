const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());



//enviromental variables
const PORT = process.env.PORT || 8081;
const MONGODB_URI = process.env.MONGODB_URI;
//Connect the database
mongoose.connect(MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  }, (error) => {
    if (error) {
      console.log('Database Error: ', error.message);
    }
  });

  mongoose.connection.once('open', () => {
    console.log('Database Synced');
  });

  //root route
  app.route('/').get((req, res) => {
    res.send('Order API');
  });

  app.listen(PORT, () => {
    console.log(`Server is up and running on PORT ${PORT}`);
  });