const bg = document.querySelector('.menu')

bg.addEventListener('click', anima)

function anima(event) {
    bg.classList.toggle('animation')
}
