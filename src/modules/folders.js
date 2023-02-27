

class Folder{
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

        folderCard.addEventListener('click', () => {
            currentFolder = this.name
            folderCard.classList.add('active')
        })

        return folderCard
    }
}

let currentFolder

export {currentFolder, Folder}