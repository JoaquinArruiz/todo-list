
class Folder{
    constructor(name) {
        this.name = name;
        this.tasks = [];
    }
    
}

let foldersContainer = document.querySelector('.foldersContainer')


let demoFolder1 = new Folder('DemoFolder1');
let demoFolder2 = new Folder('DemoFolder2');
let demoFolder3 = new Folder('DemoFolder3');
let folderList = [demoFolder1, demoFolder2, demoFolder3];


let getFolder = () => {
    const name = document.getElementById('folder_name').value;
    return new Folder(name);
}

let createFolderCard = (folder) => {
    let folderCard = document.createElement('div');
    folderCard.classList.add('folderCard');

    let folderName = document.createElement('h1');
    folderName.textContent = folder.name;
    folderCard.appendChild(folderName);
    
    let delBtn = document.createElement('button');
    delBtn.classList.add('folderBtn');
    delBtn.textContent = '🗑️';
    
    delBtn.addEventListener('click', () => {
        let index = folderList.indexOf(folder);
        folderList.splice(index, 1);
        foldersContainer.removeChild(folderCard)
    });

    folderCard.appendChild(delBtn);

    folderCard.addEventListener('click', () => {
        let currentFolder = folderList.indexOf(folder)
        removeAllActiveFolders()
        folderCard.classList.add("activeFolder")
    })


    return folderCard;
}

let removeAllActiveFolders = () => {
    let allFolders = document.querySelectorAll('.folderCard')
    allFolders.forEach(folder => {
        folder.classList.remove("activeFolder")
    })
}

function addFolderToList () {  
    let newFolder = getFolder();
    if (folderList.some(e => e.name === newFolder.name)) {
        return window.alert("Folder name already used")
    }
    folderList.push(newFolder);
    let newFolderCard = createFolderCard(newFolder);
    foldersContainer.appendChild(newFolderCard);
    console.log(folderList)
}

const addFolderBtn = document.getElementById('addFolderBtn');

addFolderBtn.addEventListener('click', (e) =>{
    e.preventDefault();
    addFolderToList();
})



let renderFolders = () =>{
    folderList.forEach(folder => {
        let folderCard = createFolderCard(folder)
        foldersContainer.append(folderCard)
    })
}

export {renderFolders, folderList};