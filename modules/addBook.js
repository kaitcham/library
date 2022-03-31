const booksList = document.querySelector('.books-container');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const formSubmit = document.querySelector('.book-form');

let booksArray = [];

const addBook = () => {
  let booksCode = '';
  booksArray.forEach((element, index) => {
    const { title, author } = element;
    if (index % 2 === 0) {
      booksCode += `
        <div class="book changeColor">
            <div class="sub-book">
              <p>${title}</p>
              <p>${author}</p>
            </div>
            <button type="submit" class="delete" onclick='removeBook("${title}")'>Remove</button>
        </div>
            `;
    } else {
      booksCode += `
        <div class="book">
          <div class="sub-book">
            <p>${title}</p>
            <p>${author}</p>
          </div>
          <button type="submit" class="delete" onclick='removeBook("${title}")'>Remove</button>
        </div>
            `;
    }
  });
  booksList.innerHTML = booksCode;
  localStorage.setItem('booksData', JSON.stringify(booksArray));
};

const setBooksArray = (value) => {
  booksArray = value;
};

window.removeBook = (title) => {
  setBooksArray(booksArray.filter((elem) => elem.title !== title));
  addBook();
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

export { setBooksArray, addBook };
