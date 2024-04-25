import "./Feed.css";
import { Link } from "react-router-dom";
import { API_KEY } from "../../data";
import { useEffect, useState } from "react";
import { value_converter } from "../../data";

const Feed = ({category}) => {

  const [videoData, setVideoData] = useState([]);
  
  const fetchVideoData = async () => {
    const videoListUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`
    await fetch(videoListUrl).then((response) => response.json()).then((data)=> setVideoData(data.items));
  }

  useEffect(()=>{
    fetchVideoData() 
  }, [category]);

  return (
    <div className="feed">
      {videoData.map((item,index)=>{
        return(
          <Link to={`video/${item.snippet.categoryId}/${item.id}`} className="card">
            <img src={item.snippet.thumbnails.medium.url} alt="video1"></img>
            <h2>{item.snippet.title}</h2>
            <h3>{item.snippet.channelTitle}</h3>
            <p>{value_converter(item.statistics.viewCount)} views &bull; 2 days ago</p>
          </Link>
        )
      })}
    </div>
  );
};
export default Feed;
