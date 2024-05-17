const string1 = "listen";
const string2 = "silent";

function areAnagrams(str1, str2) {
  function sortString(str) {
    return str.toLowerCase().split("").sort().join("");
  }

  return sortString(str1) === sortString(str2);
}

const result = areAnagrams(string1, string2);

console.log(result);
