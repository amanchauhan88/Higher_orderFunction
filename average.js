var num = [1,2,3,4,]

function calculateAverage(num){
if(num.length==0){
    return 0
}

const sum =  num.reduce(function(sum,ele){
    return sum+ele
},0)

const avrage = sum/num.length;
return avrage;


}


var ans = calculateAverage(num)
console.log(ans)

