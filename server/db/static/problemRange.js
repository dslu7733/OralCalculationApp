const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/oralCal', {
  useFindAndModify: false,
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true
})

let praRangeSchema = new mongoose.Schema({
  grade: {
    type: Array,
    required: true
  },

  praRange: {
    type: Array,
    require: true
  }
})

const PraRange = mongoose.model('praticeRange', praRangeSchema)
