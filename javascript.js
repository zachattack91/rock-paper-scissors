// Function creation to get rock paper or scissors
function getComputerChoice() {
// Create number random number variable
    const num = Math.floor(Math.random() * 31);
//      If number variable is less than or equal to 10 then return rock
        if (num <= 10) {
            return "Rock";
        }            
//      If number variable is greater than 10 but less than or equal to 20 then return paper
        else if (num > 10,  num <= 20) {
            return "Paper";
        }
//      If number variable is greater than 20 but less than or equal to 30 then return scissors
        else {
            return "Scissors";
        }
        // Print the return variable
    console.log("num");
}

// Prompt for user to enter their value
function getHumanChoice() {
    const n = prompt("Rock, Paper or Scissors?");
    return n;
// If value is "rock", return "rock" as the value
// If value is "paper", return "paper" as the value
// If value is "scissors", return "scissors" as the value
// If value is none of these, return null
// Print the value
}