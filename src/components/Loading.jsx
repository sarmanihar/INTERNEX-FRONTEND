import React from 'react'
import Loading from '../using-lottie/loading.json'
import Lottie from "lottie-react";
const LoadPage = () => {
  return (
      <div>
        <div id="loadingLottie">
       <Lottie animationData={Loading}/>
        </div>
      </div> 
  )
}

export default LoadPage;