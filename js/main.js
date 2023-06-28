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