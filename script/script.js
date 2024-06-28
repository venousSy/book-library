function book(title, auther, pages, read) {
  this.title = title
  this.auther = auther
  this.read = read
  this.pages = pages
}

const book1 = new book('ads', 'aa', 'qwe', true)

const book2 = new book('22', '22', '2', true)

const myLibrary = [
  book1,
  book2,
  book1,
  book2,
  book1,
  book2,
  book1,
  book2,
  book1,
  book2,
  book1,
  book2,

  book1,
  book2,
]
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
  myLibrary.forEach(addTheBooks)
}

addBooksToLibrary()
