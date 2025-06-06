import { refs } from './refs.js';
import { removeTask } from './tasks.js';

export function renderTask(task) {
  const li = document.createElement('li');
  li.className = 'task-list-item';
  li.dataset.id = task.id;
    li.innerHTML = `
    <button class="task-list-item-btn">Delete</button>
    <h3>${task.title}</h3>
    <p>${task.description}</p>
  `;

  refs.taskList.appendChild(li);
}

export function renderAllTasks(tasks) {
  refs.taskList.innerHTML = '';
  tasks.forEach(renderTask);
}

export function handleTaskDelete(e) {
  if (!e.target.classList.contains('task-list-item-btn')) return;

  const li = e.target.closest('.task-list-item');
  const id = li.dataset.id;
  removeTask(id);
  li.remove();
}