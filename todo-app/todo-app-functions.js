//grab todos from local storage
const getTodos = function () {
    const todosJSON = localStorage.getItem('todos')
    if (todosJSON !== null ) {
        return JSON.parse(todosJSON)
    } else {
        return []
    }
}

//save todos to local storage
const saveTodos = function (todos) {
    localStorage.setItem('todos', JSON.stringify(todos))
}

//display todos and search results live
const renderTodos = function (todos, filter) {

    const filteredTodos = todos.filter(function (todo) {
        const searchTextMatch = todo.text.toLowerCase().includes(filter.searchText.toLowerCase())
        const hideCompletedMatch = !filter.hideCompleted || !todo.completed
        return searchTextMatch && hideCompletedMatch
    })

    document.querySelector('#todo-list').innerHTML = ''

    //list of todos that aren't completed yet
    const uncompletedTodos = filteredTodos.filter(function (todo) {
        return !todo.completed
    })

    //Show how many todos are left
    generateSummaryTodo(uncompletedTodos)

    //show todos
    generateTodoDOM(filteredTodos)
}

const generateTodoDOM = function (filteredTodos) {
    filteredTodos.forEach(function (todo) {
        const todoDiv = document.createElement('div')
        document.querySelector('#todo-list').appendChild(todoDiv)

        const checkboxEl = document.createElement('input')
        checkboxEl.setAttribute('type', 'checkbox')
        checkboxEl.checked = todo.completed
        todoDiv.appendChild(checkboxEl)
        checkboxEl.addEventListener('click', function () {
            toggleTodo(todo.id)
            saveTodos(todos)
            renderTodos(todos, filter)
        })

        const todoEl = document.createElement('span')
        todoEl.textContent = todo.text
        todoDiv.appendChild(todoEl)
 
        const button = document.createElement('button')
        button.textContent = 'x'
        todoDiv.appendChild(button)

        //handle remove todo click
        button.addEventListener('click', function () {
            removeTodo(todo.id)
            saveTodos(todos)
            renderTodos(todos, filter)
        })
    })
}

const toggleTodo = function (id) {
    const todoIndex = todos.findIndex(function(todo) {
        return todo.id === id
    })

    if (todoIndex > -1){
        todos[todoIndex].completed = !todos[todoIndex].completed
    }
}

const removeTodo = function (id) {
    const todoIndex = todos.findIndex(function (todo) {
        return todo.id === id
    })

    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
}

const generateSummaryTodo = function (uncompletedTodos) {
    const summary = document.createElement('h2')
    summary.textContent = `You have ${uncompletedTodos.length} things left to do`
    document.querySelector('#todo-list').appendChild(summary)
}