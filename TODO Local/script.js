var ul = document.getElementById("container");
var input = document.getElementById("input");
let tasks = [];
document.getElementById("addbtn").addEventListener("click", add);
window.onload = () => {
    tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(todo => addtodo(todo));
}

function add() {
    let task = input.value.trim();
    if (task === "") return;

    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    addtodo(task);
    input.value = "";
}
function addtodo(todo) {

    let list = document.createElement("li");

    list.innerHTML = `
        <span class="task-text"> ${todo}</span>
        <button class="editbtn">Edit</button>
        <button class="readbtn">Mark as Read</button>
        <button  class="dltbtn">Delete</button>
    `;

    ul.append(list);

    list.querySelector(".dltbtn").addEventListener("click", deleteItem);


    function deleteItem() {
        ul.removeChild(list);
        removelocal(todo);

    }

    list.querySelector(".editbtn").addEventListener("click", () => editItem(list, todo));
    function editItem(list, todo) {
        var taskText = list.querySelector(".task-text");
        let cleanText = todo.replace(/^&check; /, "");
        var newText = prompt("Edit your task:", cleanText);
        if (newText !== null && newText.trim() !== "") {
            let index = tasks.indexOf(todo);

            if (index > -1) {
                tasks[index] = newText; // Update task in array
                localStorage.setItem("tasks", JSON.stringify(tasks)); // Save changes
            }

            taskText.innerText = newText; // Update UI
        }
    }

    list.querySelector(".readbtn").addEventListener("click", () => markAsRead(list, todo));
    function markAsRead(list, todo) {
        var taskText = list.querySelector(".task-text");

        if (!taskText.innerHTML.startsWith("&check;")) {
            taskText.innerHTML = "&check;" + taskText.innerHTML;
            taskText.style.color = "green";


            let index = tasks.indexOf(todo);

            if (index > -1) {
                tasks[index] = "&check;" + todo;
                localStorage.setItem("tasks", JSON.stringify(tasks));
            }


        }


    }
}
function removelocal(todo) {
    let index = tasks.indexOf(todo);
    if (index > -1)
        tasks.splice(index, 1)
    localStorage.setItem("tasks", JSON.stringify(tasks));

}





