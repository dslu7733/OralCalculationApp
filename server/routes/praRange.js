let PraRange = require('../db/static/praticeRange.js')
let express = require('express')

let router = express.Router()


router.get('/pratice/range', function (req, res) {
  //console.log('/pratice/range')
  if (req.query !== {}) {
    PraRange.findOne({
      'grade': req.query.grade
    }).exec((err, data) => {
      if (data !== null) {
        //console.log("get pratice range: " + data.praRange)
        if (data.praRange != null) {
          res.send(data.praRange)
        }
      } else {
        console.log('not find the grade ' + req.query.grade)
        res.end('')
      }
    })
  } else {
    console.log('req.query is empty. not find')
    res.end('')
  }

})

module.exports = router
