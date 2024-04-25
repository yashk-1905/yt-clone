import "./recommended.css";
import thumbnail1 from "../../assets/thumbnail1.png";
import thumbnail2 from "../../assets/thumbnail2.png";
import thumbnail3 from "../../assets/thumbnail3.png";
import thumbnail4 from "../../assets/thumbnail4.png";
import thumbnail5 from "../../assets/thumbnail5.png";
import thumbnail6 from "../../assets/thumbnail6.png";
import thumbnail7 from "../../assets/thumbnail7.png";
import thumbnail8 from "../../assets/thumbnail8.png";
import { useEffect, useState } from "react";
import { API_KEY } from "../../data";

const Recommended = ({categoryId}) => {
  const [apiData, setApiData] = useState([]);
  return (
    <div className="recommended">
      <div className="side-video-list">
        <div className="card">
          <img src={thumbnail1} alt="video1"></img>
          <div className="vid-info">
            <h4>starting of new dimension</h4>
            <p>Dimensions</p>
            <p>15K views &bull; 2 days ago</p>
          </div>
        </div>
        <div className="card">
          <img src={thumbnail2} alt="video2"></img>
          <div className="vid-info">
            <h4>The love for cubes</h4>
            <p>Cubes</p>
            <p>1M views &bull; 1 month ago</p>
          </div>
        </div>
        <div className="card">
          <img src={thumbnail3} alt="video3"></img>
          <div className="vid-info">
            <h4>Coding is fun</h4>
            <p>fun</p>
            <p>28K views &bull; 1 year ago</p>
          </div>
        </div>
        <div className="card">
          <img src={thumbnail4} alt="video4"></img>
          <div className="vid-info">
            <h4>Who said???</h4>
            <p>Who?</p>
            <p>10M views &bull; 8 months ago</p>
          </div>
        </div>
        <div className="card">
          <img src={thumbnail5} alt="video5"></img>
          <div className="vid-info">
            <h4>just another video</h4>
            <p>just</p>
            <p>488M views &bull; 2 years ago</p>
          </div>
        </div>
        <div className="card">
          <img src={thumbnail6} alt="video6"></img>
          <div className="vid-info">
            <h4>I am a funny guy</h4>
            <p>Never laughed</p>
            <p>7.5B views &bull; 10 years ago</p>
          </div>
        </div>
        <div className="card">
          <img src={thumbnail7} alt="video7"></img>
          <div className="vid-info">
            <h4>Dance lie high bye</h4>
            <p>Crazy</p>
            <p>101K views &bull; 2 weeks ago</p>
          </div>
        </div>
        <div className="card">
          <img src={thumbnail8} alt="video8"></img>
          <div className="vid-info">
            <h4>hello world</h4>
            <p>hello</p>
            <p>19B views &bull; 1 day ago</p>
          </div>
        </div>
        <div className="card">
          <img src={thumbnail1} alt="video1"></img>
          <div className="vid-info">
            <h4>starting of new dimension</h4>
            <p>Dimensions</p>
            <p>15K views &bull; 2 days ago</p>
          </div>
        </div>
        <div className="card">
          <img src={thumbnail2} alt="video2"></img>
          <div className="vid-info">
            <h4>The love for cubes</h4>
            <p>Cubes</p>
            <p>1M views &bull; 1 month ago</p>
          </div>
        </div>
        <div className="card">
          <img src={thumbnail3} alt="video3"></img>
          <div className="vid-info">
            <h4>Coding is fun</h4>
            <p>fun</p>
            <p>28K views &bull; 1 year ago</p>
          </div>
        </div>
        <div className="card">
          <img src={thumbnail4} alt="video4"></img>
          <div className="vid-info">
            <h4>Who said???</h4>
            <p>Who?</p>
            <p>10M views &bull; 8 months ago</p>
          </div>
        </div>
        <div className="card">
          <img src={thumbnail5} alt="video5"></img>
          <div className="vid-info">
            <h4>just another video</h4>
            <p>just</p>
            <p>488M views &bull; 2 years ago</p>
          </div>
        </div>
        <div className="card">
          <img src={thumbnail6} alt="video6"></img>
          <div className="vid-info">
            <h4>I am a funny guy</h4>
            <p>Never laughed</p>
            <p>7.5B views &bull; 10 years ago</p>
          </div>
        </div>
        <div className="card">
          <img src={thumbnail7} alt="video7"></img>
          <div className="vid-info">
            <h4>Dance lie high bye</h4>
            <p>Crazy</p>
            <p>101K views &bull; 2 weeks ago</p>
          </div>
        </div>
        <div className="card">
          <img src={thumbnail8} alt="video8"></img>
          <div className="vid-info">
            <h4>hello world</h4>
            <p>hello</p>
            <p>19B views &bull; 1 day ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Recommended;
