const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/oralCal', {
  useFindAndModify: false,
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true
})

let userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  grade: {
    type: Array,
    required: true
  },

  history: {
    type: String,
    default: ''
  },

  errorRecord: {
    type: Array,
    default: []
  }
})

const User = mongoose.model('User', userSchema)
module.exports = User
