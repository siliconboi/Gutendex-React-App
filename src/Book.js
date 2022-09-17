
const Book = (props)=>{
    const {name, author, language, image, id} =props;
    return(
        <a href={`https://www.gutenberg.org/ebooks/${id}.html.images`} className=" font-sans text-cyan-500 text-md px-2 text-sans border-b-2 mx-auto">
        <img className="mx-auto" src={image} alt={name}/>
        <div className="px-0 mx-auto font-semibold font-serif text-lg">
        <h1>{name}</h1>
        <h2>{author} ({language})</h2>
        </div>
        </a>
    );
};
export default Book;