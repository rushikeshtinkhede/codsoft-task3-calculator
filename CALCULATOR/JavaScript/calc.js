window.addEventListener("DOMContentLoaded", () => {
  let isLight = false;

  const toggleBtn = document.getElementById("toggleTheme");
  const calculator = document.querySelector(".calculator");

  toggleBtn.addEventListener("click", () => {
    if (!isLight) {
      calculator.style.background = "#e3f9ff";
    } else {
      calculator.style.background = "rgb(1 28 58 / 62%)";
    }
    isLight = !isLight;
  });

  let inputBox = document.getElementById("inputBox");
  let btns = document.querySelectorAll("button");
  let btnArray = Array.from(btns);
  let str = "";

  btnArray.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      if (e.target.innerHTML == "DEL") {
        str = str.substring(0, str.length - 1);
        inputBox.value = str;
      } else if (e.target.innerHTML == "AC") {
        str = "";
        inputBox.value = str;
      } else if (e.target.innerHTML == "=") {
        str = eval(str);
        inputBox.value = str;
      } else {
        str += e.target.innerHTML;
        inputBox.value = str;
      }
    });
  });
});
