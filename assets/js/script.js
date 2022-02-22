var body = document.body;
var start = document.querySelector(".start-button");
var timerEl = document.getElementById("timer");
var timeLeft = 50;
var questionNum = 0;
var score = 0;

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
    question: "sample text2",
    answers: {
      a: "answer2 1",
      b: "answer2 2",
      c: "answer2 3",
      d: "answer2 4",
    },
    correctAnswer: "d",
  },
  {
    question: "sample text3",
    answers: {
      a: "answer3 1",
      b: "answer3 2",
      c: "answer3 3",
      d: "answer3 4",
    },
    correctAnswer: "d",
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
  newQuestion();
  countdown();
};

var newQuestion = function () {
  var initialPage = document.querySelector("main");
  initialPage.remove();
  var main = document.createElement("main");
  body.appendChild(main);
  var question = document.createElement("h1");
  var answer1 = document.createElement("button");
  var answer2 = document.createElement("button");
  var answer3 = document.createElement("button");
  var answer4 = document.createElement("button");

  question.id = "question";
  answer1.className = "answer-button";
  answer2.className = "answer-button";
  answer3.className = "answer-button";
  answer4.className = "answer-button";
  answer1.id = "a";
  answer2.id = "b";
  answer3.id = "c";
  answer4.id = "d";

  question.innerHTML = questionArray[questionNum].question;
  answer1.innerHTML = questionArray[questionNum].answers.a;
  answer2.innerHTML = questionArray[questionNum].answers.b;
  answer3.innerHTML = questionArray[questionNum].answers.c;
  answer4.innerHTML = questionArray[questionNum].answers.d;

  main.appendChild(question);
  main.appendChild(answer1);
  main.appendChild(answer2);
  main.appendChild(answer3);
  main.appendChild(answer4);
};

var answerQuestion = function () {
  if (
    event.target.id === questionArray[questionNum].correctAnswer &&
    event.target.className === "answer-button"
  ) {
    score++;
    console.log("correct");
    questionNum++;
    score++;
  } else if (
    event.target.id != questionArray[questionNum].correctAnswer &&
    event.target.className === "answer-button"
  ) {
    timeLeft = timeLeft - 5;
    console.log("incorrect");
    questionNum++;
  }
  newQuestion();
  console.log(questionNum);
};

var countdown = function () {
  console.log("timing");

  var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timerEl.textContent = timeLeft + " seconds remaining";
      timeLeft--;
    } else if (timeLeft === 1) {
      timerEl.textContent = timeLeft + " second remaining";
      timeLeft--;
    } else {
      timerEl.textContent = "";
      clearInterval(timeInterval);
    }
  }, 1000);
};

start.addEventListener("click", startFunction);
body.addEventListener("click", answerQuestion);
// When I click the start button, it removes the current body and replaces it with a question and 4 options
