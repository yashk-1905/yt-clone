import "./home.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Feed from "../../components/Feed/Feed";
import { useState } from "react";

const Home = ({menuClass}) => {
    const [category, setCategory] = useState(0)
    return(
        <>
            <Sidebar menuClass = {menuClass} category = {category} setCategory = {setCategory}></Sidebar>
            <div className={`container ${menuClass === "open" ? "large-container" : ""}`}>
                <Feed category={category}></Feed>
            </div>
        </>
    )
}
export default Home;