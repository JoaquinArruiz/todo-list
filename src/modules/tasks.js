export class Task{
    constructor(name, date, priority){
        this.name = name;
        this.date = date;
        this.priority = priority;
    }

    setName(name){
        this.name = name;
    }

    setDate(date){
        this.date = date
    }

    setPriority(priority){
        this.priority = priority
    }

    renderCard(){
        let taskCard = document.createElement('div');
        taskCard.classList.add('taskCard');

        let taskName = document.createElement('h1');
        taskName.textContent = this.name;
        taskCard.appendChild(taskName);

        let taskDate = document.createElement('h1');
        taskDate.textContent = this.date;
        taskCard.appendChild(taskDate);

        let taskPriority = document.createElement('h1');
        taskPriority.textContent = this.priority;
        taskCard.appendChild(taskPriority)

        return taskCard;
    }
}