const form = document.querySelector("form"); // получаем форму
const inputNode = document.querySelector("input"); // получаем инпут
const taskAddBtn = document.querySelector(".task-btn"); // получаем кнопку
const tasksList = document.querySelector(".tasks-list"); //список отображения задач
const taskError = document.querySelector(".task-error"); //текст о валидации инпута

//по нажатию на enter отображаем задачу
form.addEventListener("submit", (event) => {
  event.preventDefault();
  getInputValue();
});
// при нажатии на кнопку отображаем задачу
taskAddBtn.addEventListener("click", getInputValue);

function getInputValue() {
  //проверяем ввод данных в инпут

  const taskValue = inputNode.value.trim();
  if (taskValue === "" || taskValue.length < 3) {
    taskError.classList.remove("hidden");
    return;
  } else {
    taskError.classList.add("hidden");
  }

  // делаем разметку для новой задачи
  const taskHTML = `
    <li class="task">
    <div class="task-text">
        <span class="task-content">${taskValue.trim()}</span>
    </div>
    <div class="task-btns">
        <button class="task-btn-completed" data-action="completed"></button>
        <button class="task-btn-delete" data-action="deleted"></button>
    </div>
  </li>
    `;
  tasksList.insertAdjacentHTML("beforeend", taskHTML);
  clearInputValue();
}

// удаление задачи
function deleteTask(event) {
  if (event.target.dataset.action === "deleted") {
    const parentNode = event.target.closest("li");
    parentNode.remove();
  }
}

//слушатель для удаления задачи
tasksList.addEventListener("click", deleteTask);
//отмечаем выполненную задачу
tasksList.addEventListener("click", doneTask);

function doneTask(event) {
  const liTask = event.target.closest(".task");
  const taskTitle = liTask.querySelector(".task-content");
  const taskBtn = liTask.querySelector(".task-btn-completed");
  if (event.target.dataset.action === "completed") {
    console.log(taskTitle);
    taskTitle.classList.toggle("task-content-done");
    taskBtn.classList.toggle("task-btn-completed-done");

    // setTimeout(() => {
    //   liTask.remove();
    // }, 2000);
  }
}
//очищаем инпут после ввода данных
function clearInputValue() {
  inputNode.value = "";
  // оставляем фокус на ипуте
  inputNode.focus();
}
