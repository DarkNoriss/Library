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
    textPages.innerText = `${element.pages}`;

    const btnRead = document.createElement("button");
    btnRead.innerText = "Not read";
    btnRead.classList.add("rounded");
    btnRead.style.backgroundColor = "#FF7F7F";
    btnRead.addEventListener("click", toggleRead);

    const btnRemove = document.createElement("button");
    btnRemove.innerText = "Remove";
    btnRemove.classList.add("rounded");
    btnRemove.addEventListener("click", deleteDiv);

    const bookDiv = document.createElement("div");
    bookDiv.classList.add("book");
    bookDiv.classList.add("rounded");

    bookDiv.appendChild(textName);
    bookDiv.appendChild(textAuthor);
    bookDiv.appendChild(textPages);
    bookDiv.appendChild(btnRead);
    bookDiv.appendChild(btnRemove);

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

function toggleRead(event) {
  const btnColor = event.target.style.backgroundColor;

  if (btnColor == "rgb(255, 127, 127)") {
    event.target.style.backgroundColor = "#57F287";
    event.target.innerText = "Read";
  } else {
    event.target.style.backgroundColor = "#FF7F7F";
    event.target.innerText = "Not read";
  }
}

function deleteDiv(event) {
  const bookName = event.target.parentNode.firstChild.innerText;

  myLibrary.forEach((element, index) => {
    console.log(element);
    if (element.name == bookName) {
      myLibrary.splice(index, 1);
      event.target.parentNode.remove();
    }
  });
}
