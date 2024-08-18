import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Root = () => {
    return (
        <div className="max-w-[1500px] mx-auto">
            {/* header going here */}
            <Header></Header>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Root;