let history = JSON.parse(localStorage.getItem("history")) || [];
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");
let btn0 = document.getElementById("btn0");
let btndot = document.getElementById("btndot");
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let multiply = document.getElementById("multiply");
let divide = document.getElementById("divide");
let Clear = document.getElementById("clear");
let enter = document.getElementById("enter");
let inpt = document.getElementById("input");
let backspace = document.getElementById("backspace");

btn1.onclick = function () {
  inpt.value += "1";
};

btn2.onclick = function () {
  inpt.value += "2";
};

btn3.onclick = function () {
  inpt.value += "3";
};

btn4.onclick = function () {
  inpt.value += "4";
};

btn5.onclick = function () {
  inpt.value += "5";
};

btn6.onclick = function () {
  inpt.value += "6";
};

btn7.onclick = function () {
  inpt.value += "7";
};

btn8.onclick = function () {
  inpt.value += "8";
};

btn9.onclick = function () {
  inpt.value += "9";
};

btn0.onclick = function () {
  inpt.value += "0";
};

btndot.onclick = function () {
  inpt.value += ".";
};
plus.onclick = function () {
  if (
    inpt.value.endsWith("+") ||
    inpt.value.endsWith("-") ||
    inpt.value.endsWith("*") ||
    inpt.value.endsWith("/")
  ) {
    return;
  }
  inpt.value += "+";
};
minus.onclick = function () {
  if (
    inpt.value.endsWith("+") ||
    inpt.value.endsWith("-") ||
    inpt.value.endsWith("*") ||
    inpt.value.endsWith("/")
  ) {
    return;
  }
  inpt.value += "-";
};

multiply.onclick = function () {
  if (
    inpt.value.endsWith("+") ||
    inpt.value.endsWith("-") ||
    inpt.value.endsWith("*") ||
    inpt.value.endsWith("/")
  ) {
    return;
  }
  inpt.value += "*";
};

divide.onclick = function () {
  if (
    inpt.value.endsWith("+") ||
    inpt.value.endsWith("-") ||
    inpt.value.endsWith("*") ||
    inpt.value.endsWith("/")
  ) {
    return;
  }
  inpt.value += "/";
};

Clear.onclick = function () {
  inpt.value = "";
};

backspace.onclick = function () {
  inpt.value = inpt.value.slice(0, -1);
};

enter.onclick = function () {
  try {
    let result = eval(inpt.value);
    inpt.value = result;

    history.push(input.value + " = " + result);
    localStorage.setItem("history", JSON.stringify(history));
  } catch {
    inpt.value = "Error !";
  }
};
