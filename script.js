// let rock = document.querySelector("#rock");
// let paper = document.querySelector("#paper");
// let scissors = document.querySelector("#scissors");
let selectedChoice;
let userScore = document.querySelector("#user-score");
let compScore = document.querySelector("#comp-score");
let circle = document.querySelectorAll(".circle");
let compChoice;
let choices = document.querySelectorAll(".choices");
let userWinMsg = document.querySelector(".userwin");



circle.forEach((val) => {
  val.addEventListener("click", () => {
    if (val.childNodes[0].innerHTML == "rock") {
      selectedChoice = val.childNodes[0].innerHTML;
    }
    if (val.childNodes[0].innerHTML == "paper") {
      selectedChoice = val.childNodes[0].innerHTML;
    }
    if (val.childNodes[0].innerHTML == "scissors") {
      selectedChoice = val.childNodes[0].innerHTML;
    }

    win(selectedChoice);
  });
});
function win(selectedChoice) {
  let t = Math.floor(Math.random() * 3);
  console.log(t);
  let compChoice = circle[t].id;

  console.log(`user-choice : ${selectedChoice}  comp-choice:${compChoice}`);
  if (selectedChoice == "rock" && compChoice == "scissors") {
    userScore.innerHTML = Number(userScore.innerHTML) + 1;
    console.log(`userscore : ${userScore.innerHTML}`);
    userWinMsg.innerText = `Congratulations! You Win Computer Choosed ${compChoice}`;
  } else if (selectedChoice == "rock" && compChoice == "paper") {
    compScore.innerHTML = Number(compScore.innerHTML) + 1;
    console.log(`compscore : ${compScore.innerHTML}`);
    userWinMsg.innerText = `You Lose Computer Choosed ${compChoice}`;
  } else if (selectedChoice == "paper" && compChoice == "rock") {
    userScore.innerHTML = Number(userScore.innerHTML) + 1;
    console.log(`userscore : ${userScore.innerHTML}`);
    userWinMsg.innerText = `Congratulations! You Win Computer Choosed ${compChoice}`;
  } else if (selectedChoice == "paper" && compChoice == "scissors") {
    compScore.innerHTML = Number(compScore.innerHTML) + 1;
    console.log(`compscore : ${compScore.innerHTML}`);
    userWinMsg.innerText = `You Lose Computer Choosed ${compChoice}`;
  } else if (selectedChoice == "scissors" && compChoice == "paper") {
    userScore.innerHTML = Number(userScore.innerHTML) + 1;
    console.log(`userscore : ${userScore.innerHTML}`);
    userWinMsg.innerText = `Congratulations! You Win Computer Choosed ${compChoice}`;
  } else if (selectedChoice == "scissors" && compChoice == "rock") {
    compScore.innerHTML = Number(compScore.innerHTML) + 1;
    console.log(`compscore : ${compScore.innerHTML}`);
    userWinMsg.innerText = `You Lose Computer Choosed ${compChoice}`;
  }
}
