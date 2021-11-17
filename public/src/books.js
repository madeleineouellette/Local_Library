function findAuthorById(authors, id) {
  let result = {};
  for (let i = 0; i < authors.length; i++){
    if (authors[i].id === id)
    result = authors[i]
  }
  return result
}




function findBookById(books, id) {
  let result = {};
  for (let i = 0; i < books.length; i++){
    if (books[i].id === id){
      result = books[i]
    }
  }
  return result 
}




function partitionBooksByBorrowedStatus(books) {
  let result = [];
  let firstArray = [];
  let secondArray = [];
  for (let i = 0; i < books.length; i++){
    let isCheckedOut = false
    for (let j = 0; j < books[i].borrows.length; j++){
      if (books[i].borrows[j].returned === false){
        firstArray.push(books[i])
       isCheckedOut = true 
      } 
    }
   if (isCheckedOut === false){
     secondArray.push(books[i])
    } 
  }
    result.push(firstArray)
    result.push(secondArray)
  return result
}



function getBorrowersForBook(book, accounts) {
  let result = [];
   for (let borrows in book){
     const borrowedStatus = book[borrows]
     for (let i = 0; i < borrowedStatus.length; i++){
       let returnedID = borrowedStatus[i].id
       for (let j = 0; j < accounts.length; j++){
         if (returnedID === accounts[j].id){
           accounts[j].returned = borrowedStatus[i].returned
           result.push(accounts[j])
         }
       }
     }
   }
  return result.slice(0,10)
}




module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};