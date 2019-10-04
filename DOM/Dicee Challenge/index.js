const PLAYER1 = "Player 1";
const PLAYER2 = "Player 2";
const TIE = "Nobody";
window.onload = rollDice();

function rollDice() {
    var dice1Path = getRandomDiePath();
    var dice2Path = getRandomDiePath();
    document.querySelector(".img1").setAttribute("src", dice1Path);
    document.querySelector(".img2").setAttribute("src", dice2Path);
    
    if (dice1Path > dice2Path) {
        updateHeading(PLAYER1);
    } else if (dice2Path > dice1Path) {
        updateHeading(PLAYER2);
    } else {
        updateHeading(TIE);
    }

}

function getRandomDiePath() {
    var num = Math.floor(Math.random() * 6) + 1;
    var diceText = "";

    switch(num) {
        case 1: 
            diceText = "images/dice1.png";
            break;
        case 2: 
            diceText = "images/dice2.png";
            break;
        case 3: 
            diceText = "images/dice3.png";
            break;
        case 4: 
            diceText = "images/dice4.png";
            break;
        case 5: 
            diceText = "images/dice5.png";
            break;
        case 6: 
            diceText = "images/dice6.png";
 
        }
    return diceText;
}

function updateHeading(winner) {
    document.querySelector(".heading").textContent = winner + " wins!";

}