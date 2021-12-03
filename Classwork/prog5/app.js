const pic = document.querySelector('#pic')

pic.addEventListener('mouseenter',() => {
    pic.classList.add('enlarge')
})

pic.addEventListener('mouseleave',() => {
    pic.classList.remove('enlarge')
})