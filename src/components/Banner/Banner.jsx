import { NavLink } from "react-router-dom";

const Banner = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-center max-w-[1500px] mx-auto mt-9 bg-gray-300 rounded-lg p-4">
            <div className="p-4 flex flex-col lg:mr-20 text-center lg:text-left">
                <h1 className="text-2xl sm:text-3xl lg:text-5xl p-2 font-bold leading-tight">
                    Books To Freshen Up <span>Your BookShelf</span>
                </h1>
                <NavLink to='/list/read'>
                    <button 
                        className="btn btn-success mt-4 p-3 sm:p-3 lg:p-4 text-xs sm:text-sm lg:text-base">
                        View The List
                    </button>
                </NavLink>
            </div>
            <div className="p-4 mt-4 lg:mt-0">
                <img 
                    className="w-full sm:w-3/4 lg:w-full rounded-xl mx-auto lg:mx-0" 
                    src="https://i.postimg.cc/yNZNgxX2/Black-Halloween-Book-Cover-Template-Made-with-Poster-My-Wall.jpg" 
                    alt="Book Shelf Banner" 
                />
            </div>
        </div>
    );
};

export default Banner;
