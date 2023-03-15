import "./style.scss";

const myLibrary = [];
const myForm = document.querySelector(".library-form");
const modal = document.querySelector(".modal");
const btnAdd = document.querySelector(".btnAdd");
const bookGrid = document.querySelector(".book-grid");

btnAdd.addEventListener("click", () => {
  modal.showModal();
});
myForm.addEventListener("submit", submitForm);

function addBookToLibrary(newBook) {
  myLibrary.push(newBook);
  bookGrid.innerHTML = "";

  myLibrary.forEach((element) => {
    const textName = document.createElement("p");
    textName.innerText = `${element.name}`;

    const textAuthor = document.createElement("p");
    textAuthor.innerText = `${element.author}`;

    const textPages = document.createElement("p");
    textPages.innerText = `${element.author}`;

    const bookDiv = document.createElement("div");
    bookDiv.classList.add("book");

    bookDiv.appendChild(textName);
    bookDiv.appendChild(textAuthor);
    bookDiv.appendChild(textPages);

    bookGrid.appendChild(bookDiv);
  });
}

function submitForm(event) {
  const bookName = event.target["book-name"].value;
  const bookAuthor = event.target["book-author"].value;
  const bookPages = event.target["book-pages"].value;
  const book = {
    name: bookName,
    author: bookAuthor,
    pages: bookPages,
  };
  addBookToLibrary(book);

  myForm.reset();
}
