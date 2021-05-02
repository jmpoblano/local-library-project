

// This function is simply checking how many books there are.
function getTotalBooksCount(books) {
  return books.length;
}


// This function is checking how many accounts there are.
function getTotalAccountsCount(accounts) {
  return accounts.length;
}


// On this function, I will be checking the amount of books being borrowed.
function getBooksBorrowedCount(books) {
  let result = books.reduce((accumulator, book) => {
    return (accumulator + (book.borrows[0].returned === false))

  }, 0);

  return result;
}


// This will return an array of the most common genres of the books.
function getMostCommonGenres(books) {
  let commonGenres = [];

  for (let book of books) {
    const genre = commonGenres.find((currentGenre) => currentGenre.name === book.genre);

    if (genre) {
      genre.count++;
    } else {
      commonGenres.push({ name: book.genre, count: 1 });

    }

  };

  let topGenres = commonGenres.sort((countA, countB) => countA.count < countB.count ? 1 : -1);
  return topGenres.slice(0, 5);
};



// This function returns the most popular books in the library.
function getMostPopularBooks(books) {
  let mostPopular = [];

  for (let book of books) {
    const title = mostPopular.find((currentBook) => currentBook.name === book.title);

    mostPopular.push({ name: book.title, count: book.borrows.length });
  
  };

  let mostPopularLibros = mostPopular.sort((countA, countB) => countA.count < countB.count ? 1 : -1);
  return mostPopularLibros.slice(0, 5);


};


// To populate the most popular authors, this function must return an array.
// I will use .find(), .filter(), .forEach() to sort through the objects and allocate the most popular authors.

function getMostPopularAuthors(books, authors) {
  let result = [];

  let matchingAuthor = books.filter((book) => authors.find((author) => author.id === book.authorId));
    matchingAuthor.forEach((book) => {
      let author = authors.find((author) => author.id === book.authorId)
      result.push( {name: `${author.name.first} ${author.name.last}`, count: book.borrows.length} )
    });

  let finalResult = result.sort((countA, countB) => countA.count < countB.count ? 1 : -1);
  return finalResult.slice(0, 5);
   
};

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
