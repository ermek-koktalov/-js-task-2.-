let str = prompt("Введите номер карты");
if (str.length == 16) {
  let lastNumbers = str.slice(-4);
  let firstNumbers = str.slice(0, -4);
  let others = "*";
  let otherStartNumbers = others.repeat(firstNumbers.length);
  let result = otherStartNumbers + lastNumbers;

  alert("Номер вашей карты: " + result);
} else {
  alert("Введите номер правильно !е");
}
