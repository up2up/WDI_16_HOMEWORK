var inputTxt = document.querySelector("input")
var btnStart = document.querySelector(".start");


const countTime = (second) => {
  second = second - 1;
  inputTxt.value = second;
  t = setTimeout(countTime, 1000, second);
  if (second === 0) {
    clearTimeout(t);
  }
}

btnStart.addEventListener("click",
  () => { countTime(Number(inputTxt.value)); });