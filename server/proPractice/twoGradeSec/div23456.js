module.exports = function (number) {
    //用23456的乘法口诀求商
  var arr = new Array();

  for (var i = 0; i < number; i++) {
    let forluma = new Object();

    var num1 = Math.floor(Math.random() * 10)
    for(;(num1 > 6)||(num1 < 2);){
        num1 = Math.floor(Math.random() * 10)
    }
    
    
    var num2 = Math.floor(Math.random() * 10 + 1);
    if(num2 === 10) num2 = 9;

    var num3 = num1 * num2
    var answer = num2;
    
    var content = String(num3) + ' ÷ ' + String(num1) + ' = '
    forluma.ans = String(answer);
    forluma.prob = content
    forluma.index   = i      
    forluma.right   = 0
    forluma.input   = ''
    arr.push(forluma);
  }
  return arr;
}