function getTotalBooksCount(books) {
  return books.reduce((totalBook, currentBook) => {
    if (currentBook){
      totalBook ++
      return totalBook
    }
  }, 0)
 
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}

function getBooksBorrowedCount(books) {
  let result = 0;
  for (let i = 0; i < books.length; i++){
    const borrows = books[i].borrows;
    const [first] = borrows;
    const borrowedStatus = first.returned;
    if (borrowedStatus === false){
      result += 1
    }
  }
  return result
}





function getMostCommonGenres(books) {
  let result = books.reduce((books, book) => {
    let genre = book.genre
    if (books[genre]){
      books[genre]+= 1
    } else {
      books[genre] = 1
    }
    return books
  }, {})
  const sortedResult = sortedObjectHelper(result)
  const resultTwo = sortedResult.map((genre) => {
  return {name: genre, count:result[genre]}
    })
  return resultTwo.slice(0,5)
  }

function sortedObjectHelper(books){
  let keys = Object.keys(books)
  return keys.sort((a, b) => {
    if (books[a] > books[b]){
      return -1
    }
    else if (books[b] > books[a]){
      return 1
    }
    else {
      return 0
    }
  })
}





function getMostPopularBooks(books) {
  const borrows = books.filter((book) => book.borrows.length > 0).map((book) => ({name:book.title, count:book.borrows.length}));
  borrows.sort((a,b) => b.count - a.count);
  return borrows.slice(0,5);
}


function getMostPopularAuthors(books, authors) {
  let result = [];
  authors.forEach(author => {
    let returnAuthor = { 
      name: `${author.name.first} ${author.name.last}`, 
      count: 0
    }
    books.forEach(book => {
      if (book.authorId === author.id) {
        returnAuthor.count += book.borrows.length
      }
    })
    result.push(returnAuthor)
  })
  result.sort((a,b) => b.count - a.count)
  return result.slice(0, 5)
}



module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
