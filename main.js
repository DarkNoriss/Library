import "./style.scss";

// const myLibrary = [];
const myForm = document.querySelector(".library-form");
const modal = document.querySelector(".modal");
const btnAdd = document.querySelector(".btnAdd");

btnAdd.addEventListener("click", () => {
  modal.showModal();
});
myForm.addEventListener("submit", submitForm);

function addBookToLibrary(newBook) {
  myLibrary.push(newBook);

  // myLibrary.forEach((element) => {
  //   const list = document.createElement("li");
  //   const text = document.createElement("p");

  //   text.innerText = `${element.name}, ${element.author}, ${element.pages}`;
  //   list.classList.add("book");
  //   list.appendChild(text);
  //   bookList.appendChild(list);
  // });
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
}
