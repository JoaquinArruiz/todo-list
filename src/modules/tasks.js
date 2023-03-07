export class Task{
    constructor(name, date, priority, parentFolder){
        this.name = name;
        this.date = date;
        this.priority = priority;
        this.parentFolder = parentFolder
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

    renderTask(){
        let taskCard = document.createElement('div');
        taskCard.classList.add('taskCard');

        let taskName = document.createElement('h1');
        taskName.textContent = this.name;
        taskCard.appendChild(taskName);

        let taskDate = document.createElement('h1');
        taskDate.textContent = this.date;
        taskCard.appendChild(taskDate);

        let taskPriority = document.createElement('h1');
        if (this.priority == 'urgPrio'){
            taskPriority.textContent = 'Urgent';
        }
        if (this.priority == 'norPrio'){
            taskPriority.textContent = 'Normal';
        }
        if (this.priority == 'lowPrio'){
            taskPriority.textContent = 'Low';
        }
        
        taskCard.appendChild(taskPriority);

        let deleteBtn = document.createElement('button');
        deleteBtn.classList.add('deleteTaskBtn')
        deleteBtn.textContent = "delete";
        deleteBtn.addEventListener('click', () => {
            this.parentFolder.deleteTask(this.name, this.date)
            taskCard.remove()
        });
        taskCard.appendChild(deleteBtn)

        return taskCard;
    }
}