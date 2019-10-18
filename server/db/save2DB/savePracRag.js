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

  praRange: ['10以内的加法',
    '10以内的减法',
    '10以内连加',
    '10以内连减',
    '10以内加减混合',
  ]
}).save((err, res) => {
  if (err) {
    console.log('update praticeRange err: ' + err)
  } else {
    console.log('update pratice range: ' + res)
  }
})

var gradeOneSecond = new PraRange({
  grade: ['gradeOne', 'secondSemester'],

  praRange: ['十几减一位数',
    '两位数加一位数',
    '两位数减一位数',
    '整十数混合加减'
  ]
}).save((err, res) => {
  if (err) {
    console.log('update praticeRange err: ' + err)
  } else {
    console.log('update pratice range: ' + res)
  }
})


var gradeTwoFirst = new PraRange({
  grade: ['gradeTwo', 'firstSemester'],

  praRange: ['两位数加两位数',
    '两位数减两位数',
    '两位数加减混合',
    '乘法口诀表练习'
  ]
}).save((err, res) => {
  if (err) {
    console.log('update praticeRange err: ' + err)
  } else {
    console.log('update pratice range: ' + res)
  }
})


var gradeTwoSecond = new PraRange({
  grade: ['gradeTwo', 'secondSemester'],

  praRange: ['用789的乘法口诀求商',
    '用23456的乘法口诀求商',
    '四则混合运算'
  ]
}).save((err, res) => {
  if (err) {
    console.log('update praticeRange err: ' + err)
  } else {
    console.log('update pratice range: ' + res)
  }
})


var gradeThreeFirst = new PraRange({
  grade: ['gradeThree', 'firstSemester'],

  praRange: ['两位数乘一位数',
    '三位数乘一位数',
    '几百几十加几百几十',
    '几百几十减几百几十'
  ]
}).save((err, res) => {
  if (err) {
    console.log('update praticeRange err: ' + err)
  } else {
    console.log('update pratice range: ' + res)
  }
})


var gradeThreeSecond = new PraRange({
  grade: ['gradeThree', 'secondSemester'],

  praRange: ['两位数除一位数',
    '三位数除一位数',
    '两位数与11的乘法',
    '两位数乘两位数'
  ]
}).save((err, res) => {
  if (err) {
    console.log('update praticeRange err: ' + err)
  } else {
    console.log('update pratice range: ' + res)
  }
})
