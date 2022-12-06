let id = 0;

document.getElementById('subBtn').addEventListener('click', () => {
    let table = document.getElementById('list');
    let row = table.insertRow(1);
    row.setAttribute('id', `${id}`);
    row.insertCell(0).innerHTML = document.getElementById('toDoTask').value;
    let actions = row.insertCell(1);
    actions.appendChild(deleteButton(id++));
    toDoTask.value = '';
})

function deleteButton(id) {
    let subBtn = document.createElement('button');
    subBtn.className = 'btn btn-dark';
    subBtn.id;
    subBtn.innerHTML = 'Delete';
    subBtn.onclick = () => {
        let deleteItem = document.getElementById(`${id}`);
        deleteItem.parentNode.removeChild(deleteItem);
    };
    return subBtn;
}