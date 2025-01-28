const now = new Date();
const clockSection = document.getElementById("clock");
clockSection?.insertAdjacentHTML(
  "beforeend",
  `
  <p><b>Today</b></p>
  <p>${now}</p>
  <p><b>Date</b></p>
  <p>
  ${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}
  </p>
  <p><b>Time</b></p>
  ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}
  `
);