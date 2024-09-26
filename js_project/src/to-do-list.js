// ========================================================================== //
// DATA Controller

// Store Tasks Array
var taskStore = [];

// Task Object Constructor
var Task = function (id, description) {
  this.id = id;
  this.description = description;
};

function addTask(des) {
  var newTask, ID;

  if (taskStore.length > 0) {
    ID = taskStore[taskStore.length - 1].id + 1;
  } else {
    ID = 0;
  }

  newTask = new Task(ID, des);

  taskStore.push(newTask);

  return newTask;
}

function deleteTask(id) {
  var ids, index;

  //create array for ids
  ids = taskStore.map(function (current) {
    return current.id;
  });

  //find id index
  index = ids.indexOf(parseInt(id));

  //delete the task
  if (index !== -1) {
    taskStore.splice(index, 1);
  }
}

// ========================================================================== //
// UI Controller

//DOM objects
var DOMStrings = {
  addNewTaskButton: document.querySelector("#add-task"),
  newTaskDescription: document.querySelector("#task-input"),
  taskContainerList: document.querySelector("#todo-list"),
  labelCounter: document.querySelector("#taskCounter"),
  donelabel: document.querySelector(".done-mark"),
  nothingLabel: document.querySelector("#nothing")
};

function addListTask(task) {
  var html, newHtml, element;

  //create HTML string with placeholder text
  html =
    '<li id=%id% class="bubble"><label>%description%</label> <button class=icon-button><i class="fas fa-check"></i></button> <button class=icon-button><i class="fas fa-trash"></i></button>';

  //replace the placeholder text with an actual data
  newHtml = html.replace("%id%", task.id);
  newHtml = newHtml.replace("%description%", task.description);

  //insert the HTML into the DOM
  element = DOMStrings.taskContainerList;
  element.insertAdjacentHTML("beforeend", newHtml);
}

function deleteListTask(selectorID) {
  var el;
  el = document.getElementById(selectorID);

  //remove html from DOM
  el.remove();
}

function doneListTask(selectorID) {
  var el;
  el = document.getElementById(selectorID);
  el.firstElementChild.classList.toggle("done-mark");

  el.children[1].disabled = !el.children[1].disabled;
  el.children[1].children[0].classList.toggle("disabled-btn");
}

function countTasks() {
  var curTaskCount, curDineTaskCount, labelCounter, nothingLabel, taskContainerList, donelabel, listItems, listItemsDone;

  labelCounter = DOMStrings.labelCounter;
  nothingLabel = DOMStrings.nothingLabel;
  taskContainerList = DOMStrings.taskContainerList;
  donelabel = DOMStrings.donelabel;

  listItems = document.querySelectorAll('#todo-list li'),
  curTaskCount = listItems.length;

  listItemsDone = document.querySelectorAll('.done-mark'),
  curDineTaskCount = listItemsDone.length;

  labelCounter.innerHTML = "";
  labelCounter.insertAdjacentHTML("beforeend", " " + curTaskCount + "/" + curDineTaskCount);

  if (curTaskCount != 0) {
    nothingLabel.style.display = "none";
    labelCounter.style.display = "inline";
  } else {
    nothingLabel.style.display = "block";
    labelCounter.style.display = "none";
  }
}

// ========================================================================== //
// App Controller

function addNewTask() {
  var input, text, newTask;

  input = DOMStrings.newTaskDescription;
  text = input.value;

  if (text) {
    newTask = addTask(text);

    addListTask(newTask);

    countTasks();

    input.value = "";
    input.focus();
  }
}

DOMStrings.addNewTaskButton.addEventListener("click", addNewTask);

document.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addNewTask();
  }
});

function removeTask(event) {
  var taskId, doneBtn, clickedElement, clickedElement;

  doneBtn = "fas fa-check"
  trashBtn = "fas fa-trash";

  clickedElement = event.target.className;
  taskId = event.target.parentNode.parentNode.id;

  if (clickedElement === doneBtn) {
    doneListTask(taskId);
  } else if (clickedElement === trashBtn) {
    deleteTask(taskId);
    deleteListTask(taskId);
  }

  countTasks();
}

DOMStrings.taskContainerList.addEventListener("click", removeTask);
