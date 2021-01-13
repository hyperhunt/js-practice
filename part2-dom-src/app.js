// const div = document.querySelector('div')
// const titles = document.querySelectorAll('h1')

// console.dir(div)
// console.dir(titles)
// console.dir(div)
// console.log(titles)
// console.log(Array.from(titles)[0])
// // console.log(Array.prototype.slice.call(titles))
// console.log([...titles])


// const h1 = document.getElementsByTagName('h1')
// console.log(h1)


// document.body.firstElementChild
// document.body
// document.links
// document.links


// Зная структуру html, с помощью изученных методов получить (в консоль):

// 1. head
// const head = document.getElementsByTagName('head')
// const head = document.body.firstElementChild('head')
// const head = document.querySelector('head')
// console.log(head);

//2. body
// const body = document.querySelector('body')
// console.log(body);

// 3. все дочерние элементы body и вывести их в консоль.
// for (let index = 0; index < document.body.childNodes.length; index++) {
//     console.log(document.body.childNodes[index])
    
// }
// let bodyAll = document.documentElement.childNodes
// let bodyAll = document.body.children
// console.log(bodyAll)
// for(var i=0; i < bodyAll.length; i++) {
//     console.log(bodyAll[i])
// }
// console.log(document.body.childNodes.children)


// 4. первый div и все его дочерние узлы
// а) вывести все дочерние узлы в консоль
// const div = document.body.children[0].children
// console.log(div);

// б) вывести в консоль все дочерние узлы, кроме первого и последнего
// Для навигации по DOM использовать методы, которые возвращают только элементы


// Создать функцию, которая принимает два элемента.
// Функция проверяет, является ли первый элемент родителем для второго:
// isParent(parent, child);
// isParent(document.body.children[0], document.querySelector('mark'));
// // true так как первый див является родительским элементом для mark

// const  mark = document.querySelector('mark').parentElement
// console.log(mark)

// const  mark2 = document.querySelector('mark').parentNode
// console.log(mark2)


// isParent(document.querySelector('ul'), document.querySelector('mark'));
// false так ul НЕ является родительским элементом для mark
// Получить список всех ссылок, которые не находятся внутри списка ul.
// Используя разметку из предыдущего задания.
// Найти элемент, который находится перед и после списка ul.

// const link = document.body.querySelector('.link').textContent
// const link = document.body.querySelector('.link')
// console.log(link)
// console.log(link.parentElement)

// closest('.content')
// console.log(document.querySelector('div.content').textContent)

const div = document.querySelector('div.content')
console.log(div)

div.classList.add('artical', 'custom')
div.classList.remove('artical')
console.log(div.classList)

console.log(div.classList.contains('custom')) // true

// toggle class
console.log(div.classList.toggle('toggle')) // true - add toggle
console.log(div.classList.toggle('toggle')) // false - remove toggle

// Class
console.log(div.className) // name all classes

// console.dir(div)
console.log(div.setAttribute('id', 'myId'))


// Манипуляции с DOM

const title = document.title
console.log(title)
document.querySelector('h1').textContent = title


const subjectTitle = document.querySelector('h1')
console.log(subjectTitle.outerHTML)
// subjectTitle.innerHTML = '<span>'+title+'</span>'
// subjectTitle.insertAdjacentHTML('beforebegin', '<h2>titile h2</h2>')

// const span = subjectTitle.querySelector('span')
// console.log(span.outerHTML)
// subjectTitle.innerHTML += '<span>new text 2</span>'
// console.log(document.querySelector('h1').outerHTML);

// span.textContent = 'edit text'
// console.log(document.querySelector('h1').outerHTML);
// console.log(span.outerHTML);


// Работа с узлами

// Create element
const span = document.createElement('span')
span.textContent = '{add text span}'
span.classList.add('mySpanClass')
console.log(span.outerHTML)

console.log()
console.log(subjectTitle.outerHTML)
subjectTitle.appendChild(span)
console.log(subjectTitle.outerHTML)

// Если appendChild использовать повторно, то элемент удаляется из текущего узла и добавляет в новый
// console.log(document.querySelector('div').outerHTML)
// div.appendChild(span)
// console.log(document.querySelector('div').outerHTML)

// Дом операции являются синхронными
// Добавить все элементы, затем только добавить фрагмент в разметку
const fragment = document.createDocumentFragment()
const colors = ['red', 'green']
colors.forEach((color) => {
    const item = document.createElement('div')
    div.classList.add(`bg-${color}`)
    item.textContent = color
    item.style.background = color
    fragment.appendChild(item)
})

// div.firstChild.appendChild(fragment)
document.body.appendChild(fragment)

// Delete elements in DOM
// titile.remove()
//  Полифилы - скриты, добавляют функционал не поддерживаемых элементов для старых браузеров
// subjectTitle.parentElement.removeChild(subjectTitle)
subjectTitle.childNodes[1].parentElement.removeChild(span) // delete tag <span>