var now = new Date();
var clockSection = document.getElementById("clock");
clockSection === null || clockSection === void 0 ? void 0 : clockSection.insertAdjacentHTML("beforeend", "\n  <p><b>Today</b></p>\n  <p>".concat(now, "</p>\n  <p><b>Date</b></p>\n  <p>\n  ").concat(now.getFullYear(), "-").concat(now.getMonth() + 1, "-").concat(now.getDate(), "\n  </p>\n  <p><b>Time</b></p>\n  ").concat(now.getHours(), ":").concat(now.getMinutes(), ":").concat(now.getSeconds(), "\n  "));
