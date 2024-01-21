const form = document.querySelector("form"); // получаем форму
const inputNode = document.querySelector("input"); // получаем инпут
const taskAddBtn = document.querySelector(".task-btn"); // получаем кнопку
const tasksList = document.querySelector(".tasks-list"); //список отображения задач
const taskError = document.querySelector(".task-error"); //текст о валидации инпута

form.addEventListener("submit", (e) => {
  e.preventDefault();
  getInputValue();
});

taskAddBtn.addEventListener("click", getInputValue); // при нажатии на кнопку

function getInputValue() {
  const taskValue = inputNode.value;
  if (taskValue == "" || taskValue.length < 3) {
    taskError.classList.remove("hidden");
    return;
  } else {
    taskError.classList.add("hidden");
  }

  // делаем разметку для новой задачи
  const taskHTML = `
    <li class="task">
    <div class="task-text">
        <span class="task-number">1.</span>
        <span class="task-content">${taskValue.trim()}</span>
    </div>
    <div class="task-btns">
        <div class="task-btn-completed"></div>
        <img src="resources/cross_mr3w4khsljuu.svg" class="task-btn-delete" alt="delete-task-icon">
    </div>
  </li>
    `;
  tasksList.insertAdjacentHTML("beforeend", taskHTML);

  clearInputValue();
}

//очищаем инпут после ввода данных
function clearInputValue() {
  inputNode.value = "";
  // оставляем фокус на ипуте
  inputNode.focus();
}
