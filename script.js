//Setup Event listener for page load 
document.addEventListener('DOMContentLoaded', () => {
// select Dom Elements
const addButton = document.getElementById('add-task-btn');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// create teh addTast Function
function addTask() {
    // Get and trim task input
    const taskText = taskInput.value.trim();

    // Check if input is empty
    if (taskText === " ") {
        alert('Please enter a task.');
        return;
    }

    if (taskText !== " "){
            // Create a new <li> element
            const listItem = document.createElement('li');
            listItem.textContent = taskText;
    
            // Create a new "Remove" button
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.className = 'remove-btn';

            // Assign an onclick event to remove the <li> from taskList
            removeButton.onclick = () => {
                taskList.removeChild(listItem);
            };
            // Append the remove button to the <li>
            listItem.appendChild(removeButton);

            // Append the <li> to the task list
            taskList.appendChild(listItem);

            // Clear the input field
            taskInput.value = '';
    }

  
}
  // Attach Event Listener to the "Add Task" button
  addButton.addEventListener('click', addTask);

  // Attach Event Listener for Enter key on input field
  taskInput.addEventListener('keypress', event => {
    if (event.key === 'Enter') {
      addTask();
    }
  });