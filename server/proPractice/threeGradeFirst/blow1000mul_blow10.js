module.exports = function (number) {
    //三位数乘一位数
  var arr = new Array();

  for (var i = 0; i < number; i++) {
    let forluma = new Object();

    var num3 = Math.floor(Math.random() * 10 + 1) * 10;
    if(num3 === 100) num3 = 90
    var num4 = Math.floor(Math.random() * 10 + 1) * 100;
    if(num4 === 1000) num4 = 900
    var num1 = Math.floor(Math.random() * 10 + num3 + num4);
    var num2 = Math.floor(Math.random() * 10 + 1);
    if(num2 === 10) num2 = 9;

    var answer = num1 * num2;
    
    var content = String(num1) + ' × ' + String(num2) + ' = '
    forluma.ans = String(answer);
    forluma.prob = content
    forluma.index   = i      
    forluma.right   = 0
    forluma.input   = ''
    arr.push(forluma);
  }
  return arr;
}