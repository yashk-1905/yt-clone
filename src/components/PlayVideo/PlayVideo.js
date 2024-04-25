import './PlayVideo.css';
import video1 from '../../assets/video.mp4';
import like from '../../assets/like.png';
import dislike from '../../assets/dislike.png';
import share from '../../assets/share.png';
import save from '../../assets/save.png';
import jack from '../../assets/jack.png';
import user_profile from '../../assets/user_profile.jpg';
import { useEffect, useState } from 'react';
import { API_KEY, value_converter } from '../../data';
import moment from 'moment'; 
const PlayVideo = ({ videoId }) => {
    const [apiData, setApiData] = useState(null);
    const[channelData, setChannelData] = useState(null);    

    const fetchVideoDataById = async () => {
        const videoByIdUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
        await fetch(videoByIdUrl).then((response) => response.json()).then((data) => setApiData(data.items[0]));
    }

    const fetchChannelById = async () => {
        const channelById = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`
        await fetch(channelById).then((response)=>response.json()).then((data)=>setChannelData(data.items[0]));
    }    
    
        useEffect(() => {
            fetchVideoDataById();
        }, [])
        
    useEffect(()=>{
       apiData? fetchChannelById(): fetchVideoDataById();
    }, [apiData]);
    return (
        <div className='play-video'>
    
            <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

            <h3>{apiData ? apiData.snippet.title : "Title here"}</h3>
            <div className='play-video-info'>
                <p>{value_converter(apiData ? apiData.statistics.viewCount : "Views here")} views &bull; {apiData?moment(apiData.snippet.publishedAt).fromNow():"moment will come here"}</p>
                <div>
                    <span><img src={like} alt="like"></img>{value_converter(apiData ? apiData.statistics.likeCount : "likes here")}</span>
                    <span><img src={dislike} alt="dislike"></img>{value_converter(apiData ? apiData.statistics.dislikeCount : "dislikes here")}</span>
                    <span><img src={share} alt="share"></img>Share</span>
                    <span><img src={save} alt="save"></img>Save</span>
                </div>
            </div>

            <hr></hr>
            <div className='publisher'>
                <img src={channelData?channelData.snippet.thumbnails.default.url:"channel Logo"} alt='profile' ></img>
                <div>
                    <p>{apiData?apiData.snippet.channelTitle:"Channel Title here"}</p>
                    <span>{channelData? value_converter(channelData.statistics.subscriberCount):"1M"} subscribers</span>
                </div>
                <button>Subscribe</button>
            </div>
            <div className='vid-description'>
                <p>{apiData?apiData.snippet.description.slice(0,300):"description here"}</p>
                <hr />
                <h4>{apiData?value_converter(apiData.statistics.commentCount) :"Comment count"} Comments</h4>
                <div className='comment'>
                    <img src={user_profile} alt='comment-user'></img>
                    <div>
                        <h3>Jack<span>1 Day ago</span></h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, ea libero. Neque, natus quas dolorum nesciunt minus est tempore minima soluta rem quisquam repellendus recusandae! Laboriosam blanditiis voluptas minima eius?
                        </p>
                        <div className='comment-action'>
                            <img src={like} alt='like-comment'></img>
                            <span>12</span>
                            <img src={dislike} alt='dislike-comment'></img>
                        </div>
                    </div>
                </div>

                <div className='comment'>
                    <img src={user_profile} alt='comment-user'></img>
                    <div>
                        <h3>Nic <span>1 Day ago</span></h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, ea libero. Neque, natus quas dolorum nesciunt minus est tempore minima soluta rem quisquam repellendus recusandae! Laboriosam blanditiis voluptas minima eius?
                        </p>
                        <div className='comment-action'>
                            <img src={like} alt='like-comment'></img>
                            <span>12</span>
                            <img src={dislike} alt='dislike-comment'></img>
                        </div>
                    </div>
                </div>
                <div className='comment'>
                    <img src={user_profile} alt='comment-user'></img>
                    <div>
                        <h3>Jack Nicholson <span>1 Day ago</span></h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, ea libero. Neque, natus quas dolorum nesciunt minus est tempore minima soluta rem quisquam repellendus recusandae! Laboriosam blanditiis voluptas minima eius?
                        </p>
                        <div className='comment-action'>
                            <img src={like} alt='like-comment'></img>
                            <span>12</span>
                            <img src={dislike} alt='dislike-comment'></img>
                        </div>
                    </div>
                </div>
                <div className='comment'>
                    <img src={user_profile} alt='comment-user'></img>
                    <div>
                        <h3>winston<span>1 Day ago</span></h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, ea libero. Neque, natus quas dolorum nesciunt minus est tempore minima soluta rem quisquam repellendus recusandae! Laboriosam blanditiis voluptas minima eius?
                        </p>
                        <div className='comment-action'>
                            <img src={like} alt='like-comment'></img>
                            <span>12</span>
                            <img src={dislike} alt='dislike-comment'></img>
                        </div>
                    </div>
                </div>
                <div className='comment'>
                    <img src={user_profile} alt='comment-user'></img>
                    <div>
                        <h3>john<span>1 Day ago</span></h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, ea libero. Neque, natus quas dolorum nesciunt minus est tempore minima soluta rem quisquam repellendus recusandae! Laboriosam blanditiis voluptas minima eius?
                        </p>
                        <div className='comment-action'>
                            <img src={like} alt='like-comment'></img>
                            <span>12</span>
                            <img src={dislike} alt='dislike-comment'></img>
                        </div>
                    </div>
                </div>
                <div className='comment'>
                    <img src={user_profile} alt='comment-user'></img>
                    <div>
                        <h3>Maria<span>1 Day ago</span></h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, ea libero. Neque, natus quas dolorum nesciunt minus est tempore minima soluta rem quisquam repellendus recusandae! Laboriosam blanditiis voluptas minima eius?
                        </p>
                        <div className='comment-action'>
                            <img src={like} alt='like-comment'></img>
                            <span>12</span>
                            <img src={dislike} alt='dislike-comment'></img>
                        </div>
                    </div>
                </div>
                <div className='comment'>
                    <img src={user_profile} alt='comment-user'></img>
                    <div>
                        <h3>Katrina<span>1 Day ago</span></h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, ea libero. Neque, natus quas dolorum nesciunt minus est tempore minima soluta rem quisquam repellendus recusandae! Laboriosam blanditiis voluptas minima eius?
                        </p>
                        <div className='comment-action'>
                            <img src={like} alt='like-comment'></img>
                            <span>12</span>
                            <img src={dislike} alt='dislike-comment'></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlayVideo;