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