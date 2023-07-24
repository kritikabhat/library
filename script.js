const myModal = document.getElementById("myModal")
const overlay = document.getElementById("overlay")
const library = []

function Book (title, author, pages, readStatus) {
  this.title = title
  this.author = author
  this.pages = pages
  this.readStatus = readStatus
}

const addToLibrary = (title, author, pages, readStatus) => {
  if (findBook(title) === false) {
    const book = new Book(title, author, pages, readStatus)
    library.push(book)
    addBookToDOM(book)
  } else {
    alert("Book already exists in library!")
  }
}

const findBook = (title) => {
  if (library.length === 0) return false 
  for (let i = 0; i < library.length; i++) {
    if (library[i].title === title) {
      return title
    }
  }
  return false 
}
const printAllBooks = () => {
  for (let i = 0; i < library.length; i++) {
    console.log("Book: " + library[i].title)
  }
}

const addBookToDOM = (book) => {
  const booksDisplay = document.getElementById("booksDisplay")
  let bookCard, bookInfo

  let arr = ["title", "author", "pages"]
  
  bookCard = document.createElement('div')
  bookCard.classList.add("bookCard")

  arr.forEach(item => {
    bookInfo = document.createElement('div')
    bookInfo.classList.add(item)
    bookInfo.textContent = book[item]
    bookCard.appendChild(bookInfo)
  })

  bookInfo = document.createElement('button')
  bookInfo.classList.add("button")
  bookInfo.classList.add(book.readStatus)
  bookInfo.textContent = book.readStatus
  bookCard.appendChild(bookInfo)

  bookInfo = document.createElement('button')
  bookInfo.textContent = "remove"
  bookInfo.classList.add("remove")
  bookInfo.classList.add("button")
  bookCard.appendChild(bookInfo)
  
  booksDisplay.appendChild(bookCard)
}

const handleSubmitBtn = () => {
  const title = document.getElementById("title")
  const author = document.getElementById("author")
  const pages = document.getElementById("pages")
  const readStatus = document.getElementById("read")
  if (title.value === "" || author.value === "") {
    alert("Both Title and Author are mandatory fields.")
    return
  }
  if (readStatus.checked) 
    addToLibrary(title.value, author.value, pages.value, "read")
  else
    addToLibrary(title.value, author.value, pages.value, "unread")

  closeModal()
  resetModal(title, author, pages, readStatus)
}

const closeModal = () => {
  myModal.classList.add("hidden")
  overlay.classList.add("hidden")
}

const removeFromLibrary = (title) => {
  if (library.length === 0 || findBook(title) === false) return 

  for (let i = 0; i < library.length; i++) {
    if (library[i].title === title) library.splice(i, 1)
  }
}

const resetModal = (title, author, pages, readStatus) => {
  title.value = ""
  author.value = ""
  pages.value = ""
  title.placeholder = "Title"
  author.placeholder = "Author"
  pages.placeholder = "No. of Pages"
  readStatus.checked = false
}

const mainMethod = () => {
  const addBookBtn = document.getElementById("addBookBtn")
  const submitBtn = document.getElementById("submitBtn")

  addBookBtn.addEventListener("click", () => {
    myModal.classList.remove("hidden")
    overlay.classList.remove("hidden")
  })
  addToLibrary("Harry Potter and the Order of Phoenix", "J.K. Rowling", "766", "read")
  addToLibrary("The Hobbit", "J.R.R. Tolkien", "310", "unread")
  submitBtn.addEventListener("click", handleSubmitBtn)

  document.addEventListener("keydown", (e) => {
    console.log(e.key)
    if (e.key === "Escape") closeModal()
  })

  const bookDisplay = document.getElementById("booksDisplay")
  bookDisplay.addEventListener("click", (e) => {
    if (e.target.textContent === "remove") {
      const titleToDelete = e.target.parentNode.firstChild.textContent
      if (confirm("Are you sure you want to delete " + titleToDelete)) {
        removeFromLibrary(titleToDelete)
        e.target.parentNode.classList.add("hidden")
      }
    }
  })
}
mainMethod()
