import { Folder } from "./folders";
import { Task } from "./tasks";

let taskContainer = document.querySelector('.tasks');
let foldersContainer = document.querySelector('.foldersContainer');
let currentFolder
let setCurrentFolder = (folderName) =>{

    if (folderName == '') {
        taskContainer.innerHTML=''
        currentFolder = ''
        return
    }
    else {
        let activeCard
        if (currentFolder){
        activeCard = document.getElementById(currentFolder+":folder");
        activeCard.classList.remove('active')
        }
        currentFolder = folderName
    
        activeCard = document.getElementById(currentFolder+":folder")
        activeCard.classList.add('active')
    
        console.log('Current Folder:', folderList[currentFolder])
    
        taskContainer.innerHTML='';
        Object.values(folderList[currentFolder].tasks).forEach(task => { 
            let taskCard = task.renderTask()
            taskContainer.appendChild(taskCard)
        })}
}


let folderList = {};

let deleteTaskBtn = document.querySelector('.deleteTaskBtn')
let addFolderBtn = document.getElementById('addFolderBtn')
let addTaskBtn = document.getElementById('addTaskButton');

// demo folders and task
const demo1 = new Folder('demo1', setCurrentFolder)
const demo2 = new Folder('demo2', setCurrentFolder)

folderList[demo1.name] = demo1
folderList[demo2.name] = demo2

const task1 = new Task('This is a Demo Task, You can Delete it', '23-09-2023', 'urgPrio', demo1)

demo1.addTask(task1)
// demo folders and task

let getFolder = () => {
    const folderName = document.getElementById('folder_name').value;
    if (!folderName){
        window.alert('please input a name');
        return null;
    }
    return new Folder(folderName, setCurrentFolder)
}

addFolderBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    let newFolder = getFolder();
    if(newFolder){
        if(!folderList[newFolder.name]){
            folderList[newFolder.name] = newFolder;
            foldersContainer.appendChild(newFolder.renderFolder())
        }
        else {
            window.alert('folder\'s name already exists')
        }
        console.log(folderList)
    }
    console.log('Null NewFolder');
})

let getTask = () => {
    const taskName = document.getElementById('taskName').value;
    const taskDate = document.getElementById('taskDate').value;
    const taskPrio = document.getElementById('taskPriority').value;
    if (!taskName || !taskDate || !taskPrio) {
        window.alert('cant leave task\'s blank space');
        return null;
    }
    return new Task(taskName, taskDate, taskPrio, folderList[currentFolder]);
}

addTaskBtn.addEventListener('click', (e) => {
    e.preventDefault();

    console.log(folderList[currentFolder])
    
    let newTask = getTask();
    if(newTask){
        folderList[currentFolder].tasks.push(newTask);
    }
    taskContainer.innerHTML=''
    Object.values(folderList[currentFolder].tasks).forEach(task => { 
        let taskCard = task.renderTask()
        taskContainer.appendChild(taskCard)

    })
})



export {folderList, currentFolder}