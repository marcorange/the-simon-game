var userSequence = [];
var correctSequence = [];
var i;
var isNewGame = true;
let colors = ["green", "red", "yellow", "blue"];

if ( isNewGame === true ) { 
    $(document).on("keydown", initNewGame);
}

function randomIndex() {
  var index = Math.floor(Math.random() * 4);
  return index;
}

function initNewGame() {
  userSequence = [];
  correctSequence = [];
  createSequence();
}

function createSequence() {
  i = randomIndex();
  correctSequence.push(colors[i]);
  animateSequence(colors[i]);
}

function animateSequence(color) {
    $("#" + color).fadeOut();
    setTimeout($("#" + color).fadeIn(), 50);
}

$(".btn").on("click", function () {
  userSequence.push($(this).attr("id"));
  console.log(userSequence);
});
