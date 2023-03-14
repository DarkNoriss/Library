import "./style.scss";

const myLibrary = [];
const myForm = document.getElementById("library-form");
const bookList = document.getElementById("book-list");
const btnAdd = document.getElementById("btnAdd");

myForm.addEventListener("submit", submitForm);

function addBookToLibrary(newBook) {
  // add book to library and clear last list
  myLibrary.push(newBook);
  bookList.innerHTML = "";

  myLibrary.forEach((element) => {
    const list = document.createElement("li");
    const text = document.createElement("p");

    text.innerText = `${element.name}, ${element.author}, ${element.pages}`;
    list.classList.add("book");
    list.appendChild(text);
    bookList.appendChild(list);
  });
}

function submitForm(event) {
  // prevent form to send info to server
  event.preventDefault();

  // create new book then add to library
  const bookName = event.target["book-name"].value;
  const bookAuthor = event.target["book-author"].value;
  const bookPages = event.target["book-pages"].value;
  const book = {
    name: bookName,
    author: bookAuthor,
    pages: bookPages,
  };
  addBookToLibrary(book);

  // reset the form
  myForm.reset();
}
