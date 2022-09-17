import Book from "./Book";
const Results = ({books})=>{
return(
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {!books.length?
        <h1>No Books Found</h1>:
        (
        books.map((book)=>{
            return(
                <Book 
                name={book.title} 
                author={book.authors[0]?book.authors[0].name:""} 
                language={book.languages[0]?book.languages[0]:""} 
                image={book.formats['image/jpeg']}
                key={book.id}
                id={book.id} />
            )
        })
        )
    }
    </div>
)
}
export default Results