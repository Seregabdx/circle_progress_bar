"use strict";
let param = {
  diameter: "100", //размер блока с прогресс баром
  color: "#34C759", //цвет прогресс бара
  thickness: "4", //ширина прогресс бара
  className: "progressBar", //название контейнера, в который будет вставлен прогресс бар
};

let progressBar = new ProgressBar(param);

let animSwitch = false; //значение свича для анимации
let disSwitch = false; //значение свича для скрытия прогресс бара
let value = 0; //значение по умолчанию для начала анимации

let input = document.querySelector(".inputPercent");
input.oninput = (e) => {
  //при вводе значений в input элемент вызывается метод из класса ProgressBar, который устанавливает введенное значение
  if (e.target.value > 100) {
    //ограничение на ввод (при вводе значения больше 100, устанавливается 100)
    e.target.value = 100;
  }
  if (e.target.value < 0) {
    //ограничение на ввод (при вводе значения меньше 0, устанавливается 0)
    e.target.value = 0;
  }
  progressBar.changeValue(e.target.value); //вызов метода для установки значения
};

let animateSwitch = document.querySelectorAll(".switch-container-switch")[0]; //получение DOM элемента с первым свичом
animateSwitch.onchange = () => {
  //отвечает за анимацию
  animSwitch = !animSwitch;
  if (animSwitch) {
    let interval = setInterval(() => {
      //каждые 0.1с изменяет значение на 1
      if (!animSwitch) {
        clearInterval(interval); //при переключении свича интервал сбрасывается
      }
      input.value = value; //устанавливает в input значение
      value += 1;
      if (value == 101) {
        //заново запускает прогресс бар, когда он доходит до 100
        value = 0;
      }
      progressBar.changeValue(value); //вызов метода для изменения значения
    }, 100);
  }
};

let disableSwitch = document.querySelectorAll(".switch-container-switch")[1];
let progressRing = document.querySelector(".progress");
disableSwitch.onchange = () => {
  //служит для скрытия прогресс бара
  disSwitch = !disSwitch;
  if (disSwitch) {
    progressRing.style.visibility = "hidden"; //установка стиля для скрытия
  } else {
    progressRing.style.visibility = "visible"; //установка стиля для отображения
  }
};
