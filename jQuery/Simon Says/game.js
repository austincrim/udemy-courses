// Global Variables
let buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userPattern = [];
let level;

// Main Flow
initialize();

// Functions

function initialize() {
  $("#level-title").text("Press A Key to Start");
  level = 1;

  $(document).on("keydown", function(e) {
    if (e.key === "a") {
      getNextSequence();
      $(document).off("keydown");
      $("#level-title").text("Level " + level);
      startGame();
    }
  });
}

function getNextSequence() {
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColor = buttonColors[randomNumber];

  gamePattern.push(randomChosenColor);

  $("#" + randomChosenColor).fadeIn(500).fadeOut(500).fadeIn(500);

  makeSound(randomChosenColor);
}

function makeSound(element) {
  let sound = new Audio("sounds/" + element + ".mp3");

  sound.play();
}

function startGame() {
  $(".btn").on("click", function() {
    let buttonClicked = $(this).attr("id");
    makeSound(buttonClicked);
    animateClick(buttonClicked);
    userPattern.push(buttonClicked);

    if (userPattern.length === gamePattern.length) {
      checkSequence();
    }
  });
}

function checkSequence() {
  if (arraysEqual(userPattern, gamePattern)) {
    nextRound();
  } else {
    $("#level-title").text("Game Over");
    setTimeout(initialize, 2000);
  }
}

function nextRound() {
  userPattern = [];
  $("#level-title").text("Level " + ++level);
  getNextSequence();
}

function arraysEqual(a, b) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
}

function animateClick(button) {
  $("#" + button).addClass("pressed");
  setTimeout(function() {
    $("#" + button).removeClass("pressed");
  }, 100);
}
