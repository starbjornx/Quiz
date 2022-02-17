// starting the Game by clicking a button
let startbtn = $("#start-button");

// answers stored from Questions
let firstQuestion = $("#question1");
let secondQuestion = $("#question2");
let thirdQuestion = $("#question3");
let fourthQuestion = $("#question4");
// vars to keep track of score and also to progress the game.
let correct1 = $("#correct1");
let correct2 = $("#correct2");
let correct3 = $("#correct3");
let correct4 = $("#correct4");
// Timer function, start - deduct -10 seconds if wrong questions - final time saved.
let wrongAnswer = $(".wrong");

//testing - wanted to make a data array of multiple ID's?

// needs to display a countdown timer of 60 seconds
// if wrong answer is selected , deduct -10 seconds.
let cdTimer = $("#timer");

let highScores = $("#high-score");
function showHighScore() {
  highScores = [];
}

//click button needs to store correct or wrong answer and then display the next question.
startbtn.on("click", function () {
  firstQuestion.show();
  setTime();
});

let secondsLeft = 60;
function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function () {
    secondsLeft--; //decrement by 1 our secondsLeft (found as a global veriable var = secondsLeft = 10;)
    cdTimer.text(secondsLeft);
    if (secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
    }
  }, 1000); //1000ms = 1sec
}

correct1.on("click", function () {
  secondQuestion.show();
  //need to add else statement even if answer is wrong.
  //deduct points from timer if wrong.
});
correct2.on("click", function () {
  thirdQuestion.show();
  //need to add else statement even if answer is wrong.
  //deduct points from timer if wrong.
});
correct3.on("click", function () {
  fourthQuestion.show();
  //need to add else statement even if answer is wrong.
  //deduct points from timer if wrong.
});
correct4.on("click", function () {
  //capture final score.
  //grab player proflile such as initials
  //render ?
});

firstQuestion.on("click", function () {
  secondQuestion.show();
  if (!correct1) {
  }
});
secondQuestion.on("click", function () {
  thirdQuestion.show();
});
thirdQuestion.on("click", function () {
  fourthQuestion.show();
  //need to add else statement even if answer is wrong.
  //deduct points from timer if wrong.
  //capture final score.
  //grab player proflile such as initials
  //render ?
});
fourthQuestion.on("click", function () {
  localStorage.setItem(secondsLeft);
});
wrongAnswer.on("click", function () {
  secondsLeft -= 5;
});
