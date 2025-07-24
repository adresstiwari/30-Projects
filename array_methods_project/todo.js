let tasks = [];

function renderTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.className = task.done ? "completed" : "";
    li.innerHTML = `
      ${task.name}
      <span>
        <button onclick="toggleDone(${index})">✅</button>
        <button onclick="deleteTask(${index})">❌</button>
      </span>`;
    list.appendChild(li);
  });
}

// 1. push()
function addTask() {
  const input = document.getElementById("taskInput");
  if (input.value.trim() !== "") {
    tasks.push({ name: input.value, done: false });
    input.value = "";
    renderTasks();
  }
}

// 2. splice()
function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

// 3. map() + toggle
function toggleDone(index) {
  tasks = tasks.map((task, i) => {
    if (i === index) task.done = !task.done;
    return task;
  });
  renderTasks();
}

// 4. sort()
function sortTasks() {
  tasks.sort((a, b) => a.name.localeCompare(b.name));
  renderTasks();
}

// 5. reverse()
function reverseTasks() {
  tasks.reverse();
  renderTasks();
}

// 6. filter()
function clearCompleted() {
  tasks = tasks.filter(task => !task.done);
  renderTasks();
}

// Additional Example: Check if all tasks are done
function checkAllDone() {
  return tasks.every(task => task.done);
}

// Additional Example: Search
function searchTasks(query) {
  return tasks.filter(task => task.name.toLowerCase().includes(query.toLowerCase()));
}

// Example of flat()
let grouped = [["Task A", "Task B"], ["Task C"]];
console.log(grouped.flat()); // ["Task A", "Task B", "Task C"]
