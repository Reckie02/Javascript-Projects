const inputBox = document.getElementById("input-box");
const taskDate = document.getElementById("task-date");
const taskTime = document.getElementById("task-time");
const listContainer = document.getElementById("list-container");

function addTask(){

    let inputBox = document.getElementById("input-box");
    let taskDate = document.getElementById("task-date");
    let taskTime = document.getElementById("task-time");

    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value + " ------ " + taskDate.value + " ------ " + taskTime.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    inputBox.value = "";
    taskDate.value = "";
    taskTime.value = "";    
    saveData();
}
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("completed");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function deleteAll(){
    listContainer.innerHTML = localStorage.clear("clear");
    saveData();
}

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}   
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();