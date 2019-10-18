module.exports = function (number) {
    //四则混合运算
  var arr = new Array();

  for (var i = 0; i < number; i++) {
    let forluma = new Object();

    var num1 = Math.floor(Math.random() * 10);
    var num2 = Math.floor(Math.random() * 10);
    var answer = 0;
    var content = String(num1);
    
    var expression = parseInt(Math.random() * 4 , 10);
    switch(expression){
        case 0:{
            answer = num1 + num2;
            content = String(num1) + ' + ' + String(num2) + ' = '
        }
        break;
        case 1:{
            answer = num1 - num2;
            if(answer < 0){
                tmp = num1
                num1 = num2
                num2 = tmp
                answer = -answer
            }
            content = String(num1) + ' - ' + String(num2) + ' = '
        }
        break;
        case 2:{
            answer = num1 * num2;
            content = String(num1) + ' × ' + String(num2) + ' = '
        }
        break;
        case 3:{
            var num3 = num1 * num2 ;
            for(;num3 === 0;){
                num1 = Math.floor(Math.random() * 10);
                num2 = Math.floor(Math.random() * 10);
                num3 = num1 * num2;
            }
            answer = num1;
            content = String(num3) + ' ÷ ' + String(num2) + ' = '
        }
        break;
        default:;
    }

    forluma.ans = String(answer);
    forluma.prob = content
    forluma.index   = i      
    forluma.right   = 0
    forluma.input   = ''
    arr.push(forluma);
  }
  return arr;
}