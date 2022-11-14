let currentPath = '';
const makeFolder = async (folderName) =>{
    let forData = new FormData();
    forData.append('fileName', `${currentPath}/${folderName}`);
    const req = await fetch(`http://localhost/fileExplorer/api/post.php`, {
		method: 'POST',
        body: forData
	})
    const res = await req.json();
    if(res[0] === true){
        printFolders()
        filesContainer.innerHTML = ' '
    }
}
const button = document.querySelector('button');
const input = document.querySelector('input');
button.addEventListener('click', () => {
    let folderName = input.value;
    makeFolder(folderName)
})
const filesContainer = document.querySelector('.files-container')
const printFolders = async (path = '') => {
    if(path != ''){
        currentPath = path
    } else{
        currentPath = ''
    }
    const req = await fetch(`http://localhost/fileExplorer/api/${currentPath}`)
    const res = await req.json()
    if(res) {
        filesContainer.innerHTML = ''
    }
    const reg = /.jpg/
    res.forEach(folder => {
        const regRes = reg.exec(folder)
        if(regRes === null) {
            if(folder == 'up'){
                const div = document.createElement('div')
                div.classList.add('file', 'up')
                div.innerHTML = `<i class="fa-regular fa-folder-open"></i><h3>Go ${folder}</h3>`
                filesContainer.appendChild(div)
            } else{
                const div = document.createElement('div')
                div.classList.add('file', 'folder')
                div.innerHTML = `<i class='fa-solid fa-folder'></i><h3>${folder}</h3>`
                filesContainer.append(div)
            }
        } else {
            const div = document.createElement('div')
            div.classList.add('file', 'image')
            div.innerHTML = `<i class='fa-solid fa-image'></i><h3>${folder}</h3>`
            filesContainer.appendChild(div)
        }
    })
} 
document.addEventListener('click', (e)=>{
    if(e.target.classList.contains('folder')){
        let folderName = e.target.children[1].textContent;
        currentPath += `${folderName}/`
        printFolders(currentPath)
    }
    if(e.target.classList.contains('up')){
        let reg = /(\/)/g
        let iterator = currentPath.matchAll(reg)
        let indexes = Array.from(iterator)
        let allIndexes = [];
        indexes.forEach(slashIndex => {
            const {index} = slashIndex
            allIndexes.push(index)
        })
        if(allIndexes.length == 1 || allIndexes.length == 0) {
            currentPath = ''
        } else{

            let indexStart = allIndexes[allIndexes.length-2]
            currentPath = currentPath.slice(0, indexStart+1)
        }
        printFolders(currentPath)
    }
})

printFolders()