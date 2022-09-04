"use strict";
//для модульности этого элемента была использована IIFE функция
const ProgressBar = (function () {
  class ProgressBar {
    constructor(param) {
      //конструктор для инициализации прогресс бага
      this.className = param["className"];
      let progressBarContainer = document.querySelector(
        `.${param["className"]}`
      );
      let progressBar = document.createElementNS(
        //создание svg
        "http://www.w3.org/2000/svg",
        "svg"
      );

      progressBar.setAttribute("class", "progress"); //добавление имени класса svg
      progressBar.setAttribute("height", param["diameter"]); //добавление размера svg
      progressBar.setAttribute("width", param["diameter"]); //добавление размера svg
      progressBar.innerHTML = `<circle class="progressRing" stroke="${
        //создание круга внутри svg (этот круг является самим кольцом, прогресс баар)
        param["color"] //установка цвета
      }" stroke-width="${param["thickness"]}" cx="${
        //установка ширины кольца
        param["diameter"] / 2 //установка размера
      }" cy="${param["diameter"] / 2}" r="${
        //установка размера
        param["diameter"] / 2 - param["thickness"] * 2 //установка толщины
      }" fill="transparent" />`;
      progressBarContainer.appendChild(progressBar); //добавление svg в нужный div
      this.progressRing = progressBarContainer.querySelector(".progressRing");
      this.longCircle = this.progressRing.r.baseVal.value * 2 * Math.PI; //вычисление длинны окружности
      this.progressRing.setAttribute(
        "stroke-dasharray",
        `${this.longCircle} ${this.longCircle}`
      ); //т.к, грубо говоря, окружность состоит из точек, необходимо задать их количество
      this.progressRing.strokeDashoffset = this.longCircle;
      this.progressRing.setAttribute("transform", "rotate(-90)"); //поворот на 90 градусов, чтобы прогресс бар начинался с 12 часов
      this.progressRing.setAttribute("transform-origin", "center"); //задает точку, относительно которой происходит вращение
    }

    changeValue(value) {
      //метод для изменения значения
      let offset = this.longCircle - (value / 100) * this.longCircle; //формула для вычисления той длинны дуги, которая будет отображаться
      this.progressRing.style.strokeDashoffset = offset; //установка вычисленного ранее значения
    }
  }

  return ProgressBar;
})();
