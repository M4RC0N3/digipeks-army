import React from 'react';
import './style/index.css';
import Lottie from 'react-lottie';
import data from '../../../assets/animations/web-dev.json'
const Index =()=>{
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: data,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    return(
        <div className="about-us-container">
            <p>Section in development</p>
            <div className="container">
                <Lottie
                options={defaultOptions}
                />
            </div>
        </div>
    );
}
export default Index;