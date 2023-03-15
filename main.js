import "./style.scss";

const myLibrary = loadData() || [];
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
  updateData();
  updateLibrary();
}

function updateLibrary() {
  myLibrary.forEach((element) => {
    const name = createP(element.name);
    const author = createP(element.author);
    const pages = createP(element.pages);

    const btnRead = createBtn("Not read");
    btnRead.style.backgroundColor = "#FF7F7F";
    btnRead.addEventListener("click", toggleRead);

    const btnRemove = createBtn("Remove");
    btnRemove.addEventListener("click", deleteDiv);

    const bookElements = {
      name: name,
      author: author,
      pages: pages,
      btnRead: btnRead,
      btnRemove: btnRemove,
    };

    putInsideDiv(bookElements);
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
    return;
  }
  event.target.style.backgroundColor = "#FF7F7F";
  event.target.innerText = "Not read";
}

function deleteDiv(event) {
  const bookName = event.target.parentNode.firstChild.innerText;

  myLibrary.forEach((element, index) => {
    if (element.name == bookName) {
      myLibrary.splice(index, 1);
      event.target.parentNode.remove();
      return updateData();
    }
  });
}

function createP(text) {
  const obj = document.createElement("p");
  obj.innerText = text;
  return obj;
}

function createBtn(text) {
  const obj = document.createElement("button");
  obj.innerText = text;
  obj.classList.add("rounded");
  return obj;
}

function putInsideDiv(newDiv) {
  bookGrid.innerHTML = "";

  const bookDiv = document.createElement("div");
  bookDiv.classList.add("book");
  bookDiv.classList.add("rounded");

  Object.values(newDiv).forEach((element) => {
    bookDiv.appendChild(element);
  });

  bookGrid.appendChild(bookDiv);
}

function loadData() {
  const booksArrayStr = localStorage.getItem("booksarray");
  const booksArray = JSON.parse(booksArrayStr);
  return booksArray;
}

function updateData() {
  localStorage.setItem("booksarray", JSON.stringify(myLibrary));
}

updateLibrary();
