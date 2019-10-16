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

var gradeOneFirst = new PraRange({
  grade: ['gradeOne', 'firstSemester'],

  praRange: ['十以内的加法',
    '十以内的减法',
    '十以内的加减法',
    '十加几与相应的减法'
  ]
}).save()

var gradeOneSecond = new PraRange({
  grade: ['gradeOne', 'secondSemester'],

  praRange: ['十几减9',
    '十几减8，7，6',
    '十几减5,4,3,2',
    '整十数加，整十数减'
  ]
}).save((err, res) => {
  if (err) {
    console.log('update praticeRange err: ' + err)
  } 
  // else {
  //   console.log('update pratice range: ' + res)
  // }
})

// gradeOneFirst.save((err,res)=>{
//     if(err){
//       console.log('update praticeRange err: ' + err)
//     }else{
//       console.log('update pratice range: ' + res)
//     }
// })

module.exports = PraRange
