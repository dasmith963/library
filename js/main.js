const addBookBtn = document.querySelector(".add-book-btn");
const bookCards = document.querySelector(".book-cards");
const formModal = document.querySelector(".form-modal");
const closeBtn = document.querySelector(".close-btn");
const overlay = document.querySelector(".overlay");
const form = document.querySelector("form");
const myLibrary = [];

addBookBtn.addEventListener("click", openFormModal);
closeBtn.addEventListener("click", closeFormModal);
overlay.addEventListener("click", closeFormModal);

function Book(title, author, totalPages, status) {
  this.title = title;
  this.author = author;
  this.totalPages = totalPages;
  this.status = status;
}

function addBookToLibrary(title, author, totalPages, status) {
  myLibrary.push(new Book(title, author, totalPages, status));
}

function createBookCard() {
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

function openFormModal() {
  formModal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

function closeFormModal() {
  formModal.classList.add("hidden");
  overlay.classList.add("hidden");
  form.reset();
}