const booksList = document.querySelector('.books-container');

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

export { setBooksArray, addBook };
