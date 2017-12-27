document.write("<br>");
document.write("----switch statement----");
document.write("<br>");

//////////////////////////
// switch statement
 var job = 'teacher';

 switch (job) {
     case 'teacher':
         document.write('John is a teacher.');
         break;
     case 'driver':
        document.write('John drives a cab is Lisbon.');
        break;
     case 'cop':
        document.write('John shoots people because he is a cop.');
        break;
     default:
        document.write('John has a shitty job somewhere nobody cares about.');

}

document.write("<br>");
document.write("Let's play a game.");
document.write("<br>");
/// coding challenge 1
var heightPlayer1 = 177;
var agePlayer1 = 24;
var heightPlayer2 = 177;
var agePlayer2 = 24;
var heightPlayer3 = 180;
var agePlayer3 = 24;

var scorePlayer1 = heightPlayer1 + 5 * agePlayer1;
var scorePlayer2 = heightPlayer2 + 5 * agePlayer2;
var scorePlayer3 = heightPlayer3 + 5 * agePlayer3;

if(scorePlayer1 > scorePlayer2 && scorePlayer1 > scorePlayer3){
    document.write("Player 1 wins the game.");
}
else if(scorePlayer2 > scorePlayer1 && scorePlayer2 > scorePlayer3){
    document.write("Player 2 wins the game.");
}else if(scorePlayer3 > scorePlayer1 && scorePlayer3 > scorePlayer2){
    document.write("Player 3 wins the game.");
}else if(scorePlayer1 === scorePlayer2 || scorePlayer1 === scorePlayer3){
    if(scorePlayer1 === scorePlayer2 && scorePlayer1 === scorePlayer3){
        document.write("It's a tie among all three with a score of " + scorePlayer1);
    }else if(scorePlayer1 === scorePlayer2){
        document.write("It's a tie between Player 1 and Player 2 with a score of " + scorePlayer1);
    }else if(scorePlayer1 === scorePlayer3){
        document.write("It's a tie between Player 1 and Player 3 with a score of " + scorePlayer1);
    }
}
