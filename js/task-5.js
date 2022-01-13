let mainStr;
mainStr = prompt("Введите 16 значный номер карты");
if (mainStr.length == 16) {
  (vis = mainStr.slice(-4)), (countNum = "");

  for (let i = mainStr.length - 4; i > 0; i--) {
    countNum += "*";
  }

  alert("Номер вашей карты:" + countNum + vis);
} else {
  alert("Введите номер карты ПРАВИЛЬНО!!!!");
}
