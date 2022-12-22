import React, { Component } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import ImageCard from "./ImageCard"
import ImageSearch from "./ImageSearch"
import VideoCard from "./VideoCard"

function Home() {
  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isVideoLoading, setIsVideoLoading] = useState(true);
  const [term, setTerm] = useState("");
  const [onImage, setOnImage] = useState(true)
  const [onVideo, setOnVideo] = useState(false)


  useEffect(() => {
    fetch(`http://localhost:8000/pexels/${term}`)
      .then(res => res.json())
      .then(data => {
        setImages(data.photos);
        setIsLoading(false);
      })
      .catch(err => console.log(err));
  
    fetch(`http://localhost:8000/pexels/videos/${term}`)
      .then(res => res.json())
      .then(data => {
        setVideos(data.videos);
        setIsVideoLoading(false);
      })
      .catch(err => console.log(err));
  }, [term]);
  


  const onSubmit = (e) => {
      if(e.target.value==="image"){
         setOnImage(true)
         setOnVideo(false)
      }else if(e.target.value==="video"){
         setOnVideo(true)
         setOnImage(false)
      }
  }

  return (
     <div className="container mx-auto">
      <ImageSearch searchText={(text) => setTerm(text)}/>
       <div className='p-2 m-2 flex flex-row'>
       <ul className='flex flex-row'>
                  <li className='m-2'>
                    <button onClick={onSubmit} value="image" style={onImage? {background : "#24b0ffbf"} :{background : "#fff"} } class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                         Images
                        </button>
                  </li>
                  <li className='m-2'>
                    <button onClick={onSubmit} value="video" style={onVideo? {background : "#24b0ffbf"} :{background : "#fff"} } class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                         Videos
                        </button>
                  </li>
  
                 </ul>
       </div>
      {!isLoading && images.length === 0 && <h1 className="text-6xl text-center mx-auto mt-32">No Images Found</h1>}
        {isLoading ? <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1> : <div className="">
        {onImage ? <div className="grid grid-cols-3 gap-4">
           {images.map((image,index) => (
            <ImageCard key={index} image={image} size={"small"}/>
           ))}
          </div> : <div className="grid grid-cols-3 gap-4">
           {videos.map((video,index) => (
            <VideoCard key={index} video={video} size={"small"}/>
           ))}
          </div>}
          </div>}
       
    
        
     </div>
   );
}

export default Home;