var num = [1,4,8,3,9]
function findMax(num){

    var max = 0;
   
    var res = num.filter(function(ele){
        if(ele>max){
            max = ele;
        }
    });
    return max;

}

console.log(findMax(num));