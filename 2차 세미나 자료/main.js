const items = doucument.querySelector('.items');
const itemDelete = document.querySelector('.itemDelete')
let Todo = {
    1 : 'Egg'
}

function addTodo(e) {
    console.log(e.target.value);
    const text = e.target.value;
    console.log(Todo);
    
}