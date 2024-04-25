import "./Sidebar.css";
import home from "../../assets/home.png";
import game_icon from "../../assets/game_icon.png";
import automobiles_icon from "../../assets/automobiles.png";
import sports_icon from "../../assets/sports.png";
import entertainment_icon from "../../assets/entertainment.png";
import tech_icon from "../../assets/tech.png";
import music_icon from "../../assets/music.png";
import blogs_icon from "../../assets/blogs.png";
import news_icon from "../../assets/news.png";
import jack_icon from "../../assets/jack.png";
import simon_icon from "../../assets/simon.png";
import tom_icon from "../../assets/tom.png";
import megan_icon from "../../assets/megan.png";
import cameron_icon from "../../assets/cameron.png";

const Sidebar = ({menuClass, category, setCategory}) => {
    return(
         <div className={menuClass === "open" ? `sidebar`: `sidebar small-sidebar`}>
            <div className="shortcut-links">
                <div className={`side-link ${category === 0 ? "active":""}`} onClick={()=>setCategory(0)}>
                    <img src={home} alt="home"></img>
                    <p>Home</p>
                </div>
                <div className={`side-link ${category === 20 ? "active":""}`} onClick={()=>setCategory(20)}>
                    <img src={game_icon} alt="game"></img>
                    <p>Game</p>
                </div><div className={`side-link ${category === 2 ? "active":""}`} onClick={()=>setCategory(2)}>
                    <img src={automobiles_icon} alt="automobiles"></img>
                    <p>Automobiles</p>
                </div><div className={`side-link ${category === 17 ? "active":""}`} onClick={()=>setCategory(17)}>
                    <img src={sports_icon} alt="sports_icon"></img>
                    <p>Sports</p>
                </div><div className={`side-link ${category === 24 ? "active":""}`} onClick={()=>setCategory(24)}>
                    <img src={entertainment_icon} alt="entertainment_icon"></img>
                    <p>Entertainment</p>
                </div><div className={`side-link ${category === 28 ? "active":""}`} onClick={()=>setCategory(28)}>
                    <img src={tech_icon} alt="tech_icon"></img>
                    <p>Technology</p>
                </div><div className={`side-link ${category === 10 ? "active":""}`} onClick={()=>setCategory(10)}>
                    <img src={music_icon} alt="music_icon"></img>
                    <p>Music</p>
                </div><div className={`side-link ${category === 22 ? "active":""}`} onClick={()=>setCategory(22)}>
                    <img src={blogs_icon} alt="blogs_icon"></img>
                    <p>Blogs</p>
                </div>
                <div className={`side-link ${category === 25 ? "active":""}`} onClick={()=>setCategory(25)}>
                    <img src={news_icon} alt="news_icon"></img>
                    <p>News</p>
                </div>
                <hr></hr>
            </div>
            <div className="subscribed-list">
                <h3>Subscribed</h3>
                <div className="side-link" /*onClick={()=>setCategory(0)}*/>
                    <img src={jack_icon} alt="profile"></img>
                    <p>PewDiePie</p>
                </div>
                <div className="side-link" /*onClick={()=>setCategory(0)}*/>
                    <img src={simon_icon} alt="profile"></img>
                    <p>Mr Beast</p>
                </div>
                <div className="side-link" /*onClick={()=>setCategory(0)}*/>
                    <img src={tom_icon} alt="profile"></img>
                    <p>Justin Beiber</p>
                </div>
                <div className="side-link" /*onClick={()=>setCategory(0)}*/>
                    <img src={megan_icon} alt="profile"></img>
                    <p>5-Minutes Crafts</p>
                </div>
                <div className="side-link" /*onClick={()=>setCategory(0)}*/>
                    <img src={cameron_icon} alt="profile"></img>
                    <p>Nas Daily</p>
                </div>
            </div>
         </div>
    )
}
export default Sidebar;