var arr = [1,2,3,4,5,6,7,8,9,10,11,12]

var newArr = arr.filter(function(ele){
    return ele % 2 == 0
})
console.log(newArr)