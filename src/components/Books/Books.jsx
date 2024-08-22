import { useEffect, useState } from "react";
import Book from './Book'

const Books = () => {
    
    const [books, setBooks] = useState([])
    useEffect(()=>{
        fetch('/books.json')
        .then(response => response.json())
        .then(data => setBooks(data))
    },[])
    // console.log(books)

    return (
        <div className="flex flex-col mx-auto mb-6">
            <div><h1 className="text-5xl font-semibold text-center mt-6 mb-6">Books</h1></div>
            <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-4 ">
                {books.map((book,idx)=><Book key={book.bookId} book={book}></Book>)}
            </div>           
        </div>
    );
};

export default Books;