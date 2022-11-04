let colors = ["green", "red", "yellow", "blue"];
var correctSequence = [];
var userSequence = [];
var isNewGame = true;
var level = 0;

function nextSequence() {
  var randomIndex = Math.floor(Math.random() * 4);
  var randomColor = colors[randomIndex];

  userSequence = [];
  $("h1").text("Level " + level);
  level++;

  correctSequence.push(randomColor);

  $("#" + randomColor)
    .fadeOut()
    .fadeIn(50);
  playSound(randomColor);
}

function checkAnswer() {
  var i = userSequence.length - 1;

  if (userSequence[i] != correctSequence[i]) {
    gameOver();
  } else if (userSequence.length == correctSequence.length) {
    isNewGame = true;
    setTimeout(nextSequence, 500);
  }
}

function gameOver() {
  playSound("wrong");

  $("body").addClass("game-over");
  setTimeout(function () {
    $("body").removeClass("game-over");
  }, 200);

  $("h1").text("Game Over :) Press Any Key to Restart");
  level = 0;
  correctSequence = [];
  userSequence = [];
  isNewGame = true;
}

$(".btn").on("click", function () {
  var userClickedColor = $(this).attr("id");

  userSequence.push(userClickedColor);

  playSound(userClickedColor);
  animateClick(userClickedColor);

  checkAnswer();
});

function playSound(soundName) {
  var audio = new Audio("sounds/" + soundName + ".mp3");
  audio.play();
}

function animateClick(color) {
  $("#" + color).addClass("pressed");

  setTimeout(function () {
    $("#" + color).removeClass("pressed");
  }, 100);
}

$(document).on("keydown", function () {
  if ( isNewGame ) {
    nextSequence();
    isNewGame = false;
  }
});
