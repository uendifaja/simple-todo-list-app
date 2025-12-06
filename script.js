const input = document.getElementById("taskInput");
const categorySelect = document.getElementById("categorySelect");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Load tasks when page opens
window.onload = loadTasks;

addBtn.addEventListener("click", addTask);
input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") addTask();
});

function addTask() {
    const text = input.value.trim();
    const category = categorySelect.value;

    if (text === "") return;

    const task = {
        text,
        category,
        completed: false,
        id: Date.now()
    };

    addTaskToDOM(task);
    saveTaskToLocalStorage(task);

    input.value = "";
}

function addTaskToDOM(task) {
    const li = document.createElement("li");
    li.dataset.id = task.id;

    li.innerHTML = `
        <span class="task-text">${task.text}</span>
        <span class="category-label">${task.category}</span>
        <button class="edit-btn">Edit</button>
        <button class="delete-btn">X</button>
    `;

    if (task.completed) li.classList.add("completed");

    // Toggle completed
    li.addEventListener("click", (e) => {
        if (e.target.classList.contains("delete-btn")) return;
        if (e.target.classList.contains("edit-btn")) return;

        li.classList.toggle("completed");
        updateTaskCompletion(task.id, li.classList.contains("completed"));
    });

    // Delete task
    li.querySelector(".delete-btn").addEventListener("click", () => {
        li.remove();
        deleteTask(task.id);
    });

    // Edit task
    li.querySelector(".edit-btn").addEventListener("click", () => {
        const newText = prompt("Edit your task:", task.text);
        if (newText && newText.trim() !== "") {
            li.querySelector(".task-text").textContent = newText;
            updateTaskText(task.id, newText);
        }
    });

    taskList.appendChild(li);
}

// Local Storage Functions
function saveTaskToLocalStorage(task) {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(addTaskToDOM);
}

function deleteTask(id) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.filter(task => task.id !== id);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function updateTaskCompletion(id, completed) {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const updated = tasks.map(task =>
        task.id === id ? { ...task, completed } : task
    );
    localStorage.setItem("tasks", JSON.stringify(updated));
}

function updateTaskText(id, newText) {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const updated = tasks.map(task =>
        task.id === id ? { ...task, text: newText } : task
    );
    localStorage.setItem("tasks", JSON.stringify(updated));
}
