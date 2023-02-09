const books = [
    {title: 'El Quijote', avg_rating: 4.5},
    {title: 'Don Juan', avg_rating: 3.8},
    {title: 'Cien años de soledad', avg_rating: 4.7},
    {title: 'Matar a un ruiseñor', avg_rating: 5},
    {title: 'El gran Gatsby', avg_rating: 3.6},
];

var result = books
    .filter(function(book){
        return book.avg_rating > 4})
    .map(function(book){
        return {title: book.title, rating: book.avg_rating}
    })
    
    
 
console.log(result)