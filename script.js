/**
 * Each book card should have a name, author, page
 */
const myLibrary = [];
const libraryArea = document.querySelector(".libraryArea")

class Book {
    constructor(title, author, pages, read, id) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.id = id;
    }
    info() {
            console.log(`${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`);
    }
}

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read, crypto.randomUUID())
  myLibrary.push(newBook)
}

addBookToLibrary("HP", "Row", "340", "No")
addBookToLibrary("Nap", "Tom", "440", "Yes")

function displayBooks() {
    myLibrary.forEach((book) => {
        const newBookDiv = document.createElement("div")
        const h3 = document.createElement("h3")
        h3.classList.add("bookName")
        h3.textContent = book.title
        const p1 = document.createElement("p")
        p1.classList.add("bookAuthor")
        p1.textContent = book.author
        const p2 = document.createElement("p")
        p2.classList.add("bookPages")
        p2.textContent = book.pages

        newBookDiv.appendChild(h3)
        newBookDiv.appendChild(p1)
        newBookDiv.appendChild(p2)
        
        libraryArea.appendChild(newBookDiv)
    })
}

displayBooks()