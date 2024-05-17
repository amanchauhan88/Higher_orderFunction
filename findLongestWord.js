var arr = ["java", "python", "javascript", "scala"];

function lonngetWord(arr) {
  var longest = " ";

  var longest2 = arr.filter(function (ele) {
    if (longest.length < ele.length) {
      longest = ele;
    }
  });
  return longest;
}

console.log(lonngetWord(arr));
