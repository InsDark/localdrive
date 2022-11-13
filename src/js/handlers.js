const makeFolder = async (folderName) =>{
    let forData = new FormData();
    forData.append('fileName', folderName);
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
const printFolders = async () => {
    const req = await fetch(`http://localhost/fileExplorer/api/folders`)
    const res = await req.json()
    const reg = /.jpg/
    res.forEach(folder => {
        const regRes = reg.exec(folder)
        if(regRes === null) {
            const div = document.createElement('div')
            div.classList.add('file')
            div.innerHTML = `<i class='fa-solid fa-folder'></i><h3>${folder}</h3>`
            filesContainer.appendChild(div)
        } else {
            const div = document.createElement('div')
            div.classList.add('file')
            div.innerHTML = `<i class='fa-solid fa-image'></i><h3>${folder}</h3>`
            filesContainer.appendChild(div)
        }
    })
} 

printFolders()


const uploadFile = document.querySelector('#upload')
const fileUploader  = document.querySelector('#fileUploader')
fileUploader.addEventListener('click', () =>{
    let file = uploadFile.files[0]
    
    // uploaderFile(file);
})

const uploaderFile = async (file) => {
    // console.log(file.name)
    let formData = new FormData()
    formData.append('file', JSON.stringify(file.name)) 
    const req =  await fetch(`http://localhost/fileExplorer/api/upload.php`,{
        method: 'POST',
        headers: {
            'Content-Type': 'multipart/form-data', 
          },
        body: formData
    })
    // const res = await req.json();
    // console.log(res)
}

