import { Task, Category } from "./types/types.js";
import renderTasks from "./helpers/render-tasks.helper.js";
import { render as renderCategories } from "./helpers/render-categories.helper.js";
import { TaskClass } from "./classes/task.js";
const taskNameInputElement = document.querySelector("#name");
const addButtonElement = document.querySelector("button");
const tasksContainerElement = document.querySelector(".tasks");
const categoriesContainerelement = document.querySelector(".categories");
let selectedCategory;
const categories = [
    Category.GENERAL,
    Category.WORK,
    Category.HOUSE,
    Category.HOBBY,
    Category.SOCIAL,
];
const tasks = [
    new Task("Feed the dog", false, Category.HOBBY),
    new Task("Paint the wall", false, Category.HOUSE),
    new Task("Cook the dinner", false),
];
const addTask = (task) => {
    tasks.push(task);
};
const updateSelectedCategory = (newCategory) => {
    selectedCategory = newCategory;
};
addButtonElement.addEventListener("click", (event) => {
    event.preventDefault();
    const newTask = new Task(taskNameInputElement.value, false, selectedCategory);
    addTask(newTask);
    newTask.logCreationDate("!!!");
    renderTasks(tasks, tasksContainerElement);
});
const task = ["zrobić model", Category.HOBBY, false];
const taskName = task[0];
const taskCategory = task[1];
const taskDoneStatus = task[2];
renderCategories(categories, categoriesContainerelement, updateSelectedCategory);
renderTasks(tasks, tasksContainerElement);
const taskClassInstance = new TaskClass("contructor task", false);
