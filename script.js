var modal = document.querySelector('#myModal')
var howToBut = document.querySelector('#howTo')
var close = document.querySelector('.close')

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

var cards = document.querySelectorAll('.cards_single');

function flip() {
    this.classList.toggle('flip')
    console.log('flipped')
};

cards.forEach((card) => card.addEventListener('click', flip));












