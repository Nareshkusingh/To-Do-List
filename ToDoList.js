function AddTask(){
    const newTask = document.createElement('li')
    const taskList = document.getElementById("TaskList")

    newTask.textContent = document.getElementById('inputType').value

    taskList.appendChild(newTask)

    document.getElementById('inputType').value = ""

    deleteTask(newTask);
}

function deleteTask(newTask){
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "delete"
    newTask.appendChild(deleteBtn);

    deleteBtn.onclick = function (){
        newTask.remove()
    }
}