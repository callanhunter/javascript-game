var startButton = document.getElementById("start-button");
var nextButton = document.getElementById("next-button");
var choices = document.getElementsByClassName("choices");
var header = document.getElementById("instructions");
var questionContainter = document.getElementById("question-container");
var currentQuestion = {};
var highScores = document.getElementById("high-score");
var countDown = 60;
var timerEl = document.getElementById("timer");
var choiceA = document.getElementById("choice-a");
var choiceB = document.getElementById("choice-b");
var choiceC = document.getElementById("choice-c");
var choiceD = document.getElementById("choice-d");
var questionEl = document.getElementById("question");
var submitSection = document.getElementById("submit-section");
var submitButton = document.getElementById("submit");
var savedHighScores = JSON.parse(localStorage.getItem("scores")) || [];
var score = 0;

var newScore = 0;
var questionCount = 0;
var maxQuestions = 4;
var maxScore = 0;
var questionsLeft = 0;
var interval;

function scores() {
  var score = localStorage.getItem("scores");
  var initials = localStorage.getItem("initials");

  if (!scores || !initials) {
    return;
  }
  var li = document.createElement("li");
  li.textContent = initials + "    -    " + score;
  scores.appendChild(li);
}

scores();

function timer() {
  interval = setInterval(function () {
    if (countDown <= 0) {
      clearInterval(interval);
      timerEl.textContent = countDown;
    } else {
      countDown--;
      timerEl.textContent = countDown;
    }
  }, 1000);
}

startButton.addEventListener("click", startGame);

function startGame() {
  header.classList.add("hide");
  questionContainter.classList.remove("hide");
  startButton.classList.add("hide");
  highScores.classList.add("hide");
  timer();
  anotherQuestion();
}

function anotherQuestion() {
  if (questionCount === 3) {
    endGame();
    return;
  }
  choiceA.textContent = questions[questionCount].choiceA;
  choiceB.textContent = questions[questionCount].choiceB;
  choiceC.textContent = questions[questionCount].choiceC;
  choiceD.textContent = questions[questionCount].choiceD;
  questionEl.textContent = questions[questionCount].question;
}

function correctAnswer(e) {
  var answer = e.target.textContent;
  var correctAnswer = questions[questionCount].correctAnswer;
  if (answer === correctAnswer) {
    questionCount++;
    newScore++;
    anotherQuestion();
  } else {
    countDown = countDown - 10;
    questionCount++;
    anotherQuestion();
  }
}

questionContainter.addEventListener("click", correctAnswer);

function endGame() {
  clearInterval(interval);
  questionContainter.classList.add("hide");
  submitSection.classList.remove("hide");
}

submitButton.addEventListener("click", saveScore);

function saveScore(e) {
  var initials = document.getElementById("initials").value;
  var tempObj = {
    initials,
    countDown,
  };
  savedHighScores.push(tempObj);
  localStorage.setItem("scores", JSON.stringify(savedHighScores));
}

var questions = [
  {
    question: "Which is not a JavaScript Data type?",
    choiceA: "Number",
    choiceB: "String",
    choiceC: "Boolean",
    choiceD: "Float",
    correctAnswer: "Float",
  },
  {
    question: "What is === operator?",
    choiceA: "assign a variable",
    choiceB: "strict equality",
    choiceC: "loose equality",
    choiceD: "Not equal to",
    correctAnswer: "strict equality",
  },
  {
    question: "Which is not a type of Pop up boxes?",
    choiceA: "Alert",
    choiceB: "Inform",
    choiceC: "Confirm",
    choiceD: "Prompt",
    correctAnswer: "Inform",
  },
];

document.write("Your score is " + newScore);
