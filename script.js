alert("Welcome to Your To-Do List!");

// Setup Event listener for page load
document.addEventListener("DOMContentLoaded", () => {

    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    let tasks = [];

    // Load tasks from Local Storage
    function loadTasks() {
        const savedTasks = localStorage.getItem('tasks');
        if (savedTasks) {
            tasks = JSON.parse(savedTasks);
            tasks.forEach(taskText => createTaskElement(taskText));
        }
    }

    // Save tasks to Local Storage
    function saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Create a task DOM element
    function createTaskElement(taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-btn');

        removeButton.onclick = () => {
            taskList.removeChild(li);
            tasks = tasks.filter(task => task !== taskText);
            saveTasks();
        };

        li.appendChild(removeButton);
        taskList.appendChild(li);
    }

    // Add a task
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        createTaskElement(taskText);
        tasks.push(taskText);
        saveTasks();
        taskInput.value = '';
    }

    // Event listeners
    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === "Enter") {
            addTask();
        }
    });

    // Load tasks on page load
    loadTasks();
});
