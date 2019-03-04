


var computerChoices = ("a b c d e f g h i j k l f o p q r s t u v w x y z").split(" ");

var totalFailures = 0;
var wins = 1;

function gameRun(){
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    
    var guessesLeft = 10;
    var wrongs = 0;
    var guesses = [];    

    document.onkeyup= function(event){
        var userGuess = event.key;
        if (wrongs < 10) {
    
            if (userGuess === computerGuess){
                document.getElementById("triumphs-num").innerHTML = wins++;
                
                alert("YOU WOOON!");
                gameRun();
            }
            else {
                wrongs++;
                if (guesses.indexOf(userGuess) === -1 || (guesses.length < 1)){
                    guessesLeft--;
                    guesses.push(userGuess);

                    document.getElementById("guesses-left").innerHTML =  guessesLeft;
                    document.getElementById("letters-guessed").innerHTML = guesses;
                }
            }
        }
        else {
            totalFailures++;
            document.getElementById("failures-num").innerHTML = totalFailures;            
            gameRun();
        }
    }
}

gameRun();


