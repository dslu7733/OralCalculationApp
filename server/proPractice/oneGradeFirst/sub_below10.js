//
//10以内减法
//一年级上
module.exports = function (number) {
    var arr = new Array();
  
    for (var i = 0; i < number; i++) {
      let forluma = new Object();
  
      var num1 = parseInt(Math.random()*10)
      var num2 = parseInt(Math.random()*10)
  
      var answer = num1 - num2;
      if(answer < 0){
        tmp = num1
        num1 = num2
        num2 = tmp
        answer = -answer
      }
  
      var content = String(num1) + ' - ' + String(num2) + ' = '
      forluma.ans = String(answer);
      forluma.prob = content
      forluma.index   = i      
      forluma.right   = 0
      forluma.input   = ''
      arr.push(forluma);
    }
    return arr;
  }
  