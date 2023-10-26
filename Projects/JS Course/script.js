// variable
const playerOneDice = document.getElementById("playerOne");
const playerTwoDice = document.getElementById("playerTwo");
const buttonOne = document.getElementById("buttonOne");
const buttonTwo = document.getElementById("buttonTwo");
const one = document.getElementById("one");
let number;
let counterOne = 0;
let counterOneL = 0;
let counterTwo = 0;
let counterTwoL = 0;
// 
buttonTwo.disabled = true;

// function
function dice1() {
    number = Math.floor(Math.random() * 7);
    if (number === 0) {
        number = 1;
    }
    counterOne += number;
    if (counterOne >= 100) {
        swal("player aqua won game");
        location.reload();
    }
    if (counterOne === 10) {
        counterOne = 29;
        swal("player aqua using option 1 ");
    }
    if (counterOne === 12) {
        counterOne = 75;
        swal("player aqua using option 2");
    }
    if (counterOne === 35) {
        counterOne = 4; 
        swal("player aqua  using option 3")
    }
    if (counterOne === 37) {
        counterOne = 13;
        swal("player aqua  using option 4");
    }
    if (counterOne === 56) {
        counterOne = 25;
        swal("player aqua  using option 5");
    }
    if (counterOne === 84) {
        counterOne = 97;
        swal("player aqua using option 6");
    }
    if (counterOne === 99) {
        counterOne = 29;
        swal("player aqua  using option 7");
    }
    if (counterOneL != counterOne && counterOneL != 0) {
        document.getElementById(`${counterOneL}`).style.backgroundColor = "unset";
    } if (counterOne === counterTwo) {
        document.getElementById(`${counterOne}`).style.backgroundColor = "#8a2be2";
    } else {
        document.getElementById(`${counterOne}`).style.backgroundColor = "#00ffff";
    }
    playerOneDice.style.backgroundImage = `url('img/dice${number}.png')`;
    playerOneDice.style.backgroundColor = `unset`;
    buttonOne.disabled = true;
    buttonTwo.disabled = false;
    counterOneL = counterOne;
    console.log(counterOne + ' ' + counterTwo);
}
function dice2() {
    number = Math.floor(Math.random() * 7);
    if (number === 0) {
        number = 1;
    }
    if (counterTwo >= 100) {
        swal("player red won game");
        location.reload();
    }
    counterTwo += number;
    if (counterTwo === 10) {
        counterTwo = 29;
        swal("player orange using option 1");
    }
    if (counterTwo === 12) {
        counterTwo = 75;
        swal("player orange using option 2");
    }
    if (counterTwo === 35) {
        counterTwo = 4; 
        swal("player orange using option 3")
    }
    if (counterTwo === 37) {
        swal("player orange using option 4");
        counterTwo = 13;
    }
    if (counterTwo === 56) {
        counterTwo = 25;
        swal("player orange using option 5");
    }
    if (counterTwo === 84) {
        counterTwo = 97;
        swal("player orange using option 6");
    }
    if (counterTwo === 99) {
        counterTwo = 29;
        swal("player orange using option 7");
    }
    if (counterTwoL != counterTwo && counterTwoL != 0) {
        document.getElementById(`${counterTwoL}`).style.backgroundColor = "unset";
    }
    if (counterOne === counterTwo) {
        document.getElementById(`${counterOne}`).style.backgroundColor = "#8a2be2";
    } else {
        document.getElementById(`${counterTwo}`).style.backgroundColor = "#ff5500";
    }
    playerTwoDice.style.backgroundImage = `url('img/dice${number}.png')`;
    playerTwoDice.style.backgroundColor = `unset`;
    buttonOne.disabled = false;
    buttonTwo.disabled = true;
    counterTwoL = counterTwo;
    console.log(counterOne + ' ' + counterTwo);
}