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

var box = document.querySelector('#box-1')

box.addEventListener('click', flip)

function flip() {
    box.classList.toggle('flipCard')
};


