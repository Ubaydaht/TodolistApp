load = document.getElementById("load");
todobody = document.getElementById("todobody")
userName = document.getElementById("userName")
errorMsg = document.getElementById("errorMsg")
window.onload = function(){
    load.style.display = "block"
    todobody.style.display = "none"
}

function show(){
    if (userName.value=="") {
        errorMsg.style.display ="block"
        errorMsg.innerText = "Input can't be empty"
    }else{
    load.style.display = "none"
    todobody.style.display = "block"
    const displayUser = document.getElementById("displayUser")
    displayUser.innerHTML = `<span>Hi, ${userName.value}</span>`
    const task = document.getElementById("task")
    const update = document.getElementById("update")
    }
}


let task = document.getElementById("task").value
const taskList=localStorage["ToDos"] ? json.parse(localStorage["ToDos"]) : [];


// let found = ""
let editIndex = null
const addTask = ()=>{
    task = document.getElementById("task").value
    const addTask= document.getElementById("addTask")
    if (addTask.innerText ==="Add Task" ) {
        taskList.push(task)
        localStorage.setItem("ToDos", JSON.stringify(taskList))
        console.log(taskList); 
    
    document.getElementById("task").value =""
    } else{
        // edit 
        taskList[editIndex] = task
        // found = document.getElementById("task").value 
        
        localStorage.setItem("ToDos", JSON.stringify(taskList))

        addTask.innerText = "Add Task";
        document.getElementById("task").value =""
    }

    body.innerHTML=""
    displayTask() 
}

const displayTask = ()=>{
    const body = document.getElementById("body")
   body.innerHTML = ""
    taskList.map((i, tsk)=>{ 
        body.innerHTML += `<div class="d-flex justify-content-between align-items-center ">
            <div class="d-flex gap-3 align-items-center justify-content-center">
                <input type="checkbox" name="" id="check">
                <span id="todo">${i}</span>
            </div>
            <div class="d-flex gap-1 align-items-center">
                <button class="btn" onclick="edit(${tsk})"><img src="icon/uil--edit.png" alt="edit"></button>
            <button onclick="deleteTask(${tsk})" class="btn"><img src="icon/proicons--cancel.png" alt="delete"   ></button>
            </div>
        </div>`
    })

}

displayTask()

function deleteTask(ts){
    taskList.splice(ts, 1)
    console.log(taskList);
    localStorage.setItem("ToDos", JSON.stringify(taskList))
    displayTask()
}


const edit = (i)=> {
    editIndex = i
    found =  taskList[i]
    console.log(found);
   
    document.getElementById("task").value = found;

    document.getElementById("addTask").innerText = "Edit Task"
    
}

const check = document.getElementById("check")
if (check.checked) {
    console.log(check);
} 

