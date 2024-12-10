// script.js

// DOM Elements
const searchBar = document.getElementById('search-bar');
const addBookForm = document.getElementById('add-book-form');
const bookList = document.getElementById('book-list').querySelector('tbody');

// Book Array
let books = [];

// Function to Render Books
function renderBooks(filter = '') {
  bookList.innerHTML = '';
  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(filter.toLowerCase()) ||
    book.author.toLowerCase().includes(filter.toLowerCase())
  );

  filteredBooks.forEach((book, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.genre}</td>
      <td class="action-buttons">
        <button onclick="deleteBook(${index})">Delete</button>
      </td>
    `;
    bookList.appendChild(row);
  });
}

// Function to Add a Book
addBookForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.getElementById('book-title').value;
  const author = document.getElementById('book-author').value;
  const genre = document.getElementById('book-genre').value;

  books.push({ title, author, genre });
  renderBooks();

  // Clear Form
  addBookForm.reset();
});

// Function to Delete a Book
function deleteBook(index) {
  books.splice(index, 1);
  renderBooks();
}

// Search Functionality
searchBar.addEventListener('input', (e) => {
  renderBooks(e.target.value);
});

// Initial Render
renderBooks();
