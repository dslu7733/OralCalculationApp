module.exports = function(number) {
  var arr = new Array();
  
  //注意作用域
  for (var i = 0; i < number; i++) {
    let forluma = new Object();
    let num1 = Math.floor(Math.random() * 10 + 1);
    //console.log(Math.random())
    let num2 = Math.floor(Math.random() * 10 + 1);
    let answer = num1 + num2;
    let content = String(num1) + ' + ' + String(num2) + ' = '
    forluma.ans = answer;
    forluma.prob = content
    arr[i] = forluma;
    //console.log(arr[i].prob)
  }
  return arr;
}


