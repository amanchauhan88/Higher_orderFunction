var str = "lol"

function reverseString(str) {
     var newstr =str.split("").reverse().join("");
     return str === newstr ? true : false;
    
     
    }


console.log(reverseString(str));