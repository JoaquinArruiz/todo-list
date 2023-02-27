import { Task } from "./tasks";
import { Folder } from "./folders";
import { folderList } from "./todo";



console.log(folderList)

let foldersContainer = document.querySelector('.foldersContainer');
let taskContainer = document.querySelector('.tasks')


Object.values(folderList).forEach(folder => { 
    let folderCard = folder.renderFolder()
    foldersContainer.appendChild(folderCard)
    folder.tasks.forEach(task => {
        let taskCard = task.renderTask()
        taskContainer.appendChild(taskCard)
    })
})

export default {};