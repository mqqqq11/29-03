//1
var nameReverse = reverse => reverse.split('').reverse().join('');
console.log(nameReverse('hello'));

//2
var average = array => {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum / array.length;
}
var array = [1, 2, 3, 4, 5]
console.log(average(array));

//3
var infoJohn = ['name', 'John', 'lastname', 'Black', 'age', '23']
var result = {}
for (var i = 0; i < infoJohn.length; i += 2) {
    result[infoJohn[i]] = infoJohn[i + 1];
}
console.log(result);

//4
var types = [null, 123, undefined, null, "qwerty", 34, 65, undefined, null, null, 43, "aerg", 'пкцйк', 'null', 'uioo'];

var nul = [];
var num = [];
var undef = [];
var str = [];

for (var i = 0; i < types.length; i++) {
    if (types[i] === null) {
        nul.push(types[i]);
    } else if (typeof types[i] === 'string') {
        str.push(types[i]);
    } else if (typeof types[i] === 'number') {
        num.push(types[i]);
    } else if (typeof types[i] === 'undefined') {
        undef.push(types[i]);
    }
}

var result2 = [];
<<<<<<< HEAD
result2.push(nul, undef, str, num);
=======
result2.push(undef, nul, num, str);
>>>>>>> f7ca4c4d56b4ef730b24b56c7f3f2c90f1dc0b07

result2.sort(function(a, b) {
    return a.length - b.length;
});
<<<<<<< HEAD
console.log(result2);
=======
console.log(result2);

>>>>>>> f7ca4c4d56b4ef730b24b56c7f3f2c90f1dc0b07
