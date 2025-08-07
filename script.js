//Setup Event listener for page load 
document.addEventListener("DOMContentLoaded", () => {

// select Dom Elements
const addButton = document.getElementById('add-task-btn');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');


// create teh addTast Function
function addTask() {
    // Get and trim task input
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
        removeButton.className = 'remove-btn';

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

}





})