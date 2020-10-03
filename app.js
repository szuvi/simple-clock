const secArm = document.querySelector("#seconds");
const minArm = document.querySelector("#minutes");
const hourArm = document.querySelector("#hours");

function setTime() {
  let date = new Date();

  secArm.style.transform = `rotate(${(date.getSeconds() * 360) / 60 + 90}deg)`;

  minArm.style.transform = `rotate(${(date.getMinutes() * 360) / 60 + 90}deg)`;

  let hours = date.getHours();
  let hoursTwelve = ((hours * 60) % 720) / 60; // convert to 12h format
  hourArm.style.transform = `rotate(${(hoursTwelve * 360) / 12 + 90}deg)`;
}

setInterval(setTime, 1000);
