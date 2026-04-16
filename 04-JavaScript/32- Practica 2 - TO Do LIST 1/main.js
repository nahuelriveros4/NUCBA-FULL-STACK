const input = document.querySelector('.input-text');
const addForm= document.querySelector('.add-btn');
const taskslist= document.querySelector('.tasks-list');
const deleteBtn = document.querySelector('.deleteAll-btn');

let task = JSON.parse(localStorage.getItem('task')) || [];

const saveOnLocalStorage = (tasklist) => {
  localStorage.setItem('task',  JSON.stringify(tasklist))
}
const createTask = (task) => {
  return `<li>${task.name}<img classe="delete"`
}

const renderTaskList  = (todoList) => {
  taskslist.innerHTML = todoList.map((task) => )
}
