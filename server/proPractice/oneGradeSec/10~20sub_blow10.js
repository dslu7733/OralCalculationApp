module.exports = function (number) {
	//十几减一位数
  var arr = new Array();

  for (var i = 0; i < number; i++) {
    let forluma = new Object();

    var num1 = Math.floor(Math.random() * 10 + 11);
    var num2 = Math.floor(Math.random() * 10 + 1);

    if(num1===20) num1 = num1 - 1;
    if(num2===10) num2 = num2 - 1;
    var answer = num1 - num2;

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
