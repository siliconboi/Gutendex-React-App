import { useEffect, useState } from "react";
import Results from "./Results";
const languages=[["Chinese","zh"],["English","en"], ["French","fr"], ["Esperanto","eo"],["German","de"], ["Japanese","ja"], ["Norwegian","no"]];
const SearchParams = ()=>{
    const [name, setName] = useState("");
    const [author, setAuthor] = useState("");
    const [language, setLanguage] = useState("");
    const [books, setBooks] = useState([]);

    useEffect(()=>{
        requestBooks();
    },[]); // eslint-disable-line react-hooks/exhaustive-deps

    async function requestBooks(){
        const res = await fetch(
            `https://gutendex.com/books/?search=${(author=="")?'':`${author}%20`}${(name=="")?'':`${name}`}${(language=="")?'':`&languages=${language}`}`
            );
            const json = await res.json();
            setBooks(json.results);
    }

        return (
        <div className="bg-gradient-to-br from-cyan-200 to-white w-11/12 my-0 mx-auto">
            <form
            className="p-10 mb-10 rounded-lg bg-cyan-300 shadow-lg flex flex-col justify-center items-center font-sans text-black font-semibold text-md"
            onSubmit={(e)=>{
                e.preventDefault();
                requestBooks();
            }}>
                <label htmlFor="name" >
                    Name
                    <input 
                    id="name" 
                    type="text"
                    value={name} 
                    onChange={(e)=>setName(e.target.value)}/>
                </label>
                <label htmlFor="author">
                    Author
                    <input 
                    type="text"
                    id="author" 
                    value={author} 
                    onChange={(e)=>setAuthor(e.target.value)}/>
                </label>
                <label htmlFor="languages">
                    Language
                    <select 
                    className="w-60 mb-5 block"
                    id="languages"
                    value={language}
                    onChange={e=>{setLanguage(e.target.value)}}>
                        <option/>
                    {
                        languages.map(lang=>(
                            <option key={lang[1]} value={lang[1]}>{lang[0]}</option>
                        ))
                    }
                    </select>
                </label>
                <button className="px-6 py-2 bg-cyan-600 rounded-3xl font-bold text-white">Submit</button>
            </form>
        {
            <Results books={books}/>
        }
        </div>
    );
};
export default SearchParams;