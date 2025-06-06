/*
  Створи список справ.
  На сторінці є два інпути які має вводиться назва і текст задачі.
  Після натискання на кнопку "Add" завдання додається до списку #task-list.

  У кожної картки має бути кнопка "Delete", щоб можна було
  прибрати завдання зі списку.
  Список із завданнями має бути доступним після перезавантаження сторінки.

  Розмітка картки задачі
  <li class="task-list-item">
      <button class="task-list-item-btn">Delete</button>
      <h3>Заголовок</h3>
      <p>Текст</p>
  </li>
*/

import { refs } from './js/refs.js';
import { getTasks, addTask } from './js/tasks.js';
import { renderAllTasks, renderTask, handleTaskDelete } from './js/render-tasks.js';

refs.form.addEventListener('submit', onFormSubmit);
refs.taskList.addEventListener('click', handleTaskDelete);


renderAllTasks(getTasks());

function onFormSubmit(e) {
  e.preventDefault();

  const title = e.target.elements.taskName.value.trim();
  const description = e.target.elements.taskDescription.value.trim();
  if (!title) return;

  const task = {
    id: Date.now().toString(),
    title,
    description,
  };

  addTask(task);
  renderTask(task);
  refs.form.reset();
}
