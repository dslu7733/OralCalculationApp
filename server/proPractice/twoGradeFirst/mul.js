//
//乘法口诀表练习
//二年级上
module.exports = function (number){      
    var arr = new Array();

    for(var i = 0; i<number; i++){
        let forluma = new Object();

        var num1, num2
        do {
            num1 = parseInt(Math.random()*10)
        } while (num1<1);
        do {
            num2 = parseInt(Math.random()*10)
        } while (num2<1);
       
        var answer = num1 * num2
        var content = String(num1) + ' * ' + String(num2) +  ' = '

        forluma.ans = String(answer);
        forluma.prob = content
        forluma.index = i
        forluma.right = 0
        forluma.input = ''
        arr.push(forluma);
    }
    return arr;
}
