const storage = JSON.parse(localStorage.getItem('BOOkS'));
let books = [];

const checkStorage = () => {
    if (storage !== null) {
      books = JSON.parse(localStorage.getItem('BOOkS'));
    }
  }
  checkStorage();

export default class Book {
  constructor(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
  }

  Add = () => {
    books.push({ id: this.id, title: this.title, author: this.author });
    console.log('this is the books array:\n'+JSON.stringify(books));
    localStorage.setItem('BOOkS', JSON.stringify(books));
    console.log('saved in local storage:');
    checkStorage();
};

  Delete = () => {
    checkStorage();
    books = books.filter((item) => {
      for (let i = 0; i < books.length; i += 1) {
        if (item.id === this.id) {
          return false;
        }
        return true;
      }
    });
    localStorage.setItem('BOOkS', JSON.stringify(books));
  };
}

