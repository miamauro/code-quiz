//Display scores from local storage on Scores page
//use JSON.parse() to convert frorm string form to Javascript object
var showScores = JSON.parse(localStorage.getItem("highScores"));

for (var i = 0; i < showScores.length; i++) {
  var scoreDisplay = document.getElementById("score-display");
  var liEl = document.createElement("li");
  liEl.textContent = showScores[i].initials + " :" + showScores[i].score;
  scoreDisplay.appendChild(liEl);
}
