const rollDice = () => {
  let randomNumber1 =  Math.floor(Math.random() * 6) + 1;
  let randomNumber2 =  Math.floor(Math.random() * 6) + 1;

  document.querySelector(".img1").setAttribute("src", "images/dice"+randomNumber1+".png");
  document.querySelector(".img2").setAttribute("src", "images/dice"+randomNumber2+".png");

  winner(randomNumber1, randomNumber2);
}

const winner = (player1, player2) => {
  if (player1 > player2) {
    document.querySelector("h1").innerHTML ="PLAYER 1 WINS!";
  } else if (player1 < player2) {
    document.querySelector("h1").innerHTML ="PLAYER 2 WINS!";
  } else {
    document.querySelector("h1").innerHTML ="IT'S A TIE!";
  }
}

rollDice();