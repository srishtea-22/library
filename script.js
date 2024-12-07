const addBookBtn = document.getElementById("addBookBtn");
const submit = document.getElementById("submitBtn");
const addBookModal = document.getElementById("addBookModal");
const form = document.getElementById('addBookForm');

const library = [];

function book(name, author, pages, isRead) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

function addToLibrary(name, author, pages, isRead){
    const newBook = new book(name, author, pages, isRead);
    library.push(newBook);
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