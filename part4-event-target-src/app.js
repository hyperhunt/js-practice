document.querySelector('h1').textContent = document.title

// Всплытие события и его остановка

// const btn = document.querySelector('.btn')
// const wrap = document.querySelector('.wrap')

// btn.addEventListener('click', e => {
//     // e.stopPropagation() // Остановка всплытия события у кнопки
//     console.log('click btn');
// })

// wrap.addEventListener('click', e => {
//     // e.stopPropagation() // Остановка всплытия
//     console.log('click wrap');
// })

// document.body.addEventListener('click', e => {
//     console.log('click body');
// })


// // Погружение

// wrap.addEventListener('click', e => {
//     // e.stopPropagation() // Остановка всплытия
//     console.log('click wrap');
// }, { capture: true })

// document.body.addEventListener('click', e => {
//     console.log('click body');
// }, { capture: true })

// ===============================================

var html = document.documentElement
var body = document.body
var div = document.querySelectorAll('div')
console.log(div);

var pause = 500

// Capture
div[0].addEventListener('click', callback, true)
div[1].addEventListener('click', callback, true)
div[2].addEventListener('click', callback, true)
div[3].addEventListener('click', callback, true)
div[4].addEventListener('click', callback, true)

// Buble
div[0].addEventListener('click', callback, false)
div[1].addEventListener('click', callback, false)
div[2].addEventListener('click', callback, false)
div[3].addEventListener('click', callback, false)
div[4].addEventListener('click', callback, false)

function callback(event) {
    // console.log(event.target.tagName);
    var ms = (event.timeout = event.timeout + pause || 0)
    var target = event.currentTarget
    // console.log(target);
    console.dir('### ' + event.currentTarget.style);

    var saveBgColor = target.style.backgroundColor

    setTimeout(function() {        
        target.style.removeProperty('background-color')
        target.classList.add('eventLayer')
        setTimeout(function() {            
            target.style.setProperty('background-color', saveBgColor)
            target.classList.remove('eventLayer')
        }, pause)
    }, ms)
}