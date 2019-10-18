module.exports = function (number) {
    //几百几十减几百几十
  var arr = new Array();

  for (var i = 0; i < number; i++) {
    let forluma = new Object();

    var num1 = Math.floor(Math.random() * 10 + 1) * 100
    if (num1 === 1000) num1 = 900
    var num2 = Math.floor(Math.random() * 10 + 1) * 100
    if (num2 === 1000) num2 = 900
    var num3 = Math.floor(Math.random() * 10 + 1) * 10
    if (num3 === 100) num3 = 90
    var num4 = Math.floor(Math.random() * 10 + 1) * 10
    if (num4 === 100) num4 = 90

    num1 = num1 + num3 
    num2 = num2 + num4

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