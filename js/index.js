//let addField = document.createElement('input').insertBefore();
//const mainContainer = document.querySelector(".todo").appendChild(mainContainer);

const dataTasks = [];

const inputAddTodo = document.querySelector('.add-todo'),
      mainContainer = document.querySelector(".todo"),
      todoList = document.querySelectorAll('.todo-list'),
      newTaskTitle = inputAddTodo.value,
      newElementList = document.createElement('li');


inputAddTodo.addEventListener('keypress', function (e) {

    console.log(e.key);
    newElementList.innerText = newTaskTitle;
    todoList.appendChild(newElementList);

});






