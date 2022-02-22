var body = document.body;
var start = document.querySelector(".start-button");
var scoreBoard = document.getElementById("scoreBoard");
var timerEl = document.getElementById("timer");
var timeLeft = 50;
var questionNum = 0;
var score = 0;
var scores = [];

const questionArray = [
  {
    question: "An HTML document can contain ___",
    answers: {
      a: "Attributes",
      b: "Tags",
      c: "Raw text",
      d: "All of the above",
    },
    correctAnswer: "d",
  },
  {
    question: "a page designed in HTML is called",
    answers: {
      a: "Application",
      b: "Cover page",
      c: "Front-end",
      d: "Web Page",
    },
    correctAnswer: "d",
  },
  {
    question: "The HTML document contains a root tag called ___",
    answers: {
      a: "HEAD",
      b: "Title",
      c: "Body",
      d: "HTML",
    },
    correctAnswer: "d",
  },
  {
    question:
      "If we want to place text around an image, which CSS property should we use?",
    answers: {
      a: "push",
      b: "float",
      c: "align",
      d: "wrap",
    },
    correctAnswer: "b",
  },
  {
    question: "Choose the correct HTML tag for a large title",
    answers: {
      a: "H1",
      b: "Heading",
      c: "Head",
      d: "H6",
    },
    correctAnswer: "a",
  },
  {
    question: "In HTML, Uniform Resource Locator (URL) is used ___",
    answers: {
      a: "To create a frame document",
      b: "To create an image map in a web page",
      c: "To customize the image in a webpage",
      d: "To identify a name or a resuorce on the internet",
    },
    correctAnswer: "d",
  },
  {
    question: "CSS is an acronym for ___",
    answers: {
      a: "Cascading Style Sheet",
      b: "Custom Style Sheet",
      c: "Cascading System Style",
      d: "None of the above",
    },
    correctAnswer: "a",
  },
  {
    question:
      "What attribute can be added to many HTML/XHTML elements to identify them as a member of a specific group?",
    answers: {
      a: "Id",
      b: "Class",
      c: "Div",
      d: "Span",
    },
    correctAnswer: "b",
  },
  {
    question: "Which organization defines Web standards?",
    answers: {
      a: "Apple Inc.",
      b: "IBM Corperation",
      c: "World Wide Web Consortium",
      d: "Microsoft Corperation",
    },
    correctAnswer: "c",
  },
  {
    question: "HTML is considered as a ___",
    answers: {
      a: "Programming language",
      b: "OOP language",
      c: "Markup language",
      d: "High level language",
    },
    correctAnswer: "c",
  },
  {
    question: "HTML was first proposed in ___",
    answers: {
      a: "1980",
      b: "1990",
      c: "1995",
      d: "2000",
    },
    correctAnswer: "b",
  },
  {
    question: "Which of the following is not a browser?",
    answers: {
      a: "Mozilla Firefox",
      b: "Netscape",
      c: "Microsoft Bing",
      d: "Opera",
    },
    correctAnswer: "c",
  },
  {
    question: "Who is the main author of the HTML?",
    answers: {
      a: "Brendan Eich",
      b: "Tim Berners-Lee",
      c: "Web developer",
      d: "Google Inc",
    },
    correctAnswer: "b",
  },
  {
    question:
      "If we want to set the style for just one element, which css selector will we use?",
    answers: {
      a: "id",
      b: "text",
      c: "class",
      d: "name",
    },
    correctAnswer: "a",
  },
  //   {
  //     question: "Which tag is used to list items with bullets?",
  //     answers: {
  //       a: "<bullet>",
  //       b: "<list>",
  //       c: "<ul>",
  //       d: "<ol>",
  //     },
  //     correctAnswer: "c",
  //   },
  //   {
  //     question: "How would you define a background image for a web page?",
  //     answers: {
  //       a: "<body background = 'test.jpg'>",
  //       b: "<body background image = 'test.jpg'>",
  //       c: "<background = 'test.jpg'>",
  //       d: "<background image = 'test.jpg'>",
  //     },
  //     correctAnswer: "a",
  //   },
  {
    question: "The first page of a website is typically called a ___",
    answers: {
      a: "Design page",
      b: "Home page",
      c: "Front page",
      d: "Main page",
    },
    correctAnswer: "b",
  },
  {
    question: "which is the correct syntax for the following CSS code?",
    answers: {
      a: "Body:color=black",
      b: "{body;color:black}",
      c: "{body:color=black(body)}",
      d: "Body{color:black}",
    },
    correctAnswer: "d",
  },
  //   {
  //     question: "What is the alternative to the <b> tag to make the text bold?",
  //     answers: {
  //       a: "<bold>",
  //       b: "<strong>",
  //       c: "<i>",
  //       d: "<emp>",
  //     },
  //     correctAnswer: "b",
  //   },
  {
    question: "What does HTML stand for?",
    answers: {
      a: "HyperText Markup Language",
      b: "Hyper Teach Markup Language",
      c: "Hyper Tech Markup Language",
      d: "None of the above",
    },
    correctAnswer: "a",
  },
];

var startFunction = function () {
  questionNum = 0;
  score = 0;
  timeLeft = 50;
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
  if (questionNum >= 17) {
    submitScores();
    return;
  }
  if (event.target.className === "answer-button") {
    newQuestion();
  }
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
      submitScores();
    }
  }, 1000);
};

var highscores = function () {
  var initialPage = document.querySelector("main");
  initialPage.remove();
  var main = document.createElement("main");
  body.appendChild(main);
  var startButton = document.createElement("button");
  startButton.className = "start-button";
  startButton.innerHTML = "Start Quiz";
  main.appendChild(startButton);

  var savedScores = localStorage.getItem("user");
  savedScores = JSON.parse(savedScores);
  for (var i = 0; i < savedScores.length; i++) {
    var scorer = document.createElement("div");
    scorer.innerHTML = savedScores[i].name + ": " + savedScores[i].score;
    main.appendChild(scorer);
  }

  startButton.addEventListener("click", startFunction);
};

var submitScores = function () {
  var initialPage = document.querySelector("main");
  initialPage.remove();
  var main = document.createElement("main");
  body.appendChild(main);
  var done = document.createElement("h1");
  var thisScore = document.createElement("h2");
  var inputName = document.createElement("input");
  var submit = document.createElement("button");

  inputName.type = "text";
  inputName.name = "name";
  inputName.id = "name";
  submit.id = "submit";
  submit.innerHTML = "submit";
  done.innerHTML = "Finished!";
  thisScore.innerHTML =
    "Your score is " +
    score +
    " add a name below to be entered into the highscores!";

  main.appendChild(done);
  main.appendChild(thisScore);
  main.appendChild(inputName);
  main.appendChild(submit);
  submit.addEventListener("click", saveToStorage);
};

var saveToStorage = function () {
  var nameInput = document.querySelector("#name");
  var user = {
    name: nameInput.value.trim(),
    score: score,
  };
  scores = JSON.parse(localStorage.getItem("user"));
  scores.push(user);
  localStorage.setItem("user", JSON.stringify(scores));

  highscores();
};

var answerBoolean = function () {
  if (event.target.className === "answer-button") {
    answerQuestion();
  } else {
    return;
  }
};
scoreBoard.addEventListener("click", highscores);
start.addEventListener("click", startFunction);
body.addEventListener("click", answerBoolean);
