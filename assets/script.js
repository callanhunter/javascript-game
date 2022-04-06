var startButton = document.getElementById("start-button");
var nextButton = document.getElementById("next-button");
var choices = document.getElementsByClassName("choices");
var currentQuestion = {};
var score = 0;
var questionCount = 0;
var maxQuestions = 4;
var maxScore = 0;
var questionsLeft = 0;

startButton.addEventListener("click", startGame);

function startGame() {
    nextQuestion()
};

function nextQuestion() {
    score =0;
    questionCount = 0;
    questionsLeft = [...questions];
    anotherQuestion()
}

function anotherQuestion() {
    if (questionsLeft === 0) {
        localStorage.setItem("recentScore", score)
    }

    questionCount++;
    questions.innerText = currentQuestion.questions;
}

questions.forEach(choice) {
        if (correctAnswer === true) {
            console.log(Correct!!!)
            score++;
        }
}


var questions = [
    {
        question1: "Which is not a JavaScript Data type?",
        choiceA: "Number",
        choiceB: "String",
        choiceC: "Boolean",
        choiceD: "Float",
        correctAnswer: "Float",
    },
    {
        question2: "What is === operator?",
        choiceA: "assign a variable",
        choiceB: "strict equality",
        choiceC: "loose equality",
        choiceD: "Not equal to",
        correctAnswer: "strict equality",
    },
    {
        question3: "Which is not a type of Pop up boxes?",
        choiceA: "Alert",
        choiceB: "Inform",
        choiceC: "Confirm",
        choiceD: "Prompt",
        correctAnswer: "Inform",
    },
]

