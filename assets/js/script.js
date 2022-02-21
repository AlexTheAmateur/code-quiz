var body = document.body;
var start = document.querySelector(".start-button");
var question = document.createElement("h1");
var answer = document.createElement("button");

var startFunction = function () {
  console.log("this works!");
};

start.addEventListener("click", startFunction);
