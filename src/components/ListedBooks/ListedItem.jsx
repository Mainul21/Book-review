import { NavLink } from "react-router-dom";

const ListedItem = ({ read }) => {
  const { bookId, bookName, author, rating, tags, category, image, totalPages, publisher, yearOfPublishing } = read;

  return (
    <div className="bg-white shadow-md rounded-md p-4 flex">
      <img className="w-32 h-auto mr-6 rounded-lg" src={image} alt={bookName} />
      <div className="flex-grow">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">{bookName}</h1>
        <h2 className="text-lg text-gray-600 mb-4">By: {author}</h2>
        
        <div className="mb-4">
          <span className="font-semibold text-gray-700">Tag: </span>
          {tags.map((tag, idx) => (
            <span className="inline-block bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full" key={idx}>
              #{tag}
            </span>
          ))}
        </div>
        
        <div className="text-gray-600 mb-4">
          <p><span className="font-semibold">Year of Publishing:</span> {yearOfPublishing}</p>
          <p><span className="font-semibold">Publisher:</span> {publisher}</p>
          <p><span className="font-semibold">Pages:</span> {totalPages}</p>
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full">
              Category: {category}
            </span>
            <span className="inline-block bg-yellow-100 text-yellow-800 text-sm font-medium px-2.5 py-0.5 rounded-full">
              Rating: {rating}
            </span>
          </div>
          <NavLink to={`/details/${bookId}`}>
            <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition">
              View Details
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ListedItem;
