const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let RobotSchema = new Schema({
    name: {
        type: String
    },
    manufacturer: {
        type: String
    },
    price: {
        type: String
    },
    isAvailable: {
        type: Boolean
    },
    imageUrl: {
      type: String
    },
    quantity: {
      type: String
    },
    highlight1: {
      type: String
    },
    highlight2: {
      type: String
    },
    highlight3: {
      type: String
    },
    highlight4: {
      type: String
    },
    highlight5: {
      type: String
    },
    overview: {
      type: String
    }
});

module.exports = mongoose.model('Robot', RobotSchema);