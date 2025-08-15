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
  {
    name: "Feed the dog",
    done: false,
    category: Category.WORK,
  },
  {
    name: "Paint walls",
    done: false,
    category: Category.HOUSE,
  },
  {
    name: "Cook the dinner",
    done: false,
    category: Category.GENERAL,
  },
];

const addTask = (task: Task) => {
  tasks.push(task);
};

const updateSelectedCategory = (newCategory: Category) => {
  selectedCategory = newCategory;
};

addButtonElement.addEventListener("click", (event: Event) => {
  event.preventDefault();
  addTask({
    name: taskNameInputElement.value,
    done: false,
    category: selectedCategory,
  });
  renderTasks(tasks, tasksContainerElement);
});

type TaskAsTupe = [string, Category, boolean];

const task: TaskAsTupe = ["zrobić model", Category.HOBBY, false];

const taskName = task[0];
const taskCategory = task[1];
const taskDoneStatus = task[2];

addTask({ name: taskName, category: taskCategory, done: taskDoneStatus });

renderCategories(categories, categoriesContainerelement, updateSelectedCategory);
renderTasks(tasks, tasksContainerElement);

const taskClassInstance = new TaskClass();

console.log(taskClassInstance);
