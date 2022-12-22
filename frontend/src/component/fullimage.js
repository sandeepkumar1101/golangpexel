import React from 'react'
import { useState } from 'react'

const Fullimage = ({image,size}) => {
   const [imageSize, setImageSize] = useState(image.src.tiny)
   const onSubmit = (e) => {
    e.preventDefault();
    // console.log(image)
    if (e.target.value === "large") {
      setImageSize(image.src.large)
    }else if(e.target.value==="landscape"){
      setImageSize(image.src.landscape)
    }else if(e.target.value==="original"){
      setImageSize(image.src.original)
    }else if(e.target.value==="large2x"){
      setImageSize(image.src.large2x)
    }else if(e.target.value==="medium"){
      setImageSize(image.src.medium)
    }else if(e.target.value==="portrait"){
      setImageSize(image.src.portrait)
    }
  }

    return (
        <div className="rounded col-2 overflow-hidden shadow-lg m-3">
             <div>
            <img src={imageSize} alt="" className="shadow-lg max-w-full h-auto" />
         
            <div className="px-6 py-4">
             <div className="font-bold text-purple-500 text-xl mb-2"><strong>Photo by: </strong>
             <a className="shadow-lg font-bold text-green-500 mb-2 p-2" target={"blank"} href={image.photographer_url}>{image.photographer}</a>
           
                  </div>
                 <ul>
                  <li>
                    <strong>Sizes: </strong>
                    <button onClick={onSubmit} value="large" class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                         Large
                        </button>
                    <button onClick={onSubmit} value="original" class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                         Original
                        </button>
                    <button onClick={onSubmit} value="large2x" class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                         Large2x
                        </button>
                    <button onClick={onSubmit} value="portrait" class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                         Portrait
                        </button>
                    <button onClick={onSubmit} value="landscape" class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                         Landscape
                        </button>
                  </li>
                  <li>                
                  </li>
                 </ul>
                 </div>
                
                 </div>
            <div>
              
            </div>
        </div>
      )
}

export default Fullimage