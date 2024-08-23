import { useEffect } from "react";
import { NavLink } from "react-router-dom";

const Banner = () => {

    
    return (
        <div className="flex flex-col lg:flex-row items-center justify-center max-w-[1500px] mx-auto mt-9 bg-gray-300 rounded-lg p-4 hover:">
            <div className="p-4 flex flex-col lg:mr-20 text-center">
                <h1 className="text-2xl sm:text-3xl lg:text-5xl p-2 font-bold leading-tight">
                    Books To Freshen Up <span className="">Your BookShelf</span>
                </h1>
                <NavLink to='/list/read'>
                    <button 
                        className="btn btn-success mt-4 p-3 text-xs sm:text-sm lg:text-base">
                        View The List
                    </button>
                </NavLink>
            </div>
            <div class="carousel carousel-vertical h-96 rounded-box">
  <div class="carousel-item h-full w-full">
    <img src="https://i.postimg.cc/yNZNgxX2/Black-Halloween-Book-Cover-Template-Made-with-Poster-My-Wall.jpg" />
  </div>
  <div class="carousel-item h-full">
    <img src="https://i.postimg.cc/pXsr3gLc/book-cover-design-Made-with-Poster-My-Wall.jpg" />
  </div>
  <div class="carousel-item h-full">
    <img src="https://i.postimg.cc/pTMLDvsr/City-Night-Urban-gold-Flyer-Template-Made-with-Poster-My-Wall.jpg" />
  </div>
  <div class="carousel-item h-full">
    <img src="https://i.postimg.cc/wv5T2rrV/Girls-Pink-Party-Flyer-Template-Made-with-Poster-My-Wall.jpg." />
  </div>
  <div class="carousel-item h-full">
    <img src="https://i.postimg.cc/mghk48cL/Road-to-success-book-cover-template-Made-with-Poster-My-Wall.jpg" />
  </div>
  <div class="carousel-item h-full">
    <img src="https://i.postimg.cc/qvYRvyn8/White-Professional-Business-Book-Kindlebook-Made-with-Poster-My-Wall.jpg" />
  </div>
  
</div>
        </div>
    );
};

export default Banner;
