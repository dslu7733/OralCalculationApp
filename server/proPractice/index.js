let add_below10 = require('./oneGradeFirst/add_below10')
let sub_below10 = require('./oneGradeFirst/sub_below10.js')
let twoAdd_below10 = require('./oneGradeFirst/2add_below10')
let twoSub_below10 = require('./oneGradeFirst/2sub_below10')
let subAdd_below10 = require('./oneGradeFirst/subadd_below10.js')

let twoSubOne = require('./oneGradeSec/10~20sub_blow10')
let twoAddOne = require('./oneGradeSec/blow100add_blow10')
let blow100SubOne = require('./oneGradeSec/blow100sub_blow10')
let dozenAddSub = require('./oneGradeSec/whole _dozen_add')

let add_2bits = require('./twoGradeFirst/add_2bits')
let mul = require('./twoGradeFirst/mul')
let sub_2bits = require('./twoGradeFirst/sub_2bits')
let subadd_2bits = require('./twoGradeFirst/subadd_2bits')

let SENDiv = require('./twoGradeSec/Mix_operation')
let TTFFSDiv = require('./twoGradeSec/div23456')
let fix = require('./twoGradeSec/div789')

let blow1000mul_blow10 = require('./threeGradeFirst/blow1000mul_blow10')
let blow100mul_blow10 = require('./threeGradeFirst/blow100mul_blow10')
let threeAddThree = require('./threeGradeFirst/whole_100~100_add')
let threeSubThree = require('./threeGradeFirst/whole_100~100_sub')

let twoDivOne = require("./threeGradeSec/2bits_div_1bit")
let twoMulTwo = require("./threeGradeSec/2bits_mul_11")
let twoMulele = require("./threeGradeSec/2bits_mul_2bits")
let threeDivOne = require("./threeGradeSec/3bits_div_1bit")



module.exports = {
  add_below10,
  sub_below10,
  twoAdd_below10,
  twoSub_below10,
  subAdd_below10,

  twoSubOne,
  twoAddOne,
  blow100SubOne,
  dozenAddSub,

  add_2bits,
  mul,
  sub_2bits,
  subadd_2bits,

  SENDiv,
  TTFFSDiv,
  fix,

  blow1000mul_blow10,
  blow100mul_blow10,
  threeAddThree,
  threeSubThree,

  twoDivOne,
  twoMulTwo,
  twoMulele,
  threeDivOne
}
