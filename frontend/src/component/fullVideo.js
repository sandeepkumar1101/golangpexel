import React from "react";
import ReactPlayer from "react-player";
import { useState } from "react";
const FullVideo = ({video, size}) => {
  const [videoSize, setVideoSize] = useState(video.video_files[0].link);
  const onSubmit = (e) => {
    if (e.target.value === "hd") {
      setVideoSize(video.video_files[0].link);
    }
    if (e.target.value === "sd") {
      setVideoSize(video.video_files[1].link);
    }
  };
  return (
    <div className="rounded col-2 overflow-hidden shadow-lg m-3">
       <div className="w-screen">
         <iframe width={"800px"} height={"400px"} src={videoSize}></iframe>
         </div>
        <div className="px-6 py-4">
          <ul>
            <li>
              <strong>Quality: </strong>
              <button
                onClick={onSubmit}
                value="hd"
                class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
              >
                HD
              </button>
              <button
                onClick={onSubmit}
                value="sd"
                class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
              >
                SD
              </button>
          
            
           
            </li>
            <li></li>
          </ul>
        </div>
    
      <div></div>
    </div>
  );
};

export default FullVideo;
