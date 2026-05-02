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
    toggleReadStatus(readStatus) {
        (readStatus === "Read") ? this.read = "Unread" : this.read = "Read";
    }
}

showModal.addEventListener("click", (e) => {
  dialog.showModal();
  dialog.closedBy = "any"
});

// Handles adding new book via modal
submitBtn.addEventListener("click", (e) => {
  const readStatus = document.querySelector("#readStatus")
  const read = (readStatus.checked) ? "Read": "Unread"

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
  const id = crypto.randomUUID()
  const newBook = new Book(title, author, pages, read, id)
  myLibrary.push(newBook)
  addBookToDOM(title, author, pages, read, id)
}

function addBookToDOM(title, author, pages, read, id) {
  const newBookDiv = document.createElement("div")
  const h3 = document.createElement("h3")
  const p1 = document.createElement("p")
  const p2 = document.createElement("p")
  const removeBookBtn = document.createElement("button")
  const readStatus = document.createElement("button")

  h3.classList.add("bookName")
  h3.textContent = title
  h3.dataset.id = id
  
  p1.classList.add("bookAuthor")
  p1.textContent = author
  
  p2.classList.add("bookPages")
  p2.textContent = pages

  removeBookBtn.classList.add("removeBookBtn")
  removeBookBtn.textContent = "Remove Book"

  readStatus.classList.add("readStatus")
  if (read === "Read") {
    readStatus.textContent = "Read"
    readStatus.style.backgroundColor = "rgb(80, 200, 120, 0.7)"
  } else {
    readStatus.textContent = "Unread"
    readStatus.style.backgroundColor = "rgb(240, 128, 128, 0.5)"
  }
  
  newBookDiv.appendChild(h3)
  newBookDiv.appendChild(p1)
  newBookDiv.appendChild(p2)
  newBookDiv.appendChild(removeBookBtn)
  newBookDiv.appendChild(readStatus)
  libraryArea.appendChild(newBookDiv)
}

// Handles book removal and updates readStatus
libraryArea.addEventListener("click", (e) => {
  if (myLibrary.length === 0) return
  const id = e.target.parentNode.firstChild.dataset.id
  
  for (let i = 0; i < myLibrary.length; i++) {
    if (myLibrary[i].id === id) {
      if (e.target.textContent === "Remove Book")
        deleteBook(e, i, id)

      if (e.target.classList.contains("readStatus"))
        toggleReadStatus(e, i, id)
    }
  }
})

function deleteBook(e, i, id) {
  if(confirm("Are you sure you want to delete this book?")) {
    myLibrary.splice(i, 1)
    e.target.parentNode.remove()
  }
} 

function toggleReadStatus(e, i, id) {
  if (e.target.textContent === "Read") {
    if(confirm(`Are you sure you want to mark this book as "Unread"?`)) {
      myLibrary[i].toggleReadStatus(e.target.textContent)
      e.target.parentNode.lastChild.textContent = "Unread"
      e.target.parentNode.lastChild.style.backgroundColor = "rgb(240, 128, 128, 0.5)"
    }
  } else {
    if(confirm(`Are you sure you want to mark this book as "Read"?`)) {
      myLibrary[i].toggleReadStatus(e.target.textContent)
      e.target.parentNode.lastChild.textContent = "Read"
      e.target.parentNode.lastChild.style.backgroundColor = "rgb(80, 200, 120, 0.7)"
    }
  }
}

addBookToLibrary("Harry Potter & Philosopher's Stone", "J.K. Rowling", "340", "Read")
addBookToLibrary("Harry Potter & Chamber of Secrets", "J.K. Rowling", "251", "Unread")
