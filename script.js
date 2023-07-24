const container = document.getElementById("container") // The main div in which everything sits.
const addBookBtn = document.getElementById("addBookBtn")
const submitBtn = document.getElementById("submitBtn")
const myModal = document.getElementById("myModal")
const overlay = document.getElementById("overlay")

const displayBooks = document.getElementById("displayBooks")
let bookCard, bookDetails, bookIndex = 3

const books = document.querySelectorAll(".bookCard")
let remove = document.querySelectorAll(".remove") // array of all remove buttons

// I guess issue with this loop is that the remove array above is not dynamic. It only takes the original books. How to fix?
// I guess update this remove array every time a book is added to library. and delete also?
for (let i = 0; i < remove.length; i++) { // This removes cards but it is not working for newly added books
  console.log("Prints once for each remove button on homepage, but not for new ones")
  console.log("Element " + JSON.stringify(remove[i]))

  remove[i].addEventListener("click", () => {
    console.log("value: " + remove[i].dataset.removeIndex)
    const parent = remove[i].parentElement
    parent.classList.add("hidden")
  })
}


/* remove.forEach((element) => {
  console.log("Prints once for each remove button on homepage, but not for new ones")
  console.log("Element " + JSON.stringify(element))

  element.addEventListener("click", () => {
    console.log("Damn")
    console.log("print: " + )

    
  })
}) */

/* books.forEach((selectedBook) => {
  console.log("inside: " + selectedBook.dataset.bookNumber) // Works. Give index of bookCard.

  // remove = document.getElementById("remove")
  // remove = document.querySelector('data-remove-index[selectedBook.dataset.bookNumber]');
  
  /* remove.addEventListener("click", () => {
    console.log("Damn")
    console.log("inside: " + selectedBook.dataset.bookNumber)
  }) */
  /* remove.addEventListener("click", (bookValue) => {
    console.log("inside: " + bookValue.dataset)
  })
}) */

function addBookToLibrary(title, author, pages, readStatus) {
  let arr = [title, author, pages]

  bookCard = document.createElement('div')
  bookCard.classList.add("bookCard")

  arr.forEach(bookDetail => {
    bookDetails = document.createElement('div')
    bookDetails.classList.add("title")
    bookDetails.textContent = bookDetail
    bookCard.appendChild(bookDetails)
  })

  bookDetails = document.createElement('button') // For the button div
  bookDetails.classList.add("button")
  if (readStatus === true) { 
    bookDetails.classList.add("read")
    bookDetails.textContent = "Read"
  } else {
    bookDetails.classList.add("unread")
    bookDetails.textContent = "Unread"
  }
  bookCard.appendChild(bookDetails)

  bookDetails = document.createElement('button') // Remove button
  bookDetails.textContent = "Remove"
  bookDetails.classList.add("button")
  bookDetails.classList.add("remove")
  bookDetails.setAttribute("data-remove-index", bookIndex++)
  bookCard.appendChild(bookDetails)

  displayBooks.appendChild(bookCard) // This makes div bookCard
}

const mainMethod = () => {
  addBookBtn.addEventListener("click", () => {
    myModal.classList.remove("hidden")
    overlay.classList.remove("hidden")
  })

  submitBtn.addEventListener("click", () => {
    const title = document.getElementById("title")
    const author = document.getElementById("author")
    const pages = document.getElementById("pages")
    const readStatus = document.getElementById("read")
  
    addBookToLibrary(title.value, author.value, pages.value, readStatus.checked)
  
    myModal.classList.add("hidden")
    overlay.classList.add("hidden")
  })
}

mainMethod()