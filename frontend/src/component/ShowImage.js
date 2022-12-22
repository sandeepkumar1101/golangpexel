import React from 'react'
import { useLocation } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'
import ImageCard from './ImageCard'
import FullImage from "./fullimage"
const ShowImage = (props) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [term, setTerm] = useState('');
  
    
    const { id } = useParams();
    console.log(id)
    useEffect(() => {
      fetch(`http://localhost:8000/pexel/${id}`)
      .then( res =>res.json())
      .then(data => {
        setImages(data);
        setIsLoading(false);
      })
      .catch(err => console.log(err))
    }, []);
    // console.log(id)
  return (
    <>
 
    {isLoading ? <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1> : 
     <FullImage key={images.id} image={images} size={"large"}/>
  }
   </>
  )
}

export default ShowImage