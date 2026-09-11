
import NavLogor from "../assets/logo.png"
import { FaSackDollar } from "react-icons/fa6";

const NavBar = ({ coin}: { coin: number }) => {
    return (
        <div className="flex items-center justify-between container mx-auto mt-5 ">
            <img src={NavLogor} alt="" />
            <div>
                <ul className="flex gap-4 justify-center items-center">
                    <li><a href="" className="font-semibold">Home</a></li>
                    <li><a href="" className="font-semibold">Fixture</a></li>
                    <li><a href="" className="font-semibold">Teams</a></li>
                    <li><a href="" className="font-semibold">Schedules</a></li>
                     <button className="btn btn-soft"> <FaSackDollar />{coin} Coin</button>
                </ul>
                
            </div>
           
        </div>
    );
};

export default NavBar;