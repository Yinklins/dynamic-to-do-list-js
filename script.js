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

            // Create a new <li> element
        const listItem = document.createElement('li');
        listItem.textContent = taskText;
    
        // Add click event to remove the task
        removeButton.onclick = () => {
        taskList.removeChild(listItem);
    };

    // Append remove button to <li> and <li> to <ul>
    listItem.appendChild(removeButton);
    taskList.appendChild(listItem);

    // Clear the input field
    taskInput.value = '';

}

 // Attach Event Listener to the "Add Task" button
  addButton.addEventListener('click', addTask);

  // Attach Event Listener for Enter key on input field
  taskInput.addEventListener('keypress', event => {
    if (event.key === 'Enter') {
      addTask();
    }
  });

});