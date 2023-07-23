const container = document.getElementById("container") // The main div in which everything sits.
const addBookBtn = document.getElementById("addBookBtn")
const submitBtn = document.getElementById("submitBtn")
const myModal = document.getElementById("myModal")
const overlay = document.getElementById("overlay")



addBookBtn.addEventListener("click", () => {
  myModal.classList.remove("hidden")
  overlay.classList.remove("hidden")
})

submitBtn.addEventListener("click", () => {
// Ok it does print but console log dissapears immediately- do i really need to remove defaults?


})


/*let myLibrary = [], index = 0;

function Book(name, author) {
    this.name = name
    this.author = author
}

function addBookToLibrary(name, author) {
  let book1 = new Book(name, author)
  myLibrary[index++] = book1
}

myLibrary.forEach(book => {
    console.log("Book: " + book.name + " " + book.author)  
});*/