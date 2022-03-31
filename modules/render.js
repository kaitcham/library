export default (hashKey) => {
  const pages = document.querySelectorAll('.page');
  pages.forEach((page) => {
    page.style.display = 'none';
  });
  switch (hashKey) {
    case '':
      pages[0].style.display = 'block';
      break;
    case '#home':
      pages[0].style.display = 'block';
      break;
    case '#addBook':
      pages[1].style.display = 'block';
      break;
    case '#contact':
      pages[2].style.display = 'block';
      break;

    default:
      pages[0].style.display = 'block';
      break;
  }
};
