var newArray = [123, 234, 256, 345, 456, 567, 543, 67, 55, 23, 28, 50]
for (var i = 0; i < newArray.length; i++) {
    var str = String(newArray[i])
    var backNum = Number(str[0])
    if (backNum === 2 || backNum === 5) {
        console.log(newArray[i]);
    }
}

var useFunc = function (type) {
    return typeof type
    console.log(useFunc(false));
    console.log(useFunc('HI'));
    console.log(useFunc(88));
}




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