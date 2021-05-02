
// For this function I will use the .find function and an arrow function,
// This function is meant to return an account that matches its input.
// ** for line 6, essentially I am assigning a strict truth that states that account.id matches the id.
function findAccountById(accounts, id) {
  let result = accounts.find((account) => account.id === id);
  return result;
};


// .sort, =>, ?
// .sort method will help to assign the order of when nameA and nameB will be called
// => is bahaving as a method function, This is to help assign the order of nameA and nameB.
// The function returns the accounts, with that specific order of last name, first name.
function sortAccountsByLastName(accounts) {
  accounts.sort((nameA, nameB) => nameA.name.last > nameB.name.last ? 1 : -1);
  return accounts;
};


// This function is meant to find the number of times a book has been borrowed.
// for, const, if
// The for function is going through the object books, to equal to its total number of times it has been checked out.
// const helps to assign book to equal the array number of how many times it was checked out(books[i]).
// I check for a boolean value to make sure that if the borrowed info matches with an id on its file, to then >>
// add it (total ++ adds 1 to its count).
function getTotalNumberOfBorrows(account, books) {
  let total = 0;
  for (let i = 0; i < books.length; i++) {
    const book = books[i];
    const borrowInfo = book.borrows;

    let idMatches = borrowInfo.filter((book) => book.id === account.id)
      if (idMatches.length > 0) {
        total ++;
      };
  };
  return total;
};


// This function is to check who has which book.
// .filter, .map 
//.filter method helps to check if a book borrows = 0, then to check false. >>>
// && is used to compare a boolean result. This checks that if the book borrowed has an account id that is in the system.
// .map method is running a function to set the object of book by a matching author id. >>
// if that id matches, to then run an additional function that checks if the author id matches the book's author.
function getBooksPossessedByAccount(account, books, authors) {
  let booksOut = books.filter((book) => book.borrows[0].returned === false && book.borrows[0].id === account.id);

  let newBooks = booksOut.map((book) => ( {...book, author: authors.find(author => author.id === book.authorId)} ));

  return newBooks;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
