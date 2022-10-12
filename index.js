import Book from "./modules/books.js";
import { } from "./modules/books.js";

const listBtn = document.getElementById('call-list');
const addBooksBtn = document.getElementById('call-add-new');
const contactBtn = document.getElementById('call-contact');
const inpTitle = document.getElementById('title');
const inpAuthor = document.getElementById('author');
const listSection = document.getElementById('books');
localStorage.removeItem('randid');
const addBooksSection = document.querySelector('#add-books');
const contactSection = document.querySelector('footer');

const storage = JSON.parse(localStorage.getItem('BOOkS'));
// MY OBJECTS //
let books = [];

const checkStorage = () => {
  if (storage !== null) {
    books = JSON.parse(localStorage.getItem('BOOkS'));
  }
}
checkStorage();


const storeData = () => {
  localStorage.setItem('BOOkS', JSON.stringify(books));
};

const lastId = () => {
  let lastId = 0;
  if (books.length > 0) {
    lastId = books[books.length - 1].id;
  }
  return lastId;
};

let n = lastId();

const printBooks = () => {
  let printed = '';
  //  eslint-disable-next-line
  checkStorage();
  for (let i = 0; i < books.length; i += 1) {
    const bk = books[i];
    const bookID =books[i].id;

    printed += `
    <div class="book-section" id="${bk.id}">
      <p>${bk.title} by ${bk.author}</p>
      <button class="erase-book">Erase</button>
    </div>
    `;
  };
  listSection.innerHTML = printed;
  document.querySelectorAll('.erase-book').forEach(element => {
  element.addEventListener('click', (e) => {
    let bookId = parseInt(e.target.parentNode.id);
    console.log(`the book with id = ${bookId} will be deleted`);
    const newBooks = new Book(bookId, null, null);
    newBooks.Delete();
  
    printBooks();
  });
});
}

printBooks();

const addBook = () => {
  n += 1;
  console.log("this book's ID will be "+n)
  const newBook = new Book(n, inpTitle.value, inpAuthor.value);
  console.log('new book created:\n'+JSON.stringify(newBook));
  newBook.Add();
  console.log('books added to local storege');
  checkStorage()
  printBooks();
  console.log('books printed');
  console.log(storage);
};

const deleteBook = (e) => {
  let bookId = parseInt(e.target.parentNode.id);
  console.log(`the book with id = ${bookId} will be deleted`);
  const newBooks = new Book(bookId, null, null);
  newBooks.Delete();

  printBooks();
  
  /*document.querySelectorAll('.erase-book').forEach(element => {
    element.addEventListener('click', deleteBook);
  });*/
};


// Add books
document.querySelector('form').addEventListener('submit', addBook);


// display list section
document.getElementById('call-list').addEventListener('click', () => {
    listSection.classList.remove('hidden');
    addBooksSection.classList.add('hidden');
    contactSection.classList.add('hidden');
    listBtn.classList.add('active');
    addBooksBtn.classList.remove('active');
    contactBtn.classList.remove('active');
  });

// Display Add books Section
document.getElementById('call-add-new').addEventListener('click', () => {
    addBooksSection.classList.remove('hidden');
    addBooksBtn.classList.add('active');
    listSection.classList.add('hidden');
    contactSection.classList.add('hidden');
    listBtn.classList.remove('active');
    contactBtn.classList.remove('active');
  });

// display contact section
document.getElementById('call-contact').addEventListener('click', () => {
    contactSection.classList.remove('hidden');
    contactBtn.classList.add('active');
    listSection.classList.add('hidden');
    addBooksSection.classList.add('hidden');
    listBtn.classList.remove('active');
    addBooksBtn.classList.remove('active');
  });
