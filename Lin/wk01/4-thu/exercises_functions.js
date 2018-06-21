function combineWords(word1, word2) {
  return word1 + word2;
}
var result = combineWords('dog', 'house');
console.log(result);

//2
function calculateAge(birthYear, currentYear) {
  age1 = birthYear - currentYear;
  age2 = currentYear - birthYear;
  return "You are either " + age1 + " or " + age2;
}

console.log(calculateAge(2018, 1980));
console.log(calculateAge(1978, 2000));
console.log(calculateAge(2000, 2000));

//3
function lengths(arrStrings) {
  var strLength = [];
  for (var i = 0; i < arrStrings.length; i++) {
    strLength.push(arrStrings[i].length);
  }
  return strLength;
}
console.log(lengths(["abc", "fdsfdsf", "sdfdsf"]));

//4
function transmogrifier(size1, size2, size3) {
  var power = size1 * size2;
  return Math.pow(size3, power);
}
console.log(transmogrifier(1, 2, 3));

//5
function wordReverse(word){
  return word.split(" ").reverse().join(" ");
}
console.log(wordReverse("we are good friends"));