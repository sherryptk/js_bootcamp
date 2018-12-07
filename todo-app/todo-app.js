const todos = getTodos()

const filter = {
    searchText: '',
    hideCompleted: false
}

renderTodos(todos, filter)

//respond to text entered into search field
document.querySelector('#filter-todos').addEventListener('input', function (e) {
    filter.searchText = e.target.value
    renderTodos(todos, filter)
})

//add new todo
document.querySelector('#add-todo').addEventListener('submit', function (e) {
    e.preventDefault()

        todos.push({
            id: uuidv4(),
            text: e.target.elements.addTodo.value,
            completed: false
        })

    saveTodos(todos)
    e.target.elements.addTodo.value = ''
    renderTodos(todos, filter)
})

document.querySelector('#hide-completed').addEventListener('change', function (e) {
    filter.hideCompleted = e.target.checked
        renderTodos(todos, filter)
})


