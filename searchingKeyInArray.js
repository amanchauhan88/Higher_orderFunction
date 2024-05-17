var key = 10;
var arr = [3, 4, 5, 6, 2, 9, 6];

function searchKey(key, arr) {
  var newArr = arr.includes(key);
  return newArr;
}

console.log(searchKey(key, arr));
