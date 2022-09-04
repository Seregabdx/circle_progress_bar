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
      progressBar.innerHTML = `<circle class="progressRing" stroke="white" stroke-width="4" cx="60" cy="60" r="52" fill="transparent" />`;
      progressBarContainer.appendChild(progressBar);
      let circle = progressBarContainer.querySelector(".progressRing");
      circle.style.strokeDashArray = "500 20";
    }
  }

  return ProgressBar;
})();
