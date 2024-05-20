function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        var li = document.createElement("li");
        li.textContent = taskInput.value;
        li.onclick = function() {
            this.classList.toggle("completed");
        };
        taskList.appendChild(li);
        taskInput.value = "";
    } else {
        alert("Please enter a task!");
    }
}
function clearAll() {
    var taskList = document.getElementById("taskList");
    taskList.innerHTML = ""; // Clear the task list
}
document.getElementById("taskInput").addEventListener("keypress", function(event) {
    if (event.keyCode === 13) { // Enter key
        event.preventDefault(); // Prevent default form submission
        addTask(); // Call addTask function
    }
});
