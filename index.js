let todoItemsContainerEl = document.getElementById("todoItemsContainer");
let addButtonElement = document.getElementById("addButton");

let todoList = [
  {
    text: "Learn HTML5",
    uniqueId : 1,
  },
  {
    text: "Learn CSS3",
    uniqueId : 2,
  },
  {
    text: "Learn JavaScript",
    uniqueId : 3,
  },
];

let todosCount = todoList.length;

function onDeleteTodo(todoId){
  let todoElement = document.getElementById(todoId);
  todoItemsContainerEl.removeChild(todoElement);
}

function onTodoStatusChange(checkboxId, labelId){
  let checkboxElement = document.getElementById(checkboxId);
  let labelElement = document.getElementById(labelId);

  // if(checkboxElement.checked === true){
  //   labelElement.classList.add("checked")
  // }else{
  //   labelElement.classList.remove("checked")
  // }

  labelElement.classList.toggle("checked");

}

function createAndAppendTodo(todo) {
  let todoId = "todo" + todo.uniqueId
  let checkboxId = "checkbox" + todo.uniqueId;
  let labelId = "label" + todo.uniqueId;


  let todoElement = document.createElement("li");
  todoElement.classList.add("todo-item-container", "d-flex");
  todoElement.id = todoId;
  todoItemsContainerEl.appendChild(todoElement);

  let inputElement = document.createElement("input");
  inputElement.type = "checkbox";
  inputElement.id = checkboxId;
  inputElement.classList.add("checkbox-input");
  inputElement.onclick = function(){
    onTodoStatusChange(checkboxId, labelId)
  };
  todoElement.appendChild(inputElement);

  let labelContainer = document.createElement("div");
  labelContainer.classList.add("label-container", "d-flex", "flex-row");
  todoElement.appendChild(labelContainer);

  let labelElement = document.createElement("label");
  labelElement.setAttribute("for", checkboxId);
  labelElement.classList.add("checkbox-label");
  labelElement.id = labelId;
  labelElement.textContent = todo.text;
  labelContainer.appendChild(labelElement);

  let deleteContainer = document.createElement("div");
  deleteContainer.classList.add("delete-icon-container");
  labelContainer.appendChild(deleteContainer);

  let deleteIcon = document.createElement("i");
  deleteIcon.classList.add("bi", "bi-trash", "delete-icon");
  deleteIcon.onclick = function(){
    onDeleteTodo(todoId);
  }
  deleteContainer.appendChild(deleteIcon);
}

for (let eachTodo of todoList){
  createAndAppendTodo(eachTodo)
}

function onAddTodo(){
  let todoUserInputEl = document.getElementById('todoUserInput');
  let userInputValue = todoUserInputEl.value;
  
  if(userInputValue === ""){
    alert("Enter valid Text");
    return;
  }


  todosCount = todosCount + 1;
  newTodo = {
    text : userInputValue,
    uniqueId : todosCount
  };
  createAndAppendTodo(newTodo);
  todoUserInputEl.value = ""

}


addButtonElement.onclick = function(){
  onAddTodo();
}