//Declare variables
var scoresLink = document.getElementById("scores-link");
var startButton = document.getElementById("start-button");
var saveButton = document.getElementById("save-button");
var returnButton = document.getElementById("returnToStart");
var timerContainer = document.getElementById("timer");
var startPage = document.getElementById("start-page");
var quizPage = document.getElementById("quiz-page");
var endPage = document.getElementById("end-page");
var questionContainer = document.getElementById("question-container");
var opt0 = document.getElementById("opt0");
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");
var qResult = document.getElementById("question-result");
var score = 0;
var countdown = 60;
var gameLevel = 0;
var finalScore = document.getElementById("final-score");
var highScores = [];

//create an array of objects to store quiz questions
var questions = [
  {
    title: "How can you declare a variable in JavaScript?",
    options: ["variable x", "var x", "define x", "variable(x)"],
    answer: "var x",
  },
  {
    title: "Which character pair indicates an array in JavaScript?",
    options: ["()", "<>", "--", "[]"],
    answer: "[]",
  },
  {
    title: "Inside which HTML tag do you link your JavaScript code?",
    options: ["<script>", "<javascript>", "<code>", "<js>"],
    answer: "<script>",
  },
  {
    title:
      "Which is the correct way to begin a single line comment in JavaScript?",
    options: ["<!--", "**", "//", "<"],
    answer: "//",
  },
  {
    title: "Which is the correct way to call a function in JavaScript?",
    options: [
      "call.functionName()",
      "functionName()",
      "call.functionName:",
      "functionNameIs",
    ],
    answer: "functionName()",
  },
];

//PSEUDO CODE:
//Show main page with button to start quiz
//when start button is clicked, timer will begin countdown from 60 seconds
//if timer = 0, end quiz function, display score, display form to input and store initials with score
//Store initials and corresponding score in Scores to view at any point

//When start button is clicked, hide start page, display q0 with q0 answer options in buttons
//on hover, button background color will change
//on click, text will show result below answer options
//on click, if answer is correct, will increase and store score
//on click, if answer is incorrect, -5 seconds from timer
//iterate through 5 questions with same function
//after iteration, display score, display form to input and store initials with score
//Store initials and corresponding score in Scores to view at any point

//Add event listener
startButton.addEventListener("click", startQuiz);

//Declare startQuizFunction
//Use .hide to show/hide pages as needed
function startQuiz() {
  startPage.classList.add("hide");
  quizPage.classList.remove("hide");
  timerCountdown();
  displayQuestion();
}

function timerCountdown() {
  var timerInterval = setInterval(function () {
    countdown--;
    timerContainer.textContent = countdown;
    if (countdown <= 0) {
      clearInterval(timerInterval);
      endGame();
    }
    if (gameLevel >= questions.length) {
      clearInterval(timerInterval);
    }
  }, 1000);
}

//iterate through answer options to display in respective buttons
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

function checkAnswer(event) {
  console.log(event.target);
  if (event.target.textContent === questions[gameLevel].answer) {
    score++;
    qResult.textContent = "Keep it up! You got the last question correct!";
  } else {
    countdown -= 5;
    qResult.textContent =
      "You got the last question wrong. You've got it this time.";
  }
  //iterate through questions
  gameLevel++;
  if (gameLevel >= questions.length) {
    endGame();
  } else {
    displayQuestion();
  }
}

saveButton.addEventListener("click", saveScore);

function endGame() {
  quizPage.classList.add("hide");
  endPage.classList.remove("hide");
  finalScore.textContent = score;
}

//Save score and initials to local storage
function saveScore(event) {
  event.preventDefault();
  var initials = document.querySelector("#initials-input").value;
  if (initials == "") {
    alert("You must enter your initials to save your score.");
    return;
  }
  var savedScore = initials + ": " + score;

  var savedScore1 = {
    initials: initials,
    score: score,
  };

  console.log(savedScore);
  highScores.push(savedScore1);
  localStorage.setItem("highScores", JSON.stringify(highScores));
  // reset input box to empty for next user
  document.querySelector("#initials-input").value = "";
}

returnButton.addEventListener("click", returnToStart);

//reassign variables to necessary starting values (see global variables)
function returnToStart() {
  endPage.classList.add("hide");
  startPage.classList.remove("hide");
  gameLevel = 0;
  score = 0;
  timerContainer.textContent = "60";
  countdown = 60;
  qResult.textContent = "";
}
