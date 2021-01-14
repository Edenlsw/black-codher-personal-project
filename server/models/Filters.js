const mongoose = require('mongoose');
const { Schema } = mongoose;

const filterSchema = new Schema({
  activityName: String,
  description: String,
  filterCategory: [Array]
  // image: Image,
});

mongoose.model('filters', filterSchema);



