
document.addEventListener("DOMContentLoaded", function(){

    const input = document.getElementById("inputType");
    const taskList = document.getElementById("TaskList");

    // Add Task Function
    window.AddTask = function(){
        const taskText = input.value.trim();

        if(taskText === ""){
            alert("Please enter a task");
            return;
        }

        const newTask = document.createElement("li");

        const textSpan = document.createElement("span");
        textSpan.textContent = taskText;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";

        // delete
        deleteBtn.onclick = function(){
            newTask.remove();
        };

        // complete task
        textSpan.onclick = function(){
            textSpan.style.textDecoration =
                textSpan.style.textDecoration === "line-through"
                ? "none"
                : "line-through";
        };

        newTask.appendChild(textSpan);
        newTask.appendChild(deleteBtn);
        taskList.appendChild(newTask);
         taskList.insertBefore(newTask, taskList.firstChild);
        input.value = "";
    };

    // Enter key support
    input.addEventListener("keypress", function(e){
        if(e.key === "Enter"){
            AddTask();
        }
    });

});