import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Root = () => {
    return (
        <div className="max-w-[1500px] lg:ml-20 lg:mr-20 sm:mx-auto">
            {/* header going here */}
            <Header></Header>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Root;