// Function creation to get rock paper or scissors
function getComputerChoice() {
// Create number random number variable
    const num = Math.floor(Math.random() * 31);
//      If number variable is less than or equal to 10 then return rock
        if (num <= 10) {
            console.log("ROCK");
        }            
//      If number variable is greater than 10 but less than or equal to 20 then return paper
        else if (num > 10,  num <= 20) {
            console.log("PAPER");
        }
//      If number variable is greater than 20 but less than or equal to 30 then return scissors
        else {
            console.log("SCISSORS");
        }
        // Print the return variable
}
