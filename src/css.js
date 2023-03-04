module.exports = {
  alert: {
    position: "fixed",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 9999,
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
    wordWrap: "break-word",
  },
  title: {
    fontSize: "2.5rem",
    mariginBottom: "0.5rem",
  },
  description: {
    fontSize: "1.5rem",
  },
  exit: {
    width: "100%",
    backgroundColor: "#7cd1f9",
    padding: "0.3rem",
    borderRadius: "0.5rem",
    border: "none",
    cursor: "pointer",
    fontSize: "1rem",
  },
  exitHover: {
    backgroundColor: "#7cd1f9",
    color: "#fff",
  },
};
