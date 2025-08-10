import renderTasks from "./helpers/render-tasks.helper.js";
import { render as renderCategories } from "./helpers/render-categories.helper.js";
const taskNameInputElement = document.querySelector("#name");
const addButtonElement = document.querySelector("button");
const tasksContainerElement = document.querySelector(".tasks");
const categoriesContainerelement = document.querySelector(".categories");
let selectedCategory;
const categories = ["general", "work", "house", "hobby"];
const tasks = [
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
const addTask = (task) => {
    tasks.push(task);
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
renderCategories(categories, categoriesContainerelement, selectedCategory);
renderTasks(tasks, tasksContainerElement);
