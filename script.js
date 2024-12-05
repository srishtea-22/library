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