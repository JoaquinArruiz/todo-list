import { Folder } from "./folders";
import { Task } from "./tasks";

let folderList = {};

const demo1 = new Folder('demo1')
const demo2 = new Folder('demo2')

const task1 = new Task('task11233')
const task2 = new Task('task112335')


demo1.addTask(task1)
demo2.addTask(task2)


folderList[demo1.name] = demo1
folderList[demo2.name] = demo2


let addFolderBtn = document.getElementById("addFolderBtn")

let addFolder = () => {
    
}

 
export {folderList}