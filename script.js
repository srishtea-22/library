const addBookBtn = document.getElementById("addBookBtn");
const submit = document.getElementById("submitBtn");
const addBookModal = document.getElementById("addBookModal");

const library = [];

function book(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addToLibrary(name, author, pages, read){
    const newBook = new book(name, author, pages, read);
    library.push(newBook);
}

addBookBtn.addEventListener('click', () => {
    addBookModal.classList.add("active");
});

submit.addEventListener('click', () => {
    addBookModal.classList.remove("active");
});