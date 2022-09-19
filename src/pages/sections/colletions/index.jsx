import {React, useEffect, useRef} from 'react';
import './style/index.css';
import GreenBallDog from '../../../assets/images/green-ball-dog.png';
import GreenDog from '../../../assets/images/green-dog.png';
import GreenHornDog from '../../../assets/images/green-horn-dog.png';
import GreenKingDog from '../../../assets/images/green-king-dog.png';
import GreenTailDog from '../../../assets/images/green-tail-dog.png';

import RedBallDog from '../../../assets/images/red-ball-dog.png';
import RedDog from '../../../assets/images/red-dog.png';
import RedHornDog from '../../../assets/images/red-horn-dog.png';
import RedKingDog from '../../../assets/images/red-king-dog.png';
import RedTailDog from '../../../assets/images/red-tail-dog.png';

import YellowBallDog from '../../../assets/images/yellow-ball-dog.png';
import YellowDog from '../../../assets/images/yellow-dog.png';
import YellowHornDog from '../../../assets/images/yellow-horn-dog.png';
import YellowKingDog from '../../../assets/images/yellow-king-dog.png';
import YellowTailDog from '../../../assets/images/yellow-tail-dog.png';

import Frame from '../../../assets/images/frame.svg';
const Colletions =()=>{
    const ColletionsRef=useRef();
    useEffect(()=>{
        const dataPic = document.querySelectorAll("[data-animate]");
        window.addEventListener('scroll',()=>{
            const windowTop = window.pageYOffset + ((window.innerHeight*3)/10);
            const Colletions = (ColletionsRef.current.getBoundingClientRect().top*5);
            if(windowTop>Colletions){
                dataPic.forEach((element)=>{
                    element.classList.add('animated');
                });
            }
        });
    });
    return(
        <div className="colletions-container" ref={ColletionsRef}>
            <img className='frame top-left' width={251} height={251} src={Frame} alt="top left"  draggable={false}/>
            <img className='frame top-right' width={251} height={251} src={Frame} alt="top right"  draggable={false}/>
            <img className='frame bottom-right' width={251} height={251} src={Frame} alt="bottom right"  draggable={false}/>
            <img className='frame bottom-left' width={251} height={251} src={Frame} alt="bottom left"  draggable={false}/>
            <div className="text-side-container"data-animate="first">
                <div className="title-subtitle-container">
                    <h2>Colletion of 7777 Unique Digital Pekingeses</h2>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
                    <div className="hat"></div>
                </div>    
            </div>
            <div className="colletions-side-container">
                <div className="pics-container">
                    <div className="pic-container green-ball-dog" data-animate="box15">
                        <img src={GreenBallDog} alt="green ball dog" width={100} height={100} draggable={false}/>
                    </div>
                    <div className="pic-container green-dog" data-animate="box1">
                        <img src={GreenDog} alt="green dog" width={100} height={100} draggable={false}/>
                    </div>
                    <div className="pic-container green-horn-dog" data-animate="box6">
                        <img src={GreenHornDog} alt="green horn dog" width={100} height={100} draggable={false}/>
                    </div>
                    <div className="pic-container green-king-dog" data-animate="box9">
                        <img src={GreenKingDog} alt="green king dog" width={100} height={100} draggable={false}/>
                    </div>
                    <div className="pic-container green-tail-dog" data-animate="box5">
                        <img src={GreenTailDog} alt="green tail dog" width={100} height={100} draggable={false}/>
                    </div>

                    <div className="pic-container red-ball-dog" data-animate="box14">
                        <img src={RedBallDog} alt="red ball dog" width={100} height={100} draggable={false}/>
                    </div>
                    <div className="pic-container red-dog" data-animate="box2">
                        <img src={RedDog} alt="red dog" width={100} height={100} draggable={false}/>
                    </div>
                    <div className="pic-container red-horn-dog" data-animate="box4">
                        <img src={RedHornDog} alt="red horn dog" width={100} height={100} draggable={false}/>
                    </div>
                    <div className="pic-container red-king-dog" data-animate="box8">
                        <img src={RedKingDog} alt="red king dog" width={100} height={100} draggable={false}/>
                    </div>
                    <div className="pic-container red-tail-dog" data-animate="box13">
                        <img src={RedTailDog} alt="" width={100} height={100} draggable={false}/>
                    </div>

                    <div className="pic-container yellow-ball-dog" data-animate="box7">
                        <img src={YellowBallDog} alt="yellow ball dog" width={300} height={300} draggable={false}/>
                    </div>
                    <div className="pic-container yellow-dog" data-animate="box3">
                        <img src={YellowDog} alt="yellow dog" width={100} height={100} draggable={false}/>
                    </div>

                    <div className="pic-container yellow-horn-dog" data-animate="box11">
                        <img src={YellowHornDog} alt="yellow horn dog" width={100} height={100} draggable={false}/>
                    </div>
                    <div className="pic-container yellow-king-dog" data-animate="box10">
                        <img src={YellowKingDog} alt="yellow king dog" width={100} height={100} draggable={false}/>
                    </div>
                    <div className="pic-container yellow-tail-dog" data-animate="box12">
                        <img src={YellowTailDog} alt="yellow tail dog" width={100} height={100} draggable={false}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Colletions;