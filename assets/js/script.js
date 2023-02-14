//Declare variables
var viewScores = document.getElementById("view-scores");
var startButton = document.getElementById("start-button");
var timer = document.getElementById("timer");
var startPage = document.getElementById("start-page");
var quizPage = document.getElementById("quiz-page");
var endPage = document.getElementById("end-page");
var scoresPage = document.getElementById("scores-page");
var questionContainer = document.getElementById("question-container");
var opt0 = document.getElementById("opt0");
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");
var qResult = document.getElementById("question-result");
var score = 0;
var countdown = 60;
var gameLevel = 0;
var questions = [
  {
    title: "Which is the correct HTML element to indicate a line break?",
    options: ["<lb>", "<br>", "<n>", "<break>"],
    answer: "<br>",
  },
  {
    title: "Which character pair indicates an array in JavaScript?",
    options: ["()", "<>", "--", "[]"],
    answer: "[]",
  },
  {
    title: "Which CSS property is used to change the text color of an element?",
    options: ["color", "text", "text-color", "font"],
    answer: "color",
  },
  {
    title: "Which character is used to indicate an HTML end tag?",
    options: ["<", "*", "/", "]"],
    answer: "/",
  },
  {
    title: "Test",
    options: [
      "call.functionName()",
      "functionName()",
      "call.functionName:",
      "functionNameIs",
    ],
    answer: "functionName()",
  },
];

//Show main page with button to start quiz
//when start button is clicked, timer will begin countdown from 60 seconds
//if timer = 0, end quiz function, display "Time's up!", display score, display form to input and store initials with score
//Store initials and corresponding score in Scores to view at any point

//When start button is clicked, hide start page, display q0 with q0 answer options in buttons
//on hover, button background color will change
//on click, text will show result below answer options
//on click, if answer is correct, will update and store score
//on click, if answer is incorrect, -10 seconds from timer
//iterate through 5 questions with same function?
//after iteration, display "Finished!", display score, display form to input and store initials with score
//Store initials and corresponding score in Scores to view at any point

//Add event listener
startButton.addEventListener("click", startQuiz);

//Declare startQuizFunction
function startQuiz() {
  startPage.classList.add("hide");
  quizPage.classList.remove("hide");
  displayQuestion();
}

function displayQuestion() {
  questionContainer.textContent = questions[gameLevel].title;
  for (let i = 0; i < questions[gameLevel].options.length; i++) {
    if (i === 0) {
      opt0.textContent = questions[gameLevel].options[i];
    } else if (i === 1) {
      opt1.textContent = questions[gameLevel].options[i];
    } else if (i === 2) {
      opt2.textContent = questions[gameLevel].options[i];
    } else if (i === 3) {
      opt3.textContent = questions[gameLevel].options[i];
    }
  }
}
