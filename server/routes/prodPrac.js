let questions = require('../proPractice/index')
let express = require('express')

let router = express.Router()

router.post('/prodPratice', (req, res) => {
  if (req.body == {}) {
    res.end('')
  } else {
    if (req.body.pracType == '十以内的减法') {
      let sendData = JSON.stringify(questions.sub_below10(req.body.proNum))
      //console.log(sendData)
      res.end(sendData)
    } else if (req.body.pracType == '十以内的加法') {
      let sendData = JSON.stringify(questions.add_below10(req.body.proNum))
      //console.log(sendData)
      res.end(sendData)
    } else {
      res.end('')
    }
  }
  //console.log(req.body)
})

module.exports = router
