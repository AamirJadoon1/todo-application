const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');
const generateTemplate = todo => {

    const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i class="fas fa-trash-alt delete"></i>
        </li>
        `;

    list.innerHTML += html;
};

addForm.addEventListener('submit', e => {

    e.preventDefault();

    const todo = addForm.add.value.trim();

    if (todo.length) {
        generateTemplate(todo);
        addForm.reset();
    } else {
        alert("Sorry, Empty todo can't be added.");
    }
});

// delete todos
list.addEventListener('click', e => {

    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
});

/*************** search & filter **************/

// filter function
const filterTodos = term => {
    Array.from(list.children)
        .filter(todo => !todo.textContent.toLowerCase().includes(term))
        .forEach(todo => { 
            todo.classList.add('d-none');
            todo.classList.remove('d-flex');
        });

    Array.from(list.children)
        .filter(todo => todo.textContent.toLowerCase().includes(term))
        .forEach(todo => {
            todo.classList.remove('d-none');
            todo.classList.add('d-flex');
        });

};

// Keyup event
search.addEventListener('keyup', () => {
    const term = search.value.trim();
    filterTodos(term);
});
