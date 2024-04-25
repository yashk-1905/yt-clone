import { useParams } from "react-router-dom";
import PlayVideo from "../../components/PlayVideo/PlayVideo";
import Recommended from "../../components/recommended/recommended";
import "./Video.css";

const Video = () => {
    const {videoId, categoryId} = useParams();
    return(
        <div className="play-container">
            <PlayVideo videoId={videoId}></PlayVideo>
            <Recommended categoryId = {categoryId}></Recommended>
        </div>
    )
}
export default Video;