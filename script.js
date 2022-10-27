var modal = document.querySelector('#myModal');
var howToBut = document.querySelector('#howTo');
var close = document.querySelector('.close');

let boardContainer = document.querySelector('.board');
let cardContainer = document.querySelector('.cards');
let cards = document.querySelectorAll('.cards_single');
let moves = document.querySelector('.moves');
let timer = document.querySelector('.timer');
let start = document.querySelector('.start');
let win = document.querySelector('.win');
// let flippedCards = document.querySelectorAll('.flip');
let totalFlips = 0;
let lastClicked = null;
let lockboard = false;

const initial = {
    gameStarted: false,
    flippedCards: 0,
    totalFlips: 0,
    totalTime: 0,
    loop: null
}

// modal 

howToBut.onclick = function() {
    modal.style.display = 'block'
}

close.onclick = function() {
    modal.style.display = 'none'
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none'
    }
}

// Flip up cards to show on load/start button 







// card match logic

cards.forEach((card, index) => card.addEventListener('click', function(event) {
    let flippedCards = document.querySelectorAll('.flip')
    let img = document.querySelectorAll('.card_flip')
    
    if (this.classList.contains('flip') === true) {
        // console.log('already flipped')
        return;
    } else if (this.classList.contains('flip') === false) {
        this.classList.toggle('flip')
        if (15 > flippedCards.length > 0) {
            if (flippedCards.length % 2 !== 0 ) {
                if (lastClickedImg === img[index].getAttribute('src')) {
                    console.log('match!')
                    // this.classList.toggle('flip')
                    this.classList.add('matched')
                    lastClicked.classList.add('matched')
                } else if (lastClickedImg !== img[index].getAttribute('src')) {
                    console.log('not a match')
                    this.classList.toggle('flip')
                    lastClicked.classList.toggle('flip')
                    // this.classList.toggle('flip')
                }
            } else if (flippedCards.length %2 === 0) {
                // this.classList.toggle('flip')
                console.log('flip one more to check')
            }
        } else if (flippedCards.length <= 0) {
            // this.classList.toggle('flip')
            console.log('first card flip')
        } else if (flippedCards.length >= 15) {
            // this.classList.toggle('flip')
            alert('Game Over: You Win!')
        }
        lastClicked = this
        lastClickedImg = img[index].getAttribute('src')
        totalFlips++
        document.querySelector('.matches').innerHTML = flippedCards.length + ' cards matched!'
        document.querySelector('.moves').innerHTML = totalFlips + ' moves made'
    }
}));























