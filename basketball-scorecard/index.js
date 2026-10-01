let homeOne = document.getElementById("home-one");
let homeTwo = document.getElementById("home-two");
let homeThree = document.getElementById("home-three");
let awayOne = document.getElementById("away-one");
let awayTwo = document.getElementById("away-two");
let awayThree = document.getElementById("away-three");
const homeScoreCard = document.getElementById("home-scorecard");
const awayScoreCard = document.getElementById("away-scorecard");

homeOne.addEventListener("click", function () {
  homeScoreCard.textContent = parseInt(homeScoreCard.textContent) + 1;
});

homeTwo.addEventListener("click", function () {
  homeScoreCard.textContent = parseInt(homeScoreCard.textContent) + 2;
});

homeThree.addEventListener("click", function () {
  homeScoreCard.textContent = parseInt(homeScoreCard.textContent) + 3;
});

awayOne.addEventListener("click", function () {
  awayScoreCard.textContent = parseInt(awayScoreCard.textContent) + 1;
});

awayTwo.addEventListener("click", function () {
  awayScoreCard.textContent = parseInt(awayScoreCard.textContent) + 2;
});

awayThree.addEventListener("click", function () {
  awayScoreCard.textContent = parseInt(awayScoreCard.textContent) + 3;
});
