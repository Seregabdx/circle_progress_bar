"use strict";

let progressBar = new ProgressBar("progressBar");
let animSwitch = false;
let disSwitch = false;
let value = 0;

let input = document.querySelector(".inputPercent");
input.oninput = (e) => {
  if (e.target.value > 100) {
    e.target.value = 100;
  }

  value = e.target.value;
  //console.log(value);
  progressBar.changeValue(e.target.value);
};

let animateSwitch = document.querySelectorAll(".switch-container-switch")[0];
animateSwitch.onchange = () => {
  animSwitch = !animSwitch;
  if (animSwitch) {
    let interval = setInterval(() => {
      if (!animSwitch) {
        clearInterval(interval);
      }

      value += 1;
      if (value == 101) {
        value = 0;
      }
      progressBar.changeValue(value);
    }, 100);
  }
};

let disableSwitch = document.querySelectorAll(".switch-container-switch")[1];
let progressRing = document.querySelector(".progress");
disableSwitch.onchange = () => {
  disSwitch = !disSwitch;
  if (disSwitch) {
    progressRing.style.visibility = "hidden";
  } else {
    progressRing.style.visibility = "visible";
  }
};
