//
//两位数除一位数
//三年级下
module.exports = function (number){      
    var arr = new Array();

    for(var i = 0; i<number; i++){
        let forluma = new Object();

        var num1, num2, num3    // num3/num1=num2 
        do {
            num1 = parseInt(Math.random()*10)
        } while (num1<1);                   //num1 1-9
        do {
            num2 = parseInt(Math.random()*100)
        } while (num2<1);                   //num2 1-99
        num3 = num1 * num2
        
        var answer = num2
        var content = String(num3) + ' / ' + String(num1) + ' = ' 

        if(num3<100 && num3>9){
            forluma.ans = String(answer);
            forluma.prob = content
            forluma.index = i
            forluma.right = 0
            forluma.input = ''
            arr.push(forluma);
        }
        else i--
    }
    return arr;
}

