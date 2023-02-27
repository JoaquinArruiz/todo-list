import { folderList } from "./folders";


class Task{
    constructor(name, date, priority){
        this.name = name;
        this.date = date;
        this.priority = priority;
    }
}

let demoTask = new Task('demoTask', '19/20/2023', 'high');

folderList[0].tasks.push(demoTask);
console.log(folderList);


let getTask = () => {
    const name = document.getElementById('taskName').value
    const date = document.getElementById('taskDate').value;
    const prio = document.getElementById('taskPriority').value;
    return new Task(name, date, prio);
}

let createTaskCard = (task) => {
    let taskCard = document.createElement('div');
    taskCard.classList.add('taskCard');

    let taskName = document.createElement('h1');
    taskName.textContent = task.name;
    taskCard.appendChild(taskName);
    
    let taskDate = document.createElement('h1');
    taskDate.textContent = task.date;
    taskCard.appendChild(taskDate);

    let taskPriority = document.createElement('h1');
    taskPriority.textContent = task.priority;
    taskCard.appendChild(taskPriority);
}

export {Task}