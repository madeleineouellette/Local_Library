function findAccountById(accounts, id){
  let result = {};
  result = accounts.find((account) => account.id === id)
  return result
}





function sortAccountsByLastName(accounts) {
  let result = [];
  result = accounts.sort((accountsA, accountsB) => (accountsA.name.last > accountsB.name.last ? 1 : -1))
  return result
}






function getTotalNumberOfBorrows(account, books) {
  let result = 0;
  for (let i = 0; i < books.length; i++){
    for (let j = 0; j < books[i].borrows.length; j++){
        if (books[i].borrows[j].id === account.id){
      result += 1
      }
    }
  }
return result
}




function getBooksPossessedByAccount(account, books, authors) {
  let result = [];
  for (let i = 0; i < books.length; i++){
    for (let j = 0; j < books[i].borrows.length; j++){
      if (books[i].borrows[j].id === account.id && books[i].borrows[j].returned === false){
    for (let k = 0; k < authors.length; k++){
      if (books[i].authorId === authors[k].id){
        let newResult = books[i]
        newResult["author"] = authors[k]
        result.push(newResult)
            }
          }    
        }
      }
    }
  return result
 }







module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
