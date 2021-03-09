import "./Header.css";
import Img from "./profile.jpg";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { AiOutlineSetting } from "react-icons/ai";
import Img0 from "./gc.png";



export default function Header({viewSideBar, setViewSideBar}) {
    function viewSideBarHandler(){
        setViewSideBar(!viewSideBar);
    }
    return(
        <div className="headerBody">
            <i onClick={viewSideBarHandler} className="fa fa-bars" aria-hidden="true"></i>
            <img src={Img0} className="navbar-icon" />
            <h2>Contacts</h2>
            <input />
            <div className="menu-icon">
                 <AiOutlineSetting className="icon" />
                 <BsFillGrid3X3GapFill />
                 <img src={Img} className="navbar-avatar" />
            </div>    
        </div>
    )
}