var startButton = document.getElementById("start-button");
var nextButton = document.getElementById("next-button");
var currentQuestion = {};
var score = 0;
var questionCount = 0;
// var number = document.getElementById("message");

// creating start button that will bring up the next button
startButton.addEventListener("click", startGame);
    // document.getElementById("next-button");


function startGame() {
    nextQuestion()
};

function nextQuestion() {
}

var question = [
    {
        question1: "What is my name?",
        choiceA: "Ron",
        choiceB: "Callan",
        choiceC: "Todd",
        choiceD: "Keal",
        correctAnswer: 2,
    },
    {
        question2: "What is my name?",
        choiceA: "Ron",
        choiceB: "Callan",
        choiceC: "Todd",
        choiceD: "Keal",
        correctAnswer: 2,
    },
    {
        question3: "What is my name?",
        choiceA: "Ron",
        choiceB: "Callan",
        choiceC: "Todd",
        choiceD: "Keal",
        correctAnswer: 2,
    },
    {
        question4: "What is my name?",
        choiceA: "Ron",
        choiceB: "Callan",
        choiceC: "Todd",
        choiceD: "Keal",
        correctAnswer: 2,
    },
    {
        question5: "What is my name?",
        choiceA: "Ron",
        choiceB: "Callan",
        choiceC: "Todd",
        choiceD: "Keal",
        correctAnswer: 2,
    },
]

