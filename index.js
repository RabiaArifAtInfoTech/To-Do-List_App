
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTask');
    const taskList = document.getElementById('taskList');
    const clearTasksButton = document.getElementById('clearTasks');

    // Event listener to add a task
    addTaskButton.addEventListener('click', function () {
        const taskText = taskInput.value.trim();

        if (taskText !== '') {
            const listItem = document.createElement('li');
            listItem.textContent = taskText;
            taskList.appendChild(listItem);
            taskInput.value = '';
        }
    });

    // Event listener to clear all tasks
    clearTasksButton.addEventListener('click', function () {
        while (taskList.firstChild) {
            taskList.removeChild(taskList.firstChild);
        }
    });

