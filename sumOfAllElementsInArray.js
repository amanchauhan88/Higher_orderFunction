var arr = [1,2,3,4,]

var newArr = arr.reduce(function(sum,ele){
    return sum+ele
},0)
console.log(newArr)