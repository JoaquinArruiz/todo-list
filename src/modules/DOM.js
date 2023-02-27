import { Task } from "./tasks";
import { Folder, currentFolder } from "./folders";
import { folderList } from "./todo";



console.log(folderList)
console.log(currentFolder)

let foldersContainer = document.querySelector('.foldersContainer');
let taskContainer = document.querySelector('.tasks')

let header = document.getElementById("header");


Object.values(folderList).forEach(folder => { 
    let folderCard = folder.renderFolder()
    foldersContainer.appendChild(folderCard)
})

export default {};