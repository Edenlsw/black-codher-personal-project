const mongoose = require('mongoose');
const { Schema } = mongoose;

const filterSchema = new Schema({
  activityName: String,
  description: String,
  filterCategory: Array
  
});

mongoose.model('filters', filterSchema);



