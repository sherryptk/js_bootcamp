const todos = [{
    text: 'go to the movies',
    completed: true
  }, {
    text: 'dance',
    completed: false
  }, {
    text: 'enjoy a bath',
    completed: false
  }, {
    text: 'go for a swim',
    completed: true
  }, {
    text: 'cuddle with walnut',
    completed: true
  }]

  const sortTodos = function (todos){
      todos.sort(function (a, b) {
        if (a.completed && !b.completed){
            return 1
        } else if (b.completed && !a.completed) {
            return -1
        } else {
            return 0
        }
      })
  }

  sortTodos(todos)
  console.log(todos)

//   const getThingsToDo = function(todos){
//       return todos.filter(function(todo){
//         return !todo.completed
//       })
//   }

//   console.log(getThingsToDo(todos))


//   const deleteTodo = function (todos, searchText){
//       const index = todos.findIndex(function (todo, text) {
//           todo.text.toLowerCase() === searchText.toLowerCase()
//       })
//       todos.splice(index, 1)

//       return todos
//   }

//   console.log(deleteTodo(todos, "DANCE"))
