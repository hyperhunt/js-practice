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

const link = document.querySelector('a')
console.log(link.outerHTML);
link.addEventListener('click', function(e) {
    e.preventDefault()
    console.log('click link');
})
