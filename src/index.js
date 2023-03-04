/**
 *
 * @param {String} text
 */

const css = require("./css");

function alertx(text) {
  // Create components
  const alert = document.createElement("div");
  alert.classList.add("alertx_temp");
  Object.assign(alert.style, css.alert);

  const contentAlert = document.createElement("div");
  contentAlert.innerHTML += text;
  Object.assign(contentAlert.style, css.content);

  const exitButton = document.createElement("button");
  exitButton.innerText = "OK";
  Object.assign(exitButton.style, css.exit);

  contentAlert.appendChild(exitButton);
  alert.appendChild(contentAlert);
  document.body.appendChild(alert);

  // Exit alert
  exitButton.addEventListener("click", () => {
    document.body.removeChild(alert);
  });
}

module.exports = alertx;
