import { Task, Category } from "./types/types.js";
import renderTasks from "./helpers/render-tasks.helper.js";
import { render as renderCategories } from "./helpers/render-categories.helper.js";
import { TaskClass } from "./classes/task.js";

const taskNameInputElement: HTMLInputElement = document.querySelector("#name");
const addButtonElement: HTMLButtonElement = document.querySelector("button");
const tasksContainerElement: HTMLElement = document.querySelector(".tasks");
const categoriesContainerelement: HTMLElement = document.querySelector(".categories");

let selectedCategory: Category;

const categories: Category[] = [
  Category.GENERAL,
  Category.WORK,
  Category.HOUSE,
  Category.HOBBY,
  Category.SOCIAL,
];

const tasks: Task[] = [
  new Task("Feed the dog", false, Category.HOBBY),
  new Task("Paint the wall", false, Category.HOUSE),
  new Task("Cook the dinner", false),
];

const addTask = (task: Task) => {
  tasks.push(task);
};

const updateSelectedCategory = (newCategory: Category) => {
  selectedCategory = newCategory;
};

addButtonElement.addEventListener("click", (event: Event) => {
  event.preventDefault();
  addTask(new Task(taskNameInputElement.value, false, selectedCategory));
  renderTasks(tasks, tasksContainerElement);
});

type TaskAsTupe = [string, Category, boolean];

const task: TaskAsTupe = ["zrobić model", Category.HOBBY, false];

const taskName = task[0];
const taskCategory = task[1];
const taskDoneStatus = task[2];

renderCategories(categories, categoriesContainerelement, updateSelectedCategory);
renderTasks(tasks, tasksContainerElement);

const taskClassInstance = new TaskClass("contructor task", false);
