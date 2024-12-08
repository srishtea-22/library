const addBookBtn = document.getElementById("addBookBtn");
const submit = document.getElementById("submitBtn");
const addBookModal = document.getElementById("addBookModal");
const form = document.getElementById('addBookForm');

const library = [];

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

function addToLibrary(title, author, pages, isRead){
    const newBook = new Book(title, author, pages, isRead);
    library.push(newBook);
    createBookCard(newBook);
}

addBookBtn.addEventListener('click', () => {
    addBookModal.classList.add("active");
});

submit.addEventListener('click', () => {
    addBookModal.classList.remove("active");
});

submit.addEventListener('click', (event) => {
    event.preventDefault();
    
    const title = form.elements['title'].value;
    const author = form.elements['author'].value;
    const pages = form.elements['pages'].value;
    const isRead = form.elements['isRead'].checked;
    
    addToLibrary(title, author, pages, isRead);
    
    form.reset();
});

function createBookCard(book){
    const bookCard = document.createElement('div');
    const bookInfo = document.createElement('div');
    const title = document.createElement('p');
    const author = document.createElement('p');
    const pages = document.createElement('p');
    const buttonGroup = document.createElement('div');
    const readBtn = document.createElement('button');
    const removeBtn = document.createElement('button');

    bookCard.classList.add("book-card");
    bookInfo.classList.add('book-info');
    bookInfo.append(title, author, pages);
    buttonGroup.classList.add('btn-group');
    buttonGroup.append(readBtn, removeBtn);
    bookCard.append(bookInfo, buttonGroup);
    title.textContent = `${book.title}`
    author.textContent = `by ${book.author}`
    pages.textContent = `${book.pages} pages`
    removeBtn.textContent = 'Remove'
    removeBtn.classList.add("remove-btn");

    if (book.isRead) {
        readBtn.textContent = "Read";
        readBtn.classList.add('btn-green');
    }
    else {
        readBtn.textContent = "Not read";
        readBtn.classList.add('btn-red');
    }

    const bookGrid = document.getElementById('bookGrid');
    bookGrid.appendChild(bookCard);
}