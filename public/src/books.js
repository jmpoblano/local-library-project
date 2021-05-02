
// Function findAuthorById will return a matching author.id within the objects' array.

function findAuthorById(authors, id) {
  for (let i = 0; i < authors.length; i++) {
    if (authors[i].id === id) {
      return authors[i];
    }
  }
};



// .find, return
// .find() function executes a function that checks whether the book id matches (strictly) to an input id.
// the return value is a book id that matches one in the object array.
function findBookById(books, id) {
  let result = books.find((book) => book.id === id);
  return result;
};


// function, =>
// The function as a whole is trying to organize the books by their borrowed status. >>>
// This makes it easy to filter whether books are checked out or not.
// => these functions are helping to compare (boolean), whether a book has been - >>>
// returned. if it is false, set it in a new array under booksOut. If true, >>>
//  set book id in booksIn.
function partitionBooksByBorrowedStatus(books) {
  
  let booksOut = books.filter((book) => book.borrows[0].returned === false);
  
  let booksIn = books.filter((book) => book.borrows[0].returned === true);
  
  let borrowedStates = [ booksOut, booksIn];
  
  return borrowedStates;
};


// function, {}
// This function is returning the name of the borrowers that have checked out the same book.
function getBorrowersForBook(book, accounts) {

  let borrowed = book.borrows;
  let result = borrowed.map((status) =>
  {
    let borrowersInfo = findAuthorById(accounts, status.id);
    borrowersInfo.returned = status.returned;
    return borrowersInfo;
    
  }).slice(0, 10)
  return result;
};

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
