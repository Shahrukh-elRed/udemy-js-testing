const { printTitle } = require("./async-mock-util");

const button = document.getElementById("get-post-title");

button.addEventListener("click", printTitle);

exports.printTitle = printTitle;
