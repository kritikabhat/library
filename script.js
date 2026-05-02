/**
 * Each book card should have a name, author, page
 */
const myLibrary = [];
const libraryArea = document.querySelector(".libraryArea")

const showModal = document.querySelector(".showModal")
const dialog = document.querySelector("dialog")
const cancelButton = document.querySelector(".cancelModal") 
const submitBtn = document.querySelector("#submitBtn")

showModal.addEventListener("click", (e) => {
  dialog.showModal();
  dialog.closedBy = "any"
});

submitBtn.addEventListener("click", (e) => {
  const title = document.querySelector("#title")
  const author = document.querySelector("#author")
  const pages = document.querySelector("#pages")
  const readStatus = document.querySelector("#readStatus")
  const read = (readStatus.checked) ? "Yes": "No"

  console.log(title.value)
  
  e.preventDefault()
  addBookToLibrary(title.value, author.value, pages.value, read)
  dialog.close()
  console.log("Closed after adding")

})

cancelButton.addEventListener("click", () => {
  dialog.close()
  console.log("Close without doing anything")
});

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

  const newBookDiv = document.createElement("div")

  const h3 = document.createElement("h3")
  h3.classList.add("bookName")
  h3.textContent = newBook.title
  
  const p1 = document.createElement("p")
  p1.classList.add("bookAuthor")
  p1.textContent = newBook.author

  const p2 = document.createElement("p")
  p2.classList.add("bookPages")
  p2.textContent = newBook.pages
  
  newBookDiv.appendChild(h3)
  newBookDiv.appendChild(p1)
  newBookDiv.appendChild(p2)
        
  libraryArea.appendChild(newBookDiv)

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
