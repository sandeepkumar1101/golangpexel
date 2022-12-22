import React from 'react'
import { Link, Route } from 'react-router-dom'
import ShowImage from "./ShowImage"
const VideoCard = ({video:Video,size}) => {
  
  const divStyle ={
    background: "#d9d9e7",
    border: "2px solid green",
    height: "fit-content"
  }
  return (
    <div style={divStyle} className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={Video.image} alt="" className="shadow-lg max-w-full h-auto" />
     
      <div className="px-6 py-4">
       <div className="font-bold text-purple-500 text-xl mb-2">
       <a className="shadow-lg font-bold text-green-500 mb-2 p-2" target={"blank"} href={Video.url}><strong>Orginal Link</strong></a>
       
       </div>
      <ul>
       <li>
         <strong>Height: </strong>
         {Video.height}
       </li>
       <li>
         <strong>Width: </strong>
         {Video.width}
       </li>
      </ul>
      </div>
      <div className="px-6 py-4">
       
       <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
        <Link to={`/videos/${Video.id}`}>View Video</Link>
       </span>
      
      </div>
    </div>
  )
}

export default VideoCard