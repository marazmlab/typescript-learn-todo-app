import { Category } from "./types/types.js";
import renderTasks from "./helpers/render-tasks.helper.js";
import { render as renderCategories } from "./helpers/render-categories.helper.js";
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
const addTask = (task) => {
    tasks.push(task);
};
const updateSelectedCategory = (newCategory) => {
    selectedCategory = newCategory;
};
addButtonElement.addEventListener("click", (event) => {
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
