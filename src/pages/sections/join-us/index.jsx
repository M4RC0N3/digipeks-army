import React from 'react';
import './style/index.css';
import Lottie from 'react-lottie';
import data from '../../../assets/animations/web-dev.json'
const JoinUs=()=>{
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: data,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    return(
        <div className="join-us-container">
            <p>Section in development</p>
            <div className="container">
                <Lottie
                options={defaultOptions}
                />
            </div>
        </div>
    );
}
export default JoinUs;