let mode = document.getElementById('mode-change');
let circle = document.getElementById('circle');

let modeLight = document.getElementById('mode-light');
let circleLight = document.getElementById('circle-light');

let main = document.querySelector('main')
let bgColorChanger = document.querySelector('.bg-dark')
let box = document.querySelectorAll('.box')
let headerOne = document.querySelectorAll('h1')
let cards = document.querySelectorAll('.card')
let headerTwo = document.getElementById('header-two')
let h2 = document.querySelectorAll('h2')
modeLight.classList.add('hidden')

mode.addEventListener("click",() => {
    mode.classList.add('hidden')
    modeLight.classList.remove('hidden')
    document.body.style.background = '#fff';
    document.body.style.color = '#000';
    bgColorChanger.style.background ='#f5f7ff'
    bgColorChanger.style.opacity = '1'
    box.forEach((b) => {
        b.style.background = '#f0f2fa'
       b.addEventListener('mouseenter',() => {
        b.style.background = '#dce0ec'
       })
       b.addEventListener('mouseleave',() => {
        b.style.background = '#f0f2fa'
       })
    

    })
    headerOne.forEach((h1) => {
        h1.style.color = '#000'
    })
    cards.forEach((card) => {
        card.style.background = '#f5f7ff'
        card.addEventListener('mouseenter',() => {
            card.style.background = '#dce0ec'
           })
           card.addEventListener('mouseleave',() => {
            card.style.background = '#f0f2fa'
           })
    })
    headerTwo.style.color = '#aeb3cb'
    h2.forEach((h) => {
        h.style.color = '#000'
    })



})
modeLight.addEventListener("click",() => {
    modeLight.classList.add('hidden')
    mode.classList.remove('hidden')
    document.body.style.background = '#1e202a';
    bgColorChanger.style.background ='#252a41'
    box.forEach((b) => {
        b.style.background = '#252a41'
        b.addEventListener('mouseenter',() => {
            b.style.background = '#343b56'
           })
           b.addEventListener('mouseleave',() => {
            b.style.background = '#252a41'
           })

    })
    headerOne.forEach((h1) => {
        h1.style.color = '#FFF'
    })
    cards.forEach((card) => {
        card.style.background = '#252a41'
        card.addEventListener('mouseenter',() => {
            card.style.background = '#343b56'
           })
           card.addEventListener('mouseleave',() => {
            card.style.background = '#252a41'
           })
    })
    headerTwo.style.color = '#fff'
    h2.forEach((h) => {
        h.style.color = '#fff'
    })

})



