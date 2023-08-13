//1
var array = [123, 234, 256, 345, 456, 567, 543, 67, 55, 23, 28, 50]
var newArray = []
for (var i = 0; i < array.length; i++) {
    var str = String(array[i])
    var backNum = Number(str[0])
    if (backNum === 2 || backNum === 5) {
        newArray.push (array[i])
    }
}
console.log(newArray);


//2
var useFunc = function (type) {
    return typeof type
}
console.log(useFunc(false));
console.log(useFunc('HI'));
console.log(useFunc(88));

//3
var tags = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1',  'p', 'h1', 'ol', 'br']
var tagSafe = {}
for (var tag of tags) {
    if (tagSafe[tag]) {
        tagSafe[tag]++
    }else {
        tagSafe[tag] = 1
    }
}
console.log(tagSafe);
