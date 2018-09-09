const rootNode = document.getElementById('root');

const todoItems = [
    {isDone: false, id: 12345, description: 'Todo 1'}
];
let main_page = document.getElementById('main_page');
let add_page = document.getElementById('add_page');
let modify_page = document.getElementById('modify_page');
let item_list = document.getElementById('item_list');
let save_btn_add_page = document.getElementById('save_btn_add_page');
let discription_input = document.getElementById('discription_input');
let cancel_btn_modify_page = document.getElementById('cancel_btn_modify_page');
let cancel_button_add_page = document.getElementById('cancel_button_add_page');
let add_btn = document.getElementById('add_btn');
add_btn.onclick = () => {
    window.location.hash = '/add';
    main_page.style.display = 'none';
    add_page.style.display = 'block';
}
cancel_button_add_page.onclick = () => {
    window.location.hash = '';
    main_page.style.display = 'block';
    add_page.style.display = 'none';
}

cancel_btn_modify_page.onclick = () => {
    main_page.style.display = 'block';
    modify_page.style.display = 'none';
}


save_btn_add_page.onclick = () => {
    window.location.hash = '';
    main_page.style.display = 'block';
    add_page.style.display = 'none';
    const checkbox = document.createElement('img');
    checkbox.id = 'checkbox';
    checkbox.src = 'assets/img/todo-s.png';
    item_list.appendChild(checkbox);
    const Item = document.createElement('button');
    Item.id = 'item';
    Item.className = 'Item_list';
    Item.innerHTML = discription_input.value;
    item_list.appendChild(Item);
    const removeBtn = document.createElement('img');
    removeBtn.id = 'remove_btn';
    removeBtn.src = 'assets/img/remove-s.jpg';
    item_list.appendChild(removeBtn);
    discription_input.value = '';
    checkbox.onclick = () => {
        checkbox.src = 'assets/img/done-s.png';
    }
    
}