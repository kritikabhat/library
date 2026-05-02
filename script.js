const myLibrary = [];
const libraryArea = document.querySelector(".libraryArea")

const showModal = document.querySelector(".showModal")
const dialog = document.querySelector("dialog")
const cancelButton = document.querySelector(".cancelModal") 
const submitBtn = document.querySelector("#submitBtn")

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

showModal.addEventListener("click", (e) => {
  dialog.showModal();
  dialog.closedBy = "any"
});

// Handles adding new book via modal
submitBtn.addEventListener("click", (e) => {
  const readStatus = document.querySelector("#readStatus")
  const read = (readStatus.checked) ? "Yes": "No"

  e.preventDefault()
  addBookToLibrary(
    document.getElementById("title").value, 
    document.getElementById("author").value, 
    document.getElementById("pages").value,
    read)

  dialog.close()
  document.getElementById("bookForm").reset()
  console.log("Book added via modal")
})

cancelButton.addEventListener("click", () => {
  dialog.close()
  console.log("Close without doing anything")
});

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read, crypto.randomUUID())
  myLibrary.push(newBook)
  addBookToDOM(title, author, pages, read)
}

function addBookToDOM(title, author, pages, read) {
  const newBookDiv = document.createElement("div")
  const h3 = document.createElement("h3")
  const p1 = document.createElement("p")
  const p2 = document.createElement("p")

  h3.classList.add("bookName")
  h3.textContent = title
  
  p1.classList.add("bookAuthor")
  p1.textContent = author
  
  p2.classList.add("bookPages")
  p2.textContent = pages
  
  newBookDiv.appendChild(h3)
  newBookDiv.appendChild(p1)
  newBookDiv.appendChild(p2)
  libraryArea.appendChild(newBookDiv)
}

/* Can reuse this for some other method

function displayBooks() {
    myLibrary.forEach((book) => { 
    })
} */
