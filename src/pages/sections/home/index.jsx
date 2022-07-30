import {React, useState} from 'react';
import Lottie from 'react-lottie';
import './style/index.css'
import TrackStar from '../../../assets/animations/track-star.json';
import DigipeksLogo from '../../../assets/images/digipeks-logo.png';
import Tree from '../../../assets/images/tree.svg';
import Coins from '../../../assets/images/coins.svg';

import RedDog from '../../../assets/images/red-dog.png';
import YellowDog from '../../../assets/images/yellow-dog.png';
import GreenDog from '../../../assets/images/green-dog.png';
import {DigipeksArmyTitle, Ballon,DiscordIcon, FacebookIcon, TwitterIcon, InstagramIcon} from './svg-export';

const Home = () => {
    const [stop, setStop]=useState(false);
    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: TrackStar,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        },
    };
    window.addEventListener('load',()=>{
        setStop(true);
        setTimeout(()=>{
            setStop(false);
        },3000);
    });
    return (
        <div className="home-container">
            <header>
                <img src={DigipeksLogo} alt="Digipeks-army logo" width={35} height={35} draggable={false}/>
                <div className="social-media-container">
                    <a href="">
                        <DiscordIcon/>
                    </a>
                    <a href="">
                        <FacebookIcon/>
                    </a>
                    <a href="">
                        <TwitterIcon/>
                    </a>
                    <a href="">
                        <InstagramIcon/>
                    </a>
                </div>
            </header>
            <section className="welcome-container">
                <div className="title-container">
                    <h1>
                        <div className='title'> Welcome <br/>to the</div>
                        <div className="second-title-container">
                            <div className="digipeks-container second-title">
                                <DigipeksArmyTitle/>
                            </div>
                            <div className="first-ballon-container">
                                <Ballon/>
                            </div>
                            <div className="second-ballon-container">
                                <Ballon/>
                            </div>
                        </div>
                    </h1>
                </div>
                <img className="tree" src={Tree} alt="Tree" width={840} height={645} draggable={false}/>
                <img className="coins" src={Coins} alt="Chinese coins" width={358} height={304} draggable={false}/>
            </section>
            <section className="nft-container">
                <div className="columns-container">
                    <div className="column-color red-column-container">
                        <h2>
                            N
                        </h2>
                        <div className="pic-container">
                            <img src={RedDog} alt="Red dog NFT" width={308} height={240} draggable={false} />
                        </div>
                    </div>
                    <div className="column-color yellow-column-container">
                        <div className="pic-container">
                            <img src={YellowDog} alt="Yellow dog NFT" width={308} height={280} />
                        </div>
                        <h2>
                            F
                        </h2>
                    </div>
                    <div className="column-color blue-column-container">
                        <div className="pic-container">
                            <div className="mini-pics">
                                <img src={GreenDog} alt="Green dog NFT" width={133} height={133} draggable={false}/>
                            </div>
                            <div className="mini-pics">
                                <img src={GreenDog} alt="Green dog NFT" width={133} height={133} draggable={false}/>
                            </div>
                            <div className="mini-pics">
                                <img src={GreenDog} alt="Green dog NFT" width={133} height={133} draggable={false}/>
                            </div>
                        </div>
                        <h2>
                            T
                        </h2>
                    </div>
                </div>
                <div className="container-track">
                    <Lottie options={defaultOptions}
                        isPaused={stop}
                    />
                </div>
            </section>
        </div>
    );
}
export default Home;
