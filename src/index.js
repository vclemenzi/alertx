/**
 *
 * @param {String} text - Title of alert or main text
 * @param {String} description (optional) - If description exists, use description style
 */

const css = require("./css");

function alertx(text, description) {
  // Check for text
  if (!text) {
    throw new Error("Missing text");
  }

  // Create components
  const alert = document.createElement("div");
  alert.classList.add("alertx_temp");
  Object.assign(alert.style, css.alert);

  const contentAlert = document.createElement("div");

  // Add title
  const titleAlert = document.createElement("h1");
  titleAlert.innerText = text;
  Object.assign(titleAlert.style, !description ? css.description : css.title); // If description exists, use description style
  contentAlert.appendChild(titleAlert);

  // Add description if exists
  if (description) {
    const descriptionAlert = document.createElement("p");
    descriptionAlert.innerText = description;
    Object.assign(descriptionAlert.style, css.description);
    contentAlert.appendChild(descriptionAlert);
  }

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

  // Exit alert with ESC key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      document.body.removeChild(alert);
    }
  });
}

module.exports = alertx;