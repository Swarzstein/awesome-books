import Book from "./books.js";

const storage = JSON.parse(localStorage.getItem('BOOkS'));
const listSection = document.getElementById('books');

let books = [];

export const checkStorage = () => {
    if (storage !== null) {
      books = JSON.parse(localStorage.getItem('BOOkS'));
    }
  }

  checkStorage();

  

  export const printBooks = () => {
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

