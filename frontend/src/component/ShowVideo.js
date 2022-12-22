import React from 'react'
import { useLocation } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'
import ImageCard from './ImageCard'
import FullVideo from './fullVideo'
const ShowVideo = (props) => {
    const [videos, setVideos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [term, setTerm] = useState('');
  
    
    const { id } = useParams();
    console.log(id)
    useEffect(() => {
      fetch(`http://localhost:8000/pexels/video/${id}`)
      .then( res =>res.json())
      .then(data => {
        setVideos(data);
        setIsLoading(false);
      })
      .catch(err => console.log(err))
    }, []);
    // console.log(id)
  return (
    <>
 
    {isLoading ? <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1> : 
     <FullVideo key={videos.id} video={videos} size={"large"}/>
  }
   </>
  )
}

export default ShowVideo