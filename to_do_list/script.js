// This is the task input field 
const taskInput = document.getElementById("task-input");
document.getElementById("add-btn").addEventListener("click", function() {
    addTask();
});
function addTask() {
    if (taskInput.value === "") {
        alert("Please enter a task.");
    } else {
        // Find the container where tasks will be added
        const taskList = document.getElementsByClassName("task-list")[0];
        // Create a new task container
        const taskDiv = document.createElement("div");
        taskDiv.className = "task";
        // Create the task item
        const ul = document.createElement("ul");
        ul.className = "task-item";
        ul.id = "added-task";
        ul.innerText = taskInput.value;
        // Create the delete button
        const btn = document.createElement("button");
        btn.id = "delete-btn";
        btn.className = "delete-btn";
        btn.innerText = "Delete";
        btn.addEventListener("click", function() {
            taskList.removeChild(taskDiv);
        });
        // Append the task and button to the task container
        taskDiv.appendChild(ul);
        taskDiv.appendChild(btn);
        // Append the task container to the task list
        taskList.appendChild(taskDiv);
        taskInput.value = ""; // Clear the input field after adding the task
    }
   
}
function deleteTask() {
    const taskList = document.getElementsByClassName("task-list")[0];
    const tasks = taskList.getElementsByTagName("ul");
    if (tasks.length > 0) {
        taskList.removeChild(tasks[tasks.length - 1]); // Remove the last task
    } else {
        alert("No tasks to delete.");
    }
}