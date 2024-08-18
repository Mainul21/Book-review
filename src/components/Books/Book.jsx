import { NavLink } from "react-router-dom";

const Book = ({ book }) => {
    const {bookId, bookName, author, rating, tags, category, image } = book;
    
    return (
        <NavLink to={`/details/${bookId}`}><div className="flex flex-col items-center border border-gray-300 rounded-xl shadow-sm w-full p-6 bg-white">
        <div className="mb-4">
            <img className="w-36 h-auto object-cover" src={image} alt={`${bookName} cover`} />
        </div>
        <div className="text-center mb-4">
            <div className="mb-2 flex justify-center space-x-2">
                {tags.map((tag, idx) => (
                    <span
                        key={idx}
                        className="bg-green-100 text-green-700 px-2 py-1 text-xs font-semibold rounded-full"
                    >
                        {tag}
                    </span>
                ))}
            </div>
            <h1 className="text-lg font-bold text-gray-800 mb-1">{bookName}</h1>
            <h2 className="text-sm text-gray-600">By: {author}</h2>
        </div>
        <div className="flex justify-between w-full border-t border-gray-200 pt-2 text-sm text-gray-600">
            <span>{category}</span>
            <span>{rating}</span>
        </div>
    
    </div></NavLink>
    );
};

export default Book;
