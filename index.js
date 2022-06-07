const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

const uri = process.env.ATLAS_URI;

mongoose.connect(uri)
  .then(() => console.log('Successfully connected to MONGODB!'))
  .catch(err => console.log(err))
;

if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
  app.use(express.static('frontend/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/frontend/build/index.html'));
  });
}

const robotsRouter = require('./routes/robots');
app.use('/robots', robotsRouter);

app.listen(port, () => {
    console.log(`Server is running on Port: ${port}!`);
});