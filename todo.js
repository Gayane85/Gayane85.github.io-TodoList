const addBtn = document.querySelector("#add-btn");
const todoText = document.querySelector("#todo-text");
const list = document.querySelector("#list");

addBtn.onclick = function () {
  if (!todoText.value) {
    alert("Please input your task");
    return;
  }
  let todo = document.createElement("div");
  todo.classList.add("item");

  let text = document.createElement("p");
  text.innerText = todoText.value;

  todo.append(text);
  //   list.prepend(todo);

  //   todoText.value = "";

  let tools = document.createElement("div");
  tools.classList.add("tools");

  let btnDelete = document.createElement("button");
  btnDelete.innerText = "Delete";
  btnDelete.classList.add("del-button");
  btnDelete.onclick = function () {
    removeToDo(todo);
  };

  let btnDo = document.createElement("button");
  btnDo.innerText = "Do";
  btnDo.classList.add("do-btn");
  btnDo.onclick = function () {
    changeStatus(todo);
  };

  tools.append(btnDo, btnDelete);
  todo.append(tools);
  list.prepend(todo);
  todoText.value = "";

  function removeToDo(elem) {
    elem.remove();
  }

  function changeStatus(elem) {
    elem.classList.toggle("done");
    if (elem.classList.contains("done")) {
      elem.querySelector(".do-btn").innerText = "Done";
    } else {
      elem.querySelector(".do-btn").innerText = "Do";
    }
  }
};
