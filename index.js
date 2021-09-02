var p1=Math.floor(Math.random()*6)+1;
var p2=Math.floor(Math.random()*6)+1;
if(p1>p2)
document.querySelector("h1").innerHTML="Player 1 Wins!";
else if(p1<p2)
document.querySelector("h1").innerHTML="Player 2 Wins!";
else
document.querySelector("h1").innerHTML="Draw!";

function diceimg(n){
  switch(n){
    case 1:
    return "images/dice1.png";
    case 2:
  return "images/dice2.png";
    case 3:
  return "images/dice3.png";
    case 4:
  return "images/dice4.png";
    case 5:
  return "images/dice5.png";
    case 6:
    default:
  return "images/dice6.png";
  }
}
document.getElementsByClassName("img1")[0].src=diceimg(p1);
document.getElementsByClassName("img2")[0].src=diceimg(p2);
