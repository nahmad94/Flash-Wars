var modal = document.querySelector('#myModal')
var howToBut = document.querySelector('#howTo')
var close = document.querySelector('.close')


let boardContainer = document.querySelector('.board')
let cardContainer = document.querySelector('.cards')
let cards = document.querySelectorAll('.cards_single');
let moves = document.querySelector('.moves')
let timer = document.querySelector('.timer')
let start = document.querySelector('.start')
let win = document.querySelector('.win')
let flippedCards = 0
let totalFlips = 0

const initial = {
    gameStarted: false,
    flippedCards: 0,
    totalFlips: 0,
    totalTime: 0,
    loop: null
}

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














cards.forEach((card) => card.addEventListener('click', function() {
    console.log(this)
    if (this.classList.contains('flip') === true) {
        console.log('already flipped')
        
    } else if (this.classList.contains('flip') === false) {
        this.classList.toggle('flip')
        flippedCards++
    }
}));





function flip(event) {
    if (this.classList('flip') === true) {
        console.log('already flipped')
    } else if (this.classList('flip') === false) {
        this.classList.toggle('flip')
        flippedCards++
    }



    // this.classList.toggle('flip')
    flippedCards++
    totalFlips++
    
    // const eventTarget = event.target
    // const eventParent = eventTarget.parentElement
    // console.log(eventParent)

    // if (eventTarget.className.includes('card') && !eventParent.className.includes('flip')) {
    //     flipCard(eventParent)
    // } else {
    //     console.log('error')
    // }
};

start.addEventListener('click', initial)










// document.body.onload = startGame();

// function startGame() {
//     for (let i = cards.children.length; i >= 0; i--) {
//         cards.appendChild(cards.children[Math.random() * i | 0])
//     }
// }










