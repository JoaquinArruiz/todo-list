export class Folder{
    constructor(name) {
        this.name = name;
        this.tasks = [];
    }

    setFolderName(name){
        this.name = name;
    }
    
    setTasks() {
        this.tasks = tasks;
    }

    addTask(task) {
        return this.tasks.push(task);
    }

    deleteTask(task) {
        this.tasks = this.tasks.filter((task) => task.name !== task);
    }

    getTasks() {
        return this.tasks;
    }
    

    renderFolder() {
        let folderCard = document.createElement('div');
        folderCard.classList.add('folderCard');

        let folderName = document.createElement('h1');
        folderName.textContent = this.name;
        folderCard.appendChild(folderName);

        return folderCard
    }
}