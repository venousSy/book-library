function book(title, auther, pages, read) {
  this.title = title
  this.auther = auther
  this.read = read
  this.pages = pages
}

const myLibrary = []
// dialog logic
;(() => {
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
})()
let arrayCounter = 0
const addBooksToLibrary = () => {
  // creat a new div and appand it to popular div
  const addTheBooks = (boock) => {
    let books = document.getElementsByClassName('populer')
    let bookCard = document.createElement('div')
    bookCard.classList.add('bookCard')
    books[0].appendChild(bookCard)

    // adding the book information to the new created div from the object in myLibrary array
    if (boock.read === true) {
      readValue = 'Yes'
    } else {
      readValue = 'No'
    }

    bookCard.innerHTML = `<img
                src="assets/books/istockphoto-1166419449-1024x1024.jpg"
                alt=""
                class="book-img"
              />
              <div class="flexWraper">
                <div class="book-title">${boock.title}</div>
                <div class="rate">${boock.pages}</div>
              </div>
              <div class="flexWraper">
                <div class="auther">${boock.auther}</div>
                <div class="download-times">${readValue}</div>
              </div>
            `
  }
  // looping thorgh myLibrary array

  addTheBooks(myLibrary[arrayCounter])
  arrayCounter += 1
}

formSubmit = document.getElementById('bookSubmit')
const getDataToArray = (event) => {
  event.preventDefault()
  const formInput = event.target
  const title = formInput.title.value
  const auther = formInput.auther.value
  const pages = formInput.pages.value
  const read = formInput.read.value

  const bookCard = new book(title, auther, pages, read)

  myLibrary.push(bookCard)

  addBooksToLibrary()
}
formSubmit.addEventListener('submit', getDataToArray)
