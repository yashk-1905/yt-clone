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
    /**we have the videoId now we need to get all the other data from here */
    const [apiData, setApiData] = useState(null);

    // for information of channel like subscribe count or like channel logo we need to use the channel api and fetch the data from over there
    const[channelData, setChannelData] = useState(null);    

    const fetchVideoDataById = async () => {
        // const videoListUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`

        /** now baby boy this will not work darling it was by category we need to fetch the data through videoId 
         * 
         * so we need to again go to the youtube Api Data and then video then list(video by id)
         * then go to http and copy the url
         */
        // https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc&key=[YOUR_API_KEY] HTTP/1.1

        // const videoByIdUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
        // await fetch(videoByIdUrl).then((response) => response.json()).then((data)=> setApiData(data.items));
        /**
         * look buddy we want just the first object so in the setApiData we need to do the changes accordingly
         */

        const videoByIdUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
        await fetch(videoByIdUrl).then((response) => response.json()).then((data) => setApiData(data.items[0]));

        /**
         * here we are using the [0]
         * even though i am using a single video id 
         * it's because youtube generally sends data in form of an array only 
         * so it's better to ensure that we get the data of the required element only
         * 
         * though it's a good practice to always do error handling in case the returned array is empty
        */
    }

    // https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=UCAuUUnT6oDeKwE6v1NGQxug&key=[YOUR_API_KEY] HTTP/1.1

    const fetchChannelById = async () => {
        const channelById = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`
        await fetch(channelById).then((response)=>response.json()).then((data)=>setChannelData(data.items[0]));
    }    
    
    // useEffect(()=>{
        //     fetchVideoDataById();
        // }, [videoId])
        // buddy over here the video on this play video page will be one only we want to fetch the data once only dear so no need to give videoId in the dependency array hon
        useEffect(() => {
            fetchVideoDataById();
        }, [])
        
        
        // useEffect(()=>{
            //     fetchChannelById();
            // },[]);
            /**
             * this is the way not to go budd
             * we need to first of all run the apiData and then the channelData 
             * so we need to fucking ensure that first the apiData is there 
             * 
             * and if their is any change in the apiData then only we will run the 
             * fetchChannelById()
             * 
             * well this is because we are using the channelId from the apiData only in the fetching of channelById
            */
    useEffect(()=>{
        fetchChannelById();
    }, [apiData]);
    return (
        <div className='play-video'>
            {/* <video src={video1} controls autoPlay muted></video> */}
            {/* now dear this won't work when we want to show the video from youtube
            we need to embed the iframe and then add the videoId and categoryId according to the selected video 
            
            go to a youtube video right click and copy code embed*/}
            {/* <iframe width="1280" height="720" src="https://www.youtube.com/embed/gbAdFfSdtQ4" title="React JS Tutorial For Beginners With React JS Project Step By Step Tutorial 2024" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> 
            
            now from this remove the width and height then in src in place of gbAd... place your videoId and remove the title too 
            */}

            <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

            {/* {apiData.map((item)=>{
                return(
                    <>
                        <h3>{item.snipppet.title}</h3>
                        <div className='play-video-info'>
                            <p>1525 views &bull; 2 days ago</p>
                            <div>
                                <span><img src={like} alt="like"></img>125</span>
                                <span><img src={dislike} alt="dislike"></img>5</span>
                                <span><img src={share} alt="share"></img>Share</span>
                                <span><img src={save} alt="save"></img>Save</span>
                            </div>
                        </div>
                    </>
                )
            })} 
            
            no buddy we won't be doing like this  as we are getting only one object so what's the need for map
            
            */}
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
                <img src={jack} alt='profile' ></img>
                <div>
                    <p>{apiData?apiData.channelTitle:"Channel Title here"}</p>
                    <span>500K subscribers</span>
                </div>
                <button>Subscribe</button>
            </div>
            <div className='vid-description'>
                {/* <p>{apiData?apiData.snippet.description:"description here"}</p> */}
                {/* as description is too long we will slice it */}
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