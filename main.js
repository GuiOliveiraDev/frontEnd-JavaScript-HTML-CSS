const button = document.getElementById('btn');    
function addParagrafo(){
    const pcontent = 'agora funciona';
    
    const newElement = document.createElement('p')
    
    newElement.textContent = pcontent;
    const add = document.body.appendChild(newElement);
}
button.onclick = addParagrafo;
