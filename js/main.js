const addBookBtn = document.querySelector(".add-book-btn");
const bookCards = document.querySelector(".book-cards");
const formModal = document.querySelector(".form-modal");
const closeBtn = document.querySelector(".close-btn");
const overlay = document.querySelector(".overlay");
const form = document.querySelector("form");
let myLibrary = [];

document.addEventListener("keydown", handleKeyboard);
addBookBtn.addEventListener("click", openFormModal);
closeBtn.addEventListener("click", closeFormModal);
overlay.addEventListener("click", closeFormModal);
form.addEventListener("submit", addBookToLibrary);

class Book {
  constructor(title, author, totalPages, status) {
    this.title = title;
    this.author = author;
    this.totalPages = totalPages;
    this.status = status;
  }
}

function addBookToLibrary(e) {
  e.preventDefault();
  let title = document.querySelector("#book-title").value;
  let author = document.querySelector("#book-author").value;
  let totalPages = document.querySelector("#book-length").value;
  let status = document.querySelector("#book-status").checked ? "Read" : "Unread";

  myLibrary.push(new Book(title, author, totalPages, status));
  createBookCard();
  closeFormModal();
}

function createBookCard() {
  bookCards.innerHTML = "";

  myLibrary.forEach((book, index) => {
    const card = document.createElement("div");
    card.className = "card";
    card.setAttribute("data-id", index);

    const bookTitle = document.createElement("h2");
    bookTitle.textContent = `${book.title}`;

    const bookAuthor = document.createElement("p");
    bookAuthor.textContent = `By: ${book.author}`;

    const bookLength = document.createElement("p");
    bookLength.textContent = `Pages: ${book.totalPages}`;

    const bookStatus = document.createElement("p");
    bookStatus.textContent = `Status: ${book.status}`;

    const btnContainer = document.createElement("div");
    btnContainer.className = "btn-container";

    const readBtn = document.createElement("button");
    book.status === "Read"
      ? readBtn.textContent = "Unread"
      : readBtn.textContent = "Read";
    readBtn.addEventListener("click", toggleStatus);

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", deleteBookCard);

    btnContainer.append(readBtn, deleteBtn);
    card.append(bookTitle, bookAuthor, bookLength, bookStatus, btnContainer);
    bookCards.appendChild(card);
  })
}

function toggleStatus(e) {
  const index = e.target.closest(".card").dataset.id;
  myLibrary[index].status === "Read"
    ? myLibrary[index].status = "Unread"
    : myLibrary[index].status = "Read";
  createBookCard();
}

function deleteBookCard(e) {
  const index = e.target.closest(".card").dataset.id;
  myLibrary.splice(index, 1);
  createBookCard();
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

function handleKeyboard(e) {
  if (e.key === "Escape") {
    e.preventDefault()
    closeFormModal();
  }
}