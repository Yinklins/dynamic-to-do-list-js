alert("Welcome to Your todo list");

//Setup Event listener for page load 
document.addEventListener("DOMContentLoaded", () => {

    // Get the task list from Local Storage
    const savedTasks = localStorage.getItem('tasks');
    
    if (savedTasks) {
        // Parse the JSON string back into a JavaScript array
        const tasks = JSON.parse(savedTasks);
        
        // Loop through the tasks and create list items for each one
        tasks.forEach(taskText => {
            createTaskElement(taskText); // A new function to create and append the task to the DOM
        });

// select Dom Elements
const addButton = document.getElementById('add-task-btn');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');


// create teh addTast Function
function addTask() {
    // Get and trim task input
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    // check if input is empty
    if (taskText === " ") {
        alert("Please enter a task.");
        return;
    }

    if (taskText !== " "){
        // Create a new <li> element
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a new button element for removing the task
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add(remove-btn);

        // Assign an onclick event to the remove button
        removeButton.onclick = () => {
            taskList.removeChild(li); // Remove the <li> from taskList
        };

        // Append the remove button to the <li>
        listItem.appendChild(removeButton);

        // Append the <li> to the taskList
        taskList.appendChild(li);

        // Clear the task input field
        taskInput.value = '';
    }

    // ✅ Event listener for button click
    addButton.addEventListener('click', addTask)

    // ✅ Event listener for Enter key press
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === "Enter") {
            addTask();
        }
    })

    
}

// ✅ Invoke addTask once when DOM is loaded (if required by instructions)
  addTask();




})