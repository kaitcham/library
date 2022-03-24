import render from './modules/render.js';
import { setBooksArray, addBook } from './modules/addBook.js';

const date = document.querySelector('.date-container');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const formSubmit = document.querySelector('.book-form');

/* eslint-disable no-undef */
const loadDate = () => {
  date.innerHTML = luxon.DateTime.now().toLocaleString(
    luxon.DateTime.DATETIME_MED_WITH_SECONDS,
  );
};

setInterval(loadDate, 1000);

window.addEventListener('DOMContentLoaded', () => {
  const books = JSON.parse(localStorage.getItem('booksData'));
  if (books === null) {
    const defaultArray = [
      {
        title: 'Book one',
        author: 'Kait',
      },
      {
        title: 'Book two',
        author: 'Cham',
      },
    ];
    setBooksArray(defaultArray);
  } else {
    setBooksArray(books);
  }
  addBook();
});

window.onhashchange = () => {
  render(window.location.hash);
};

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
