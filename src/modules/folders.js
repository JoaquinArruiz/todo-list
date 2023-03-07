class Folder{
    constructor(name, setActive) {
        this.name = name;
        this.tasks = []
        this.setActive = setActive
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

    deleteTask(taskName) {
        this.tasks = this.tasks.filter((task) => task.name !== taskName);
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

        folderCard.setAttribute("id", this.name + ":folder")

        folderCard.addEventListener('click', () => {
            this.setActive(this.name)
        });



        return folderCard
    }
}



export {Folder}