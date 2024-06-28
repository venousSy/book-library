function book(title, auther, pages, read) {
  this.title = title
  this.auther = auther
  this.read = read
  this.pages = pages
}
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
  // looping thorgh myLibrary array
  for (book in myLibrary) {
    // creat a new div and appand it to popular div
    let books = document.getElementsByClassName('populer')
    let bookCard = document.createElement('div')
    bookCard.classList.add('bookCard')
    books[0].appendChild(bookCard)

    // adding the book information to the new created div from the object in myLibrary array
    if (book.read === true) {
      readValue = 'Yes'
    } else {
      readValue = 'No'
    }

    bookCard.innerHTML = `
              <img
                src="/assets/books/istockphoto-1166419449-1024x1024.jpg"
                alt=""
                class="book-img"
              />
              <div class="flexWraper">
                <div class="book-title">${book.title}</div>
                <div class="rate">${book.pages}</div>
              </div>
              <div class="flexWraper">
                <div class="auther">${book.auther}</div>
                <div class="download-times">${readValue}</div>
              </div>
            `
  }
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
console.log(myLibrary)
addBooksToLibrary()
