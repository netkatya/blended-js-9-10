import { saveTasks, loadTasks } from "./local-storage-api";

let tasks = loadTasks();

export function getTasks() {
  return tasks;
}

export function addTask(task) {
  tasks.push(task);
  saveTasks(tasks);
}

export function removeTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  saveTasks(tasks);
}