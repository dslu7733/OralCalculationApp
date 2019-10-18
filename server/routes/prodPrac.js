let questions = require('../proPractice/index')
let express = require('express')

let router = express.Router()


//这里查找可以优化
//太多重复的操作
router.post('/prodPratice', (req, res) => {
  if (req.body == {}) {
    res.end('')
  } else {
    //gradeOne first
    if (req.body.pracType == '10以内的减法') {
      let sendData = JSON.stringify(questions.sub_below10(req.body.proNum))
      res.end(sendData)
    } else if (req.body.pracType == '10以内的加法') {
      let sendData = JSON.stringify(questions.add_below10(req.body.proNum))
      res.end(sendData)
    } else if (req.body.pracType == '10以内连加') {
      let sendData = JSON.stringify(questions.twoAdd_below10(req.body.proNum))
      res.end(sendData)
    } else if (req.body.pracType == '10以内连减') {
      let sendData = JSON.stringify(questions.twoSub_below10(req.body.proNum))
      res.end(sendData)
    } else if (req.body.pracType == '10以内加减混合') {
      let sendData = JSON.stringify(questions.subAdd_below10(req.body.proNum))
      res.end(sendData)
    }

    //grade one second
    else if (req.body.pracType == '十几减一位数') {
      let sendData = JSON.stringify(questions.twoSubOne(req.body.proNum))
      res.end(sendData)
    } else if (req.body.pracType == '两位数加一位数') {
      let sendData = JSON.stringify(questions.twoAddOne(req.body.proNum))
      res.end(sendData)
    } else if (req.body.pracType == '两位数减一位数') {
      let sendData = JSON.stringify(questions.blow100SubOne(req.body.proNum))
      res.end(sendData)
    } else if (req.body.pracType == '整十数混合加减') {
      let sendData = JSON.stringify(questions.dozenAddSub(req.body.proNum))
      res.end(sendData)
    }

    // grade two first
    else if (req.body.pracType == '两位数加两位数') {
      let sendData = JSON.stringify(questions.add_2bits(req.body.proNum))
      res.end(sendData)
    } else if (req.body.pracType == '乘法口诀表练习') {
      let sendData = JSON.stringify(questions.mul(req.body.proNum))
      res.end(sendData)
    } else if (req.body.pracType == '两位数减两位数') {
      let sendData = JSON.stringify(questions.sub_2bits(req.body.proNum))
      res.end(sendData)
    } else if (req.body.pracType == '两位数加减混合') {
      let sendData = JSON.stringify(questions.subadd_2bits(req.body.proNum))
      res.end(sendData)
    }

    //grade two second
    else if (req.body.pracType == '用789的乘法口诀求商') {
      let sendData = JSON.stringify(questions.SENDiv(req.body.proNum))
      res.end(sendData)
    } else if (req.body.pracType == '用23456的乘法口诀求商') {
      let sendData = JSON.stringify(questions.TTFFSDiv(req.body.proNum))
      res.end(sendData)
    } else if (req.body.pracType == '四则混合运算') {
      let sendData = JSON.stringify(questions.fix(req.body.proNum))
      res.end(sendData)
    }

    //grade three first
    else if (req.body.pracType == '三位数乘一位数') {
      let sendData = JSON.stringify(questions.blow1000mul_blow10(req.body.proNum))
      res.end(sendData)
    } else if (req.body.pracType == '两位数乘一位数') {
      let sendData = JSON.stringify(questions.blow100mul_blow10(req.body.proNum))
      res.end(sendData)
    } else if (req.body.pracType == '几百几十加几百几十') {
      let sendData = JSON.stringify(questions.threeAddThree(req.body.proNum))
      res.end(sendData)
    } else if (req.body.pracType == '几百几十减几百几十') {
      let sendData = JSON.stringify(questions.threeSubThree(req.body.proNum))
      res.end(sendData)
    }

    //grade three second
    else if (req.body.pracType == '两位数除一位数') {
      let sendData = JSON.stringify(questions.twoDivOne(req.body.proNum))
      res.end(sendData)
    } else if (req.body.pracType == '两位数乘两位数') {
      let sendData = JSON.stringify(questions.twoMulTwo(req.body.proNum))
      res.end(sendData)
    } else if (req.body.pracType == '两位数与11的乘法') {
      let sendData = JSON.stringify(questions.twoMulele(req.body.proNum))
      res.end(sendData)
    } else if (req.body.pracType == '三位数除一位数') {
      let sendData = JSON.stringify(questions.threeDivOne(req.body.proNum))
      res.end(sendData)
    } else {
      res.end('')
    }
  }
  //console.log(req.body)
})

module.exports = router
