import render from './modules/render.js';
import { setBooksArray, addBook } from './modules/addBook.js';
import { DateTime } from './modules/luxon.js';

const date = document.querySelector('.date-container');

/* eslint-disable no-undef */
const loadDate = () => {
  date.innerHTML = DateTime.now().toLocaleString(
    DateTime.DATETIME_MED_WITH_SECONDS,
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
