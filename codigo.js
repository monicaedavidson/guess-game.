var answer = "puerto rico";
var answer2 = "cuba";
var answer3 = "asia";

var Repeat = function(){
var guess = prompt("Where do you think i'm from?").toLowerCase();
if (guess === answer) {
  alert('You got that right!!!');
} else if (guess === answer2){
  alert("I am not cuban, but our flag is very similar to their flag, Please try again!!!.");
Repeat();
} else if (guess === answer3){
  alert("They call me chino but im not Asian. Try again!!!.");
Repeat();
} else{
  alert("Not from there,Try again!!!");
Repeat();
}
};

var startGame = getElementById('click_me');
startGame.addEventListener('click', Repeat, false);
