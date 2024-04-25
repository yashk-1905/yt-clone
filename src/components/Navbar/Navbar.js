import "./Navbar.css";
import menu_icon from "../../assets/menu.png";
import logo from "../../assets/logo.png";
import search_icon from "../../assets/search.png";
import upload_icon from "../../assets/upload.png";
import more_icon from "../../assets/more.png";
import  notification_icon from "../../assets/notification.png";
import profile_icon from "../../assets/jack.png";
import { Link } from "react-router-dom";

const Navbar = ({menuClass, setMenuClass}) => {
    return(
        <nav className="flex-div">
            <div className="nav-left flex-div">
               <img src={menu_icon} alt="menu-icon" className={`menu-icon ${menuClass}`} onClick={()=> {
                menuClass == "close"?setMenuClass("open"): setMenuClass("close");
               }}></img> 
               <Link to={`/`}>
                <img className="logo" src={logo} alt="logo"></img>
               </Link>
            </div>

            <div className="nav-middle flex-div">
               <div className="search-box flex-div">
                <input type="text" placeholder="Search"></input>
                <img src={search_icon} alt="search-icon"></img>
               </div>
            </div>

            <div className="nav-right flex-div">
                <img src={upload_icon} alt="upload"></img>
                <img src={more_icon} alt="nore"></img>
                <img src={notification_icon} alt="notify"></img>
                <img src={profile_icon} className="user-icon" alt="profile"></img>
            </div>
        </nav>
    )
}
export default Navbar;