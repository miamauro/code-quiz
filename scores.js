//FIX - not displaying how I'd like.

var showScores = JSON.parse(localStorage.getItem("highScores"));
var scoreDisplay = document.getElementById("score-display");
scoreDisplay.textContent = showScores;
