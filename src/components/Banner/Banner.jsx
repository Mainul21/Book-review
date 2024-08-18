import { NavLink } from "react-router-dom";

const Banner = () => {
    return (
        <div className="flex items-center justify-center max-w-[1500px] mx-auto mt-9 bg-gray-300 rounded-lg p-4">
        <div className="p-4 flex flex-col mr-20">
        <h1 className="text-5xl p-2 flex flex-col">Books To Freshen Up <span>Your BookShelf</span></h1>
        <NavLink to='/list/read'><button className="btn btn-success ml-2 mt-4 p-4">View The List</button></NavLink>
        </div>
        <div className="p-4">
            <img className="w-3/4 rounded-xl" src="https://i.postimg.cc/yNZNgxX2/Black-Halloween-Book-Cover-Template-Made-with-Poster-My-Wall.jpg" alt="" />
        </div>
        </div>
    );
};

export default Banner;