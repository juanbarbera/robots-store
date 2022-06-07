require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

const uri = process.env.ATLAS_URI;

mongoose.connect(uri)
  .then(() => console.log('Successfully connected to MONGODB!'))
  .catch(err => console.log(err))
;

const robotsRouter = require('./routes/robots');
app.use('/api/robots', robotsRouter);

if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
  });
}

app.listen(port, () => console.log(`Server is running on Port: ${port}!`));