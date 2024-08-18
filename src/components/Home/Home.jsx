import Books from "../Books/Books";
import Banner from "../Banner/Banner";


const Home = () => {
    return (
        <div>
            {/* home page. navbar not included */}
            <Banner></Banner>
            <Books></Books>
             
        </div>
    );
};

export default Home;