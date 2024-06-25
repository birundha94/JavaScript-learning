let startgame=confirm("Enjoy the game,pick any one rock,paper,or scissiors");
if(startgame){
    //play
    let playerchoice=prompt("Please enter rock,paper,or scissors")
    if(playerchoice){
        let playerone=playerchoice.trim().toLowerCase();
        if(
            playerone=== "rock"||
            playerone=== "paper"||
            playerone=== "scissors"  )
            {
                let computerchoice=Math.floor(Math.random()*3+1);
                let computer= computerchoice===1 ? "rock"
                :computerchoice===2 ? "paper"
                : "scissors";
                let result=playerone===computer
                ? "Game Tie!..."
                :playerone==="rock" && computer==="paper"
                ? `playerone:${playerone}\ncomputer wins!..`
                :playerone==="paper" && computer==="scissors"
                ? `playerone:${playerone}\ncomputer wins!..`
                :playerone==="scissors" && computer==="rock"
                ? `playerone:${playerone}\ncomputer wins!..`
                :`playerone:${playerone}\ncomputer wins!..`;
                alert(result);
                let playAgain=confirm("play Again");
                playAgain ? location.reload() : alert("Great,Thank u playing...");
            }
            else{
                alert("You want play means enter anyone rock,paper,or scissors.");

            }
        }else{
                alert("Try next time,thank uuuu...");

            }
         } else{
                alert("thank u,maybe try next time..");
            }
    
