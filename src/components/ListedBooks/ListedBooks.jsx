import { createContext, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const SortContext = createContext(null);

const ListedBooks = () => {

  const [sort, setSort] = useState('rate')

  const handleSort = newSort =>{
    setSort(newSort)
  }

  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-5xl text-center mb-4">View Listed Books Here</h1>
        <details className="dropdown">
          <summary className="btn m-1 bg-green-500">Sort By</summary>
          <ul className="menu dropdown-content bg-green-500 rounded-box z-[1] w-52 p-2 shadow">
            <li onClick={()=>handleSort('rate')}>
              <a>Rating</a>
            </li>
            <li onClick={()=>handleSort('page')}>
              <a>No of Pages</a>
            </li>
            <li onClick={()=>handleSort('year')}>
              <a>Publishing year</a>
            </li>
          </ul>
        </details>
      </div>
      <div className="text-xl gap-4 font-semibold border-b border-gray-400">
        <NavLink
          style={({ isActive, isPending, isTransitioning }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isPending ? "red" : "black",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
          className="mr-4"
          to="/list/read"
        >
          Read
        </NavLink>
        <NavLink
          style={({ isActive, isPending, isTransitioning }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isPending ? "red" : "black",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
          to="/list/read/wishlist"
        >
          wishlist
        </NavLink>
      </div>
      <SortContext.Provider value={sort}>
      <Outlet></Outlet>
      </SortContext.Provider>
    </div>
  );
};

export default ListedBooks;
export {SortContext}
