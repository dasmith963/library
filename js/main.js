const bookCards = document.querySelector(".book-cards");
const myLibrary = [];

function Book(title, author, totalPages, status){
  this.title = title;
  this.author = author;
  this.totalPages = totalPages;
  this.status = status;
}

function addBookToLibrary(title, author, totalPages, status){
  myLibrary.push(new Book(title, author, totalPages, status));
}

function createBookCard(){
  myLibrary.forEach(book => {
    const card = document.createElement("div");
    const bookTitle = document.createElement("h2");
    const bookAuthor = document.createElement("p");
    const bookLength = document.createElement("p");

    card.className = "card";
    bookTitle.textContent = `${book.title}`;
    bookAuthor.textContent = `by ${book.author}`;
    bookLength.textContent = `Pages: ${book.totalPages}`;

    card.appendChild(bookTitle);
    card.appendChild(bookAuthor);
    card.appendChild(bookLength);
    bookCards.appendChild(card);
  })
}