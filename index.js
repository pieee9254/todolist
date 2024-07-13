
const addTodoBtn = document.getElementById('add-todo-btn');
const todoForm = document.getElementById('todo-form');

addTodoBtn.addEventListener('click', ()=>{
  if(todoForm.style.display === "none"){
    todoForm.style.display = "block"
  }
  else{
    todoForm.style.display = "none"
  }
})


document.getElementById('todo-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;

  const todoItem = document.createElement('div');
  todoItem.className = 'todo-item';

  const todoTitle = document.createElement('div');
  todoTitle.className = 'title';
  todoTitle.textContent = title;
  todoTitle.setAttribute("style", "text-decoration: line-through none;")
  todoTitle.style.textDecoration = "line-through none";

  const doneBtn = document.createElement('button');
  doneBtn.className = 'doneBtn';
  doneBtn.textContent = "Done!";
  doneBtn.style.float = "right";
  doneBtn.style.display = "block";

  const todoDescription = document.createElement('div');
  todoDescription.className = 'description';
  todoDescription.innerText = description;
  todoDescription.style.display = "none";

  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'delete';
  deleteBtn.innerText = 'delete';
  deleteBtn.setAttribute("onclick", "deleteTodo(this)");
  deleteBtn.style.display = "none";

  const editBtn = document.createElement('button');
  editBtn.className = 'edit';
  editBtn.innerText = 'edit';
  editBtn.style.display = "none";

  todoItem.appendChild(doneBtn);
  todoItem.appendChild(todoTitle);
  todoItem.appendChild(todoDescription);
  todoItem.appendChild(editBtn);
  todoItem.appendChild(deleteBtn);

  todoTitle.addEventListener('click', function() {
    if (editBtn.style.display === 'none') {
      editBtn.style.display = 'block';
    } 
    else {
      editBtn.style.display = 'none';
    }
  });

  todoTitle.addEventListener('click', function() {
      if (todoDescription.style.display === 'none') {
          todoDescription.style.display = 'block';
      } 
      else {
          todoDescription.style.display = 'none';
      }
  });

  todoTitle.addEventListener('click', function() {
    if (deleteBtn.style.display === 'none') {
      deleteBtn.style.display = 'block';
    } 
    else {
      deleteBtn.style.display = 'none';
    }
  });

  doneBtn.addEventListener('click', function(){
    if (todoTitle.style.textDecoration === 'line-through none') {
      todoTitle.style.textDecoration = "line-through black";
    }
    else {
      todoTitle.style.textDecoration = "line-through none";
    }
  });

  editBtn.addEventListener('click',function(){
    editBtn.style.display = 'none';
    deleteBtn.style.display = 'none';
    todoTitle.style.display = 'none';
    todoDescription.style.display = 'none';
    doneBtn.style.display = 'none';

    const editTodo = document.createElement('div');
    editTodo.className = 'editTodo';

    const editTitleInput = document.createElement('textarea');
    editTitleInput.className = 'editTitleInput';
    editTitleInput.textContent = title;
    editTitleInput.style.display = 'block';

    const editDescriptionInput = document.createElement('textarea');
    editDescriptionInput.className = 'editDescriptionInput';
    editDescriptionInput.textContent = description;
    editDescriptionInput.style.display = 'block';

    const editSubmit = document.createElement('button');
    editSubmit.className = 'editSubmit';
    editSubmit.innerText = 'Submit';
    editSubmit.setAttribute('type', 'submit');
    editSubmit.style.display = 'block';

    editSubmit.addEventListener('click', function(){
      console.log(editBtn,todoTitle)
      todoTitle.textContent = editTitleInput.value;
      todoDescription.textContent = editDescriptionInput.value;

    editBtn.style.display = 'block';
    deleteBtn.style.display = 'block';
    todoTitle.style.display = 'block';
    todoDescription.style.display = 'block';
    doneBtn.style.display = 'block';

    editTitleInput.style.display = 'none';
    editDescriptionInput.style.display = 'none';
    editSubmit.style.display = 'none';
    })

    editTodo.appendChild(editTitleInput);
    editTodo.appendChild(editDescriptionInput);
    editTodo.appendChild(editSubmit);
    
    todoItem.appendChild(editTodo);
  })

  document.getElementById('todo-list').appendChild(todoItem);

  document.getElementById('todo-form').reset();
  document.getElementById('todo-form').style.display = 'none';
});

function deleteTodo(e)
{
    e.parentNode.parentNode.removeChild(e.parentNode);
}

