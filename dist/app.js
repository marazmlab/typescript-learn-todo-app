// <li>
//   <label for="task1">Feed dog</label>
//   <input type="checkbox" id="task-1" name="Feed dog" />
// </li>;
const tasksContainerElement = document.querySelector(".tasks");
const tasks = [
    "Feed the dog",
    "Paint walls",
    "Cook the dinner",
    "Fix the cabinet",
];
const render = () => {
    tasks.forEach((task) => {
        const taskElement = document.createElement("li");
        taskElement.innerText = task;
        tasksContainerElement.appendChild(taskElement);
    });
};
render();
