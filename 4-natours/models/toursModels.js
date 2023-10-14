const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, 'A tour must have Name'],
    unique: true
  },
  rating: { type: Number, default: 4.5 },
  price: {
    type: Number,
    require: [true, 'A tour must have Price']
  }
});

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
