document.body.querySelector('h1').textContent = document.title

const btn = document.querySelector('button')
// console.dir(btn)

// Спосбо onclick не используется, так как перезатирает
// btn.onclick = function() {
//     console.log('click')
// }

// btn.addEventListener('click', function() {
//     console.log('click text')
// })

// btn.addEventListener('presses', function() {
//     console.log('click text 2')
// })

// // console.dir(btn.addEventListener);

// btn.addEventListener('click', function(e) {
//     console.log(e)
// })

// const link = document.querySelector('a')
// console.log(link.outerHTML);
// link.addEventListener('click', function(e) {
//     e.preventDefault()
//     console.log('click link');
// })


// btn.addEventListener('click', e => {
//     console.log(e);
// })

btn.addEventListener('click', e => {
    console.log(this)
    console.log(e);
})

btn.addEventListener('click', function() {
    console.log(this)
    console.log('click text 2')
})

function deleteElement(e) {
    e.preventDefault()
    console.log(this)
    console.log('click link');
}

const link = document.querySelector('a')
// console.log(link.outerHTML);
link.addEventListener('click', deleteElement)

// link.removeEventListener('click', deleteElement)