const myLibrary = []

function book(title, auther, pages) {
  this.title = title
  this.auther = auther
  this.read = true
  this.pages = pages
}
const addBook = document.querySelector('#addBook')
addBook.onclick = () => {
  addBookToLibrary()
}
function addBookToLibrary() {}
const dialog = document.querySelector('dialog')
const showButton = document.querySelector('dialog + button')
const closeButton = document.querySelector('dialog button')
// "Show the dialog" button opens the dialog modally
showButton.addEventListener('click', () => {
  dialog.showModal()
})

// "Close" button closes the dialog
closeButton.addEventListener('click', () => {
  dialog.close()
})
