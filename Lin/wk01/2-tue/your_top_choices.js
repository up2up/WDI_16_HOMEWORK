var choices = ["blue", "green", "yellow"];
var sufix = ["st", "nd", "rd", "th"];

for (i = 0; i < choices.length; i++) {
  var postion;
  switch (i) {
    case 1:
      console.log("My 1st choice " + choices[i]);
      break;
    case 2:
      console.log("My 2nd choice " + choices[i]);
      break;
    default:
      console.log("My 3rd choice " + choices[i]);
  }
}


