(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.alertx = factory());
})(this, (function () { 'use strict';

  var css = {
    alert: {
      position: "fixed",
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      zIndex: 9999
    },
    content: {
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      zIndex: 9999,
      backgroundColor: "#fff",
      padding: "2rem",
      borderRadius: "0.5rem",
      textAlign: "center",
      maxWidth: "70%",
      wordWrap: "break-word"
    },
    title: {
      fontSize: "2.5rem",
      mariginBottom: "0.5rem"
    },
    description: {
      fontSize: "1.5rem"
    },
    exit: {
      width: "100%",
      backgroundColor: "#7cd1f9",
      padding: "0.3rem",
      borderRadius: "0.5rem",
      border: "none",
      cursor: "pointer",
      fontSize: "1rem"
    },
    exitHover: {
      backgroundColor: "#7cd1f9",
      color: "#fff"
    }
  };

  /**
   *
   * @param {String} text
   */

  function alertx(text, description) {
    // Create components
    var alert = document.createElement("div");
    alert.classList.add("alertx_temp");
    Object.assign(alert.style, css.alert);
    var contentAlert = document.createElement("div");

    // Add title
    var titleAlert = document.createElement("h1");
    titleAlert.innerText = text;
    Object.assign(titleAlert.style, !description ? css.description : css.title); // If description exists, use description style
    contentAlert.appendChild(titleAlert);

    // Add description if exists
    if (description) {
      var descriptionAlert = document.createElement("p");
      descriptionAlert.innerText = description;
      Object.assign(descriptionAlert.style, css.description);
      contentAlert.appendChild(descriptionAlert);
    }
    Object.assign(contentAlert.style, css.content);
    var exitButton = document.createElement("button");
    exitButton.innerText = "OK";
    Object.assign(exitButton.style, css.exit);
    contentAlert.appendChild(exitButton);
    alert.appendChild(contentAlert);
    document.body.appendChild(alert);

    // Exit alert
    exitButton.addEventListener("click", function () {
      document.body.removeChild(alert);
    });

    // Exit alert with ESC key
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        document.body.removeChild(alert);
      }
    });
  }
  var src = alertx;

  return src;

}));
