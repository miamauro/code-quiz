//Declare variables
var viewScores = document.getElementById("view-scores");
var startButton = document.getElementById("start-button");
var timer = document.getElementById("timer");
var questionContainer = document.getElementById("question-container");
var opt0 = document.getElementById("opt0");
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");
var qResult = document.getElementById("question-result");
var score = 0;
var countdown = 60;

//Show main page with button to start quiz
//timer will begin countdown from 60 seconds
//if timer = 0, end quiz function, display "Time's up!", display score, display form to input and store initials with score
//Store initials and corresponding score in Scores to view at any point
//on click, display q1 with q1 answer options in buttons
//on hover, button background color will change
//on click, text will show result below answer options
//on click, if answer is correct, will update and store score
//on click, if answer is incorrect, -10 seconds from timer
//iterate through 5 questions with same function?
//after iteration, display "Finished!", display score, display form to input and store initials with score
//Store initials and corresponding score in Scores to view at any point

var questions = [
  {
    question: "Which is the correct HTML element to indicate a line break?",
    options: ["<lb>", "<br>", "<n>", "<break>"],
    answer: 1,
  },
  {
    question: "Which character pair indicates an array in JavaScript?",
    options: ["()", "<>", "--", "[]"],
    answer: 3,
  },
  {
    question:
      "Which CSS property is used to change the text color of an element?",
    options: ["color", "text", "text-color", "font"],
    answer: 0,
  },
  {
    question: "Which character is used to indicate an HTML end tag?",
    options: ["<", "*", "/", "]"],
    answer: 2,
  },
  {
    question: "Which is the correct way to call a function in JavaScript?",
    options: [
      "call.functionName()",
      "functionName()",
      "call.functionName:",
      "functionName=",
    ],
    answer: 1,
  },
];
