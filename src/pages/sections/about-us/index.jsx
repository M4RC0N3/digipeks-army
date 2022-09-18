import {React, useEffect, useState, useRef} from 'react';
import Lottie from 'react-lottie';
import './style/index.css';
import GreenKingDog from '../../../assets/images/green-king-dog.png';
import GreenHornDog from '../../../assets/images/green-horn-dog.png';
import RedKingDog from '../../../assets/images/red-king-dog.png';
import YellowTailDog from '../../../assets/images/yellow-tail-dog.png';
import ChineseMandala from '../../../assets/images/chinese-mandala.svg';
import ChinseCloud from '../../../assets/images/chinese-cloud.svg';
import Diagram from '../../../assets/animations/diagram.json';
const Index =()=>{
    const [stopAnimation, setStopAnimation]=useState(true);
    const textAboutRef=useRef();
    const diagramRef=useRef();
    const defaultOptions = {
        loop: 2,
        autoplay: false,
        animationData: Diagram,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        },
    };
    useEffect(()=>{
        const dataPic = document.querySelectorAll("[pic-animation]");
        window.addEventListener('scroll',()=>{
            const windowTop = window.pageYOffset + ((window.innerHeight)/2);
            const textAbout = textAboutRef.current.getBoundingClientRect().top-200;
            const diagram = diagramRef.current.getBoundingClientRect().top+500;
            if(windowTop>textAbout){
                textAboutRef.current.classList.add('animate');
                dataPic.forEach((element)=>{
                    element.classList.add('anime');
                });
            }
            if((windowTop)>diagram){
                setStopAnimation(false);
            }
        });
    });
    return(
        <div className="about-us-container">
            <div className="cloud-container-big">
                <img className="chinese-cloud" src={ChinseCloud} alt="chinese cloud" width={422} height={183} draggable={false} />
            </div>
            <div className="cloud-container">
                <img className="chinese-cloud" src={ChinseCloud} alt="chinese cloud" width={422} height={183} draggable={false} />
            </div>
           
            <div className="about-us">
                <div className="text-container" data-anime="left" ref={textAboutRef}>
                    <img className='chinese-mandala' src={ChineseMandala} alt="Chinese Mandala" width={165} height={165} draggable={false}/>
                    <h2>About-us</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum blandit massa, id fermentum purus commodo ut. Sed iaculis vehicula nisl sed placerat. Fusce sed massa a odio facilisis mattis. Nullam diam neque, lobortis ac iaculis eu, rhoncus in justo. Etiam in semper massa. Praesent a interdum augue. Donec lobortis magna ut leo eleifend, a pharetra lacus feugiat.</p>
                </div>
                <div className="pics-container">
                    <div className="green-dog-king pic-container" pic-animation="teste">
                        <img src={GreenKingDog} alt="Nft dog king green" width={100} height={100} draggable={false} />
                    </div>
                    <div className="red-dog-king pic-container" pic-animation="teste">
                        <img src={RedKingDog} alt="Nft dog king red" width={100} height={100} draggable={false} />
                    </div>
                    <div className="yellow-dog-ball pic-container" pic-animation="teste">
                        <img src={YellowTailDog} alt="Nft dog tail yellow" width={100} height={100} draggable={false} />
                    </div>
                    <div className="green-dog-orn pic-container" pic-animation="teste">
                        <img src={GreenHornDog} alt="Nft dog Orn green" width={100} height={100} draggable={false} />
                    </div>
                </div>
            </div>
            <div className="diagram-container">
                <div className="diagram" data-anime="opacity" ref={diagramRef}>
                    <Lottie options={defaultOptions} isPaused={stopAnimation}/>
                    <p>anyword</p>
                </div>
            </div>
        </div>
    );
}
export default Index;