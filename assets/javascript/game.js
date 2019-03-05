


var computerChoices = ("abcdefghijklmnopqrstuvwxyz").split("");

var totalFailures = 0;
var wins = 1;

function gameRun(){
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    
    var guessesLeft = 10;
    var wrongs = 0;
    var guesses = [];    

    document.onkeyup= function(event){
        var userGuess = event.key;
        if (computerChoices.indexOf(userGuess) === -1){
            alert("Type a letter of the alphabet." +computerGuess);
        }
        else{

            if (wrongs < 10) {
        
                if (userGuess === computerGuess){
                    if (wins < 2){
                        alert("You have passed the Oracle's test!");
                        alert("Now take it again!");
                        alert("FoRreEeeEvEErerRr!!!");
                    }
                    else {
                        alert ("SUCCESS");
                    }
                    document.getElementById("title").innerHTML = "There's No End";
                    document.getElementById("subtitle").innerHTML = "~ to your examination ~";

                    document.getElementById("triumphs-num").innerHTML = wins++;
                    
                    
                    gameRun();
                }
                else {
                    
                    if (guesses.indexOf(userGuess) === -1 || (guesses.length < 1)){
                        wrongs++;
                        guessesLeft--;
                        guesses.push(userGuess);
                        

                        document.getElementById("guesses-left").innerHTML =  guessesLeft;
                        document.getElementById("letters-guessed").innerHTML = guesses;
                    }
                }
            }
            else {
                alert("You have failed the Oracle's test. Try again.");
                totalFailures++;
                document.getElementById("failures-num").innerHTML = totalFailures;            
                gameRun();
            }
        }
    }
}

gameRun();


