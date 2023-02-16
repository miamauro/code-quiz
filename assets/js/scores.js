//Display scores from local storage on Scores page
//use JSON.parse() to convert frorm string form to Javascript object
var showScores = JSON.parse(localStorage.getItem("highScores"));
var scoreDisplay = document.getElementById("score-display");
scoreDisplay.textContent = showScores;
