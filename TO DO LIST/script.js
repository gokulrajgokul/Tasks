var ul = document.getElementById("container");
var input = document.getElementById("input");

document.getElementById("addbtn").addEventListener("click",add);
function add() {
    let list = document.createElement("li");
  
    list.innerHTML=localstorage.getItem("value");
    localStorage.setItem('value',input.value);
    list.innerHTML = `
        <span class="task-text"> ${localstorage.getItem('value')}</span>
        <button onclick="editItem(event)">Edit</button>
        <button  onclick="markAsRead(event)">Mark as Read</button>
        <button  onclick="deleteItem(event)">Delete</button>
    `;
    
    ul.append(list);
}

 
function deleteItem(event){
    event.target.parentElement.remove();
}
 

function editItem(event) {
    var taskText = event.target.parentElement.querySelector(".task-text");
    var newText = prompt("Edit your task:", taskText.innerText);
    if (newText !== null && newText.trim() !== "") {
        taskText.innerText = newText;
    }
}
document.getElementById("rbtn").addEventListener ("click",markAsRead(event)); 
function markAsRead(event) {
    var taskText = event.target.parentElement.querySelector(".task-text");
    taskText.style.textDecoration = "line-through";
    taskText.style.color = "green";
}
