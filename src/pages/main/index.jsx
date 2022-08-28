import React from 'react';
import '../../styles/reset.css';
import './style/index.css';
import Home from '../sections/home/index';
import About from '../sections/about-us/index';
import JoinUs from '../sections/join-us/index';
import Roadmap from '../sections/roadmap/index';
const Index =()=>{
    return(
        <div className="App">
            <Home/>
            <About/>
            <JoinUs/>
            <Roadmap/>
        </div>
    );
}
export default Index;