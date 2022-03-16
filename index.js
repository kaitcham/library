const booksList = document.querySelector('.books-container');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const formSubmit = document.querySelector('.book-form');

let booksArray = [];

const addBook = () => {
  let booksCode = '';
  booksArray.forEach((element) => {
    const { title, author } = element;
    booksCode += `
    <div class="book">
        <p>${title}</p>
        <p>${author}</p>
        <button type="submit" onclick='removeBook("${title}")'>Remove</button>
        <hr />
    </div>
        `;
  });
  booksList.innerHTML = booksCode;
  localStorage.setItem('booksData', JSON.stringify(booksArray));
};

window.removeBook = (title) => {
  booksArray = booksArray.filter((elem) => elem.title !== title);
  addBook();
};

window.addEventListener('DOMContentLoaded', () => {
  const books = JSON.parse(localStorage.getItem('booksData'));
  if (books === null) {
    booksArray = [
      {
        title: 'Book one',
        author: 'Kait',
      },
      {
        title: 'Book two',
        author: 'Cham',
      },
    ];
  } else {
    booksArray = books;
  }
  addBook();
});

formSubmit.addEventListener('submit', (event) => {
  if (title.value === '' || author.value === '') {
    event.preventDefault();
  }
  event.preventDefault();
  const bookInput = {
    title: title.value,
    author: author.value,
  };
  booksArray.push(bookInput);
  addBook();
  title.value = '';
  author.value = '';
});
