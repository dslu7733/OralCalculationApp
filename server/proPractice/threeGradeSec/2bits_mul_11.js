//
//两位数乘11
//三年级下
module.exports = function (number){      
    var arr = new Array()

    for(var i = 0; i<number; i++){
        let forluma = new Object();

        do {
            var num1 = parseInt(Math.random()*100)
        } while (num1<10);

        
        var answer = num1 * 11  
        var content = String(num1) + ' * 11 = '

        forluma.ans = String(answer)
        forluma.prob = content
        forluma.index = i
        forluma.right = 0
        forluma.input = ''
        arr.push(forluma)
    }
    return arr
}
