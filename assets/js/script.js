var body = document.body;
var start = document.querySelector(".start-button");
var question = document.createElement("h1");
var answer = document.createElement("button");

const questionArray = [
  {
    question: "sample text",
    answers: {
      a: "answer 1",
      b: "answer 2",
      c: "answer 3",
      d: "answer 4",
    },
    correctAnswer: "c",
  },
  {
    question: "sample text",
    answers: {
      a: "answer 1",
      b: "answer 2",
      c: "answer 3",
      d: "answer 4",
    },
    correctAnswer: "c",
  },
  {
    question: "sample text",
    answers: {
      a: "answer 1",
      b: "answer 2",
      c: "answer 3",
      d: "answer 4",
    },
    correctAnswer: "c",
  },
  {
    question: "sample text",
    answers: {
      a: "answer 1",
      b: "answer 2",
      c: "answer 3",
      d: "answer 4",
    },
    correctAnswer: "c",
  },
  {
    question: "sample text",
    answers: {
      a: "answer 1",
      b: "answer 2",
      c: "answer 3",
      d: "answer 4",
    },
    correctAnswer: "c",
  },
  {
    question: "sample text",
    answers: {
      a: "answer 1",
      b: "answer 2",
      c: "answer 3",
      d: "answer 4",
    },
    correctAnswer: "c",
  },
  {
    question: "sample text",
    answers: {
      a: "answer 1",
      b: "answer 2",
      c: "answer 3",
      d: "answer 4",
    },
    correctAnswer: "c",
  },
  {
    question: "sample text",
    answers: {
      a: "answer 1",
      b: "answer 2",
      c: "answer 3",
      d: "answer 4",
    },
    correctAnswer: "c",
  },
  {
    question: "sample text",
    answers: {
      a: "answer 1",
      b: "answer 2",
      c: "answer 3",
      d: "answer 4",
    },
    correctAnswer: "c",
  },
  {
    question: "sample text",
    answers: {
      a: "answer 1",
      b: "answer 2",
      c: "answer 3",
      d: "answer 4",
    },
    correctAnswer: "c",
  },
  {
    question: "sample text",
    answers: {
      a: "answer 1",
      b: "answer 2",
      c: "answer 3",
      d: "answer 4",
    },
    correctAnswer: "c",
  },
  {
    question: "sample text",
    answers: {
      a: "answer 1",
      b: "answer 2",
      c: "answer 3",
      d: "answer 4",
    },
    correctAnswer: "c",
  },
  {
    question: "sample text",
    answers: {
      a: "answer 1",
      b: "answer 2",
      c: "answer 3",
      d: "answer 4",
    },
    correctAnswer: "c",
  },
  {
    question: "sample text",
    answers: {
      a: "answer 1",
      b: "answer 2",
      c: "answer 3",
      d: "answer 4",
    },
    correctAnswer: "c",
  },
  {
    question: "sample text",
    answers: {
      a: "answer 1",
      b: "answer 2",
      c: "answer 3",
      d: "answer 4",
    },
    correctAnswer: "c",
  },
  {
    question: "sample text",
    answers: {
      a: "answer 1",
      b: "answer 2",
      c: "answer 3",
      d: "answer 4",
    },
    correctAnswer: "c",
  },
  {
    question: "sample text",
    answers: {
      a: "answer 1",
      b: "answer 2",
      c: "answer 3",
      d: "answer 4",
    },
    correctAnswer: "c",
  },
  {
    question: "sample text",
    answers: {
      a: "answer 1",
      b: "answer 2",
      c: "answer 3",
      d: "answer 4",
    },
    correctAnswer: "c",
  },
  {
    question: "sample text",
    answers: {
      a: "answer 1",
      b: "answer 2",
      c: "answer 3",
      d: "answer 4",
    },
    correctAnswer: "c",
  },
  {
    question: "sample text",
    answers: {
      a: "answer 1",
      b: "answer 2",
      c: "answer 3",
      d: "answer 4",
    },
    correctAnswer: "c",
  },
];

var startFunction = function () {
  console.log("this works!");
  var initialPage = document.querySelector("main");
  initialPage.remove();
};

var newQuestion = function () {};

var answerQuestion = function () {};

start.addEventListener("click", startFunction);

// When I click the start button, it removes the current body and replaces it with a question and 4 options
