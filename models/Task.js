const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Le titre est obligatoire'],
  },
  description: {
    type: String,
    required: [true, 'La description est obligatoire'],
  },  
  completed: {
    type: Boolean,
    default: false,
  },
}, { timestamps: true });

module.exports = mongoose.model('Task', taskSchema);