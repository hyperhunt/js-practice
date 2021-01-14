const TodoList = {
    data() {
      return {
        todos: [
            {
                id: 1,
                title: 'one',
            },
            {
                id: 2,
                title: 'two',
            }
        ]
      }
    }
  }
  
  const app = Vue.createApp(TodoList)
  
  app.component('todo-item', {
    props: ['todo'],
    template: `<li>{{ todo.title }}</li>`
  })
  
  app.mount('#todo-list')
  