
/*  Create a list Of card List */
const cardList = [
            "fa fa-anchor", "fa fa-bolt",
            "fa fa-bomb", "fa fa-bicycle",
            "fa fa-cube", "fa fa-diamond",
            "fa fa-leaf", "fa fa-paper-plane-o",
            "fa fa-anchor", "fa fa-bolt", 
            "fa fa-bomb", "fa fa-bicycle",
            "fa fa-cube", "fa fa-diamond", 
            "fa fa-leaf", "fa fa-paper-plane-o",
];


// Genral  Used
const cardsBoard = document.querySelector('#deck');
let checkCards = [];
let matchedCards = [];

function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

creatCardsBoard();

function creatCardsBoard() {
    cardsBoard.innerHTML = "";
    const myNewDeck = document.createElement('ul');
    myNewDeck.classList.add('deck');

    let shufIcons = shuffle(cardList);
    for (let i = 0; i < shufIcons.length; i++) {
        const newLi = document.createElement('li');
        newLi.classList.add('card');
        newLi.innerHTML = `<i class="${shufIcons[i]}"></i>`;
        myNewDeck.appendChild(newLi);
    }
    cardsBoard.append(myNewDeck);
 
    cardsBoard.addEventListener('click', respondToTheClick);
}

function respondToTheClick(e) {

    let selectedCard = e.target;
    if (selectedCard.classList.contains("card") && !selectedCard.classList.contains("open", "show", "match")) {

        if (timerOn === false) {
            startTimer();
            timerOn = true;
        }

        selectedCard.classList.add("open", "show");
        checkCards.push(selectedCard);
    }

    if (checkCards.length === 2) {
        cardsBoard.classList.add("stop-event");
      
        movesNum();
        if (checkCards[0].innerHTML === checkCards[1].innerHTML) {
            matched();
        } else {
            setTimeout(notMatched, 800);
        }
        win();
    }
}

function matched() {
    
    checkCards[0].classList.add("match");
    checkCards[1].classList.add("match");
  
    matchedCards.push(checkCards[0]);
    matchedCards.push(checkCards[1]);

    checkCards = [];

    cardsBoard.classList.remove("stop-event");
}
// if  cards are not matched 
function notMatched() {
    checkCards[0].classList.remove("open", "show");
    checkCards[1].classList.remove("open", "show");
  
    checkCards = [];
   
    cardsBoard.classList.remove("stop-event");
}


// Moves
let moves = 0;
const movesCounter = document.querySelector(".moves");

function movesNum() {
    moves++;
    if (moves === 1) {
        movesCounter.innerHTML = `1  Move`;
    } else {
        movesCounter.innerHTML = `${moves}  Moves`;
    }
    starsRating();
}


// Stars Rating
const stars = document.querySelector('.stars').childNodes;
const starsForRate = document.querySelector('.stars');

function starsRating() {
    if (moves === 12) {
        stars[5].classList.add('grey');
    
    } else if (moves === 20) {
        stars[3].classList.add('grey');
    }
}

// Time Game
let seconds = 0;
let minutes = 0;
let hours = 0;
const timer = document.querySelector(".timer");
const hourTimer = document.querySelector(".hour");
const minuteTimer = document.querySelector(".minute");
const secondsTimer = document.querySelector(".seconds");
let timeCounter;
let timerOn = false;

// Timer function 
 function fix(x, y) {

     if (x < 10) {
         return (y.innerHTML = ` 0${x}`);
     } else {
         return (y.innerHTML = ` ${x}`);
     }
 };


const restart = document.querySelector(".restart");
const modal = document.querySelector('.modal');
const timeModal = document.querySelector('.time-modal');
const ratingModal = document.querySelector('.rating-modal');
const movesModal = document.querySelector('.moves-modal');
const btnModal = document.querySelector('.btn-modal');

function startTimer() {
    // to start the timer to avoid delay
    if (seconds == 0) {
        seconds++;
    }

    timeCounter = setInterval(function ()  {
        hourTimer.innerHTML = `${hours}`;
        minuteTimer.innerHTML = ` ${minutes} `;
        secondsTimer.innerHTML = ` ${seconds} `;
        // fix each part of the timer
        fix(seconds, secondsTimer);
        fix(minutes, minuteTimer);
        fix(hours, hourTimer);

        seconds++;
        if (seconds == 60) {
            minutes++;
            seconds = 0;
        } else if (minutes == 60) {
            hours++;
            minutes = 0;
        }
    }, 1000);
}


//Restart Gam
function  restartGame(){
    timerOn = false;
    moves = 0;
    movesCounter.innerHTML = `0 Moves`;
    matchedCards = [];
    checkCards = [];
    creatCardsBoard();
   
    clearInterval(timeCounter);

    seconds = 0;
    minutes = 0;
    hours = 0;
    secondsTimer.innerText = "00";
    minuteTimer.innerText = " 00";
    hourTimer.innerText = "00";
  
    stars[5].classList.remove('grey');
    stars[3].classList.remove('grey');
};
// to restart  the game when the player click on the restart icon
restart.addEventListener("click", restartGame);

// Win Modal Function
 function win(){
    if (matchedCards.length === 16) {
    
        timeModal.innerText = timer.innerText;
        ratingModal.innerHTML = starsForRate.innerHTML;
        movesModal.innerHTML = movesCounter.innerHTML.slice(0, 3);
    
        clearInterval(timeCounter);
        modal.style.display = 'block';
    }
}; 

btnModal.addEventListener('click',  () => {
    modal.style.display = 'none';
    restartGame();
    timerOn = false;
})
