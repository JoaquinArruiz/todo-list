import { Task } from "./tasks";
import { Folder } from "./folders";
import { folderList, currentFolder } from "./todo";



console.log(folderList)

let foldersContainer = document.querySelector('.foldersContainer');
let taskContainer = document.querySelector('.tasks');

let header = document.getElementById("header");

header.addEventListener('click', () => {
    console.log(folderList[currentFolder].tasks)
})


Object.values(folderList).forEach(folder => { 
    let folderCard = folder.renderFolder()
    foldersContainer.appendChild(folderCard)
})

export default {};