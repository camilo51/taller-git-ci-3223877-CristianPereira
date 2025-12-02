window.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#addBtn').addEventListener('click', agregarItem);
})

const agregarItem = () => {
    const item = document.querySelector('#item');
    const list = document.querySelector('#listItems');
    
    if (!item.value) return alert('Ingrese un item');

    const li = document.createElement('li');
    li.innerText = item.value;
    list.appendChild(li);
    item.value = '';
}
