//
//10以内混合加减
//一年级上
module.exports = function (number){    
    var arr = new Array();

    for(var i = 0; i<number; i++){
        let forluma = new Object();

        var num1 = parseInt(Math.random()*10)
        var num2 = parseInt(Math.random()*10)
        var num3 = parseInt(Math.random()*10)
        var choice = parseInt(Math.random()*10)     //'+ -' or '- +'

        if(choice<5){
            var answer = num1 + num2 - num3
            var content = String(num1) + ' + ' + String(num2) + ' - ' + String(num3) + ' = '
            if (answer>0){
                forluma.ans = String(answer);
                forluma.prob = content
                forluma.index = i
                forluma.right = 0
                forluma.input = ''
                arr.push(forluma);
            }
            else i--
        }
        else{
            var answer = num1 - num2 + num3
            var content = String(num1) + ' - ' + String(num2) + ' + ' + String(num3) + ' = '
            if(num1 - num2 > 0){
                forluma.ans = String(answer);
                forluma.prob = content
                forluma.index = i
                forluma.right = 0
                forluma.input = ''
                arr.push(forluma);
            }
            else i--
        }

    }
    return arr;
}
