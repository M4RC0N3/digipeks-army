import React from 'react';
import './style/index.css';
import Lottie from 'react-lottie';
import data from '../../../assets/animations/web-dev.json'
const Faq =()=>{
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: data,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    return(
        <div className="faq-container">
            <h2>Section in development</h2>
            <p>The last section uhuu🎉</p>
            <div className="container">
                <Lottie
                options={defaultOptions}
                />
            </div>
        </div>
    );
}
export default Faq;