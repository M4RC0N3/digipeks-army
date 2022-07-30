import React from 'react';
import '../../styles/reset.css';
import './style/index.css';
import Home from '../sections/home/index'
import About from '../sections/about-us/index'
const Index =()=>{
    return(
        <div className="App">
            <Home/>
            <About/>
        </div>
    );
}
export default Index;