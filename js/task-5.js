let mainStr;
mainStr = prompt("Введите номер карты");
if (mainStr.length > 15) {
  (vis = mainStr.slice(-4)), (countNum = "");

  for (let i = mainStr.length - 4; i > 0; i--) {
    countNum += "*";
  }

  alert(countNum + vis);
} else {
  alert("Введите номер карты ПРАВИЛЬНО!!!!");
}
