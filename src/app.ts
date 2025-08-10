import { Task, Category } from "./types/types";
import renderTasks from "./helpers/render-tasks.helper.js";
import { render as renderCategories } from "./helpers/render-categories.helper.js";

const taskNameInputElement: HTMLInputElement = document.querySelector("#name");
const addButtonElement: HTMLButtonElement = document.querySelector("button");
const tasksContainerElement: HTMLElement = document.querySelector(".tasks");
const categoriesContainerelement: HTMLElement = document.querySelector(".categories");

let selectedCategory: Category;

const categories: Category[] = ["general", "work", "house", "hobby"];

const tasks: Task[] = [
  {
    name: "Feed the dog",
    done: false,
    category: "work",
  },
  {
    name: "Paint walls",
    done: false,
    category: "house",
  },
  {
    name: "Cook the dinner",
    done: false,
    category: "general",
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

renderCategories(categories, categoriesContainerelement, updateSelectedCategory);
renderTasks(tasks, tasksContainerElement);
