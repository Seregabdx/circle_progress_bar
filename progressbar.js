"use strict";
const ProgressBar = (function () {
  class ProgressBar {
    constructor(className) {
      this.className = className;
      let progressBarContainer = document.querySelector(`.${className}`);
      let progressBar = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "svg"
      );

      progressBar.setAttribute("class", "progress");
      progressBar.setAttribute("height", "120px");
      progressBar.setAttribute("width", "120px");
      progressBar.innerHTML = `<circle class="progressRing" stroke="blue" stroke-width="4" cx="60" cy="60" r="52" fill="transparent" />`;
      progressBarContainer.appendChild(progressBar);
      this.progressRing = progressBarContainer.querySelector(".progressRing");
      this.progressRing.style.width = "30px";
      this.progressRing.style.height = "30px";
      this.longCircle = this.progressRing.r.baseVal.value * 2 * Math.PI;
      this.progressRing.setAttribute(
        "stroke-dasharray",
        `${this.longCircle} ${this.longCircle}`
      );
      this.progressRing.strokeDashoffset = this.longCircle;
      this.progressRing.setAttribute("transform", "rotate(-90)");
      this.progressRing.setAttribute("transform-origin", "center");
    }

    changeValue(value) {
      let offset = this.longCircle - (value / 100) * this.longCircle;
      this.progressRing.style.strokeDashoffset = offset;
    }
  }

  return ProgressBar;
})();
