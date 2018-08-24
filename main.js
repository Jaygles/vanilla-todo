function createTodo(text) {
  const todoDiv = document.createElement('div');
  todoDiv.className = 'todo';

  const todoTextP = document.createElement('p');
  const todoText = document.createTextNode(text);
  todoTextP.appendChild(todoText);

  todoDiv.appendChild(todoTextP);

  const todoCheck = document.createElement('input');
  todoCheck.type = 'checkbox';
  todoCheck.addEventListener('click', function() {
    if (todoDiv.classList.contains('checked')) {
      todoDiv.classList.remove('checked');
    } else {
      todoDiv.classList.add('checked');
    }
  });

  todoDiv.appendChild(todoCheck);

  const todos = document.getElementById('todos');
  todos.appendChild(todoDiv);
}

const createTodoBtn = document.getElementById('create-todo-btn');
createTodoBtn.addEventListener('click', function(event) {
  event.preventDefault();
  const todoText = document.getElementById('todoText').value;
  if (todoText.trim() === '') {
    return;
  }
  createTodo(todoText);
});
