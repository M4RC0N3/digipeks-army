import {React, useEffect, useRef} from 'react';
import './style/index.css';
import TitleFrame from '../../../assets/images/title-frame.svg';
import bamboo from '../../../assets/images/bamboo.svg';
import Tower from '../../../assets/images/tower.svg';
import TowerDark from '../../../assets/images/tower-dark.svg';
import Wall from '../../../assets/images/wall.svg';
import WallDark from '../../../assets/images/wall-dark.svg';
const Roadmap =()=>{
    const RoadMapRef=useRef();
    useEffect(()=>{
        const dataPic = document.querySelectorAll("[data-animation]");
        const flags = document.querySelectorAll("[flag-animation]");
        window.addEventListener('scroll',()=>{
            const windowTop = window.pageYOffset + ((window.innerHeight*3)/8);
            
            const RoadMap = (RoadMapRef.current.getBoundingClientRect().top*4);
            console.log(windowTop, RoadMap)
            if(windowTop>RoadMap){
                console.log('entrou')
                dataPic.forEach((element)=>{
                    element.classList.add('animate');
                });
                flags.forEach((element)=>{
                    element.classList.add('animation');
                });
            }
        });
    });
    return(
        <div className="roadmap-us-container" ref={RoadMapRef}>
            <div className="title-container" data-animation="first">
                <h2>Roadmap</h2>
                <img src={TitleFrame} alt="title frame" width={988} height={218} draggable={false}/>
            </div>
            <div className="top-bamboo-container" data-animation="second">
                <img className="top-bamboo" src={bamboo} alt="bamboo" width={215} height={1095} draggable={false}/>
                <img className="top-bamboo top-bamboo-complement" src={bamboo} alt="bamboo" width={215} height={1095} draggable={false}/>
                <img className="top-bamboo top-bamboo-complement2" src={bamboo} alt="bamboo" width={215} height={1095} draggable={false}/>
            </div>
            <div className="background-bamboos-container">
                <img className="left-total-bamboo" src={bamboo} alt="bamboo" width={215} height={1095} draggable={false} data-animation="second-1"/>
                <img className="left-bamboo" src={bamboo} alt="bamboo" width={215} height={1095} draggable={false} data-animation="second-2"/>
                <img className="right-bamboo" src={bamboo} alt="bamboo" width={215} height={1095} draggable={false} data-animation="second-3"/>
                <img className="right-total-bamboo" src={bamboo} alt="bamboo" width={215} height={1095} draggable={false} data-animation="second-4"/>
            </div>
            <div className="chinese-wall-container" data-animation="third">
                {/* twers-no-flag */}

                <div className="tower-container no-flag1" >
                    <img src={Tower} alt="Tower" width={259} height={304} draggable={false}/>
                </div>
                <div className="tower-container no-flag2">
                    <img src={Tower} alt="Tower" width={259} height={304} draggable={false}/>
                </div>
                <div className="tower-container no-flag3">
                    <img src={TowerDark} alt="Tower" width={259} height={304} draggable={false}/>
                </div>
                {/* walls */}

                <img className='walls wall1' src={Wall} alt="Wall" width={360} height={177} draggable={false}/>
                <img className='walls wall2' src={Wall} alt="Wall" width={360} height={177} draggable={false}/>
                <img className='walls wall3' src={Wall} alt="Wall" width={360} height={177} draggable={false}/>
                <img className='walls wall4' src={WallDark} alt="Wall" width={360} height={177} draggable={false} />
                <img className='walls wall4-2' src={WallDark} alt="Wall" width={360} height={177} draggable={false} />
                <img className='walls wall5' src={WallDark} alt="Wall" width={360} height={177} draggable={false} />
                <img className='walls wall6' src={WallDark} alt="Wall" width={360} height={177} draggable={false} />
                {/* towers-flag */}

                <div className="tower-container flag-level1">
                    <img src={Tower} alt="Tower" width={259} height={304} draggable={false}/>
                    <div className="flag-container">
                        <div className="flag"flag-animation="first">
                            <h3>Level 1</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>
                        </div>
                    </div>
                </div>
                <div className="tower-container flag-level2">
                    <img src={Tower} alt="Tower" width={259} height={304} draggable={false}/>
                    <div className="flag-container">
                        <div className="flag" flag-animation="second">
                            <h3>Level 2</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>
                        </div>
                    </div>
                </div>
                <div className="tower-container flag-level3">
                    <img src={TowerDark} alt="Tower" width={259} height={304} draggable={false}/>
                    <div className="flag-container">
                        <div className="flag" flag-animation="third">
                            <h3>Level 3</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>
                        </div>
                    </div>
                </div>
                <div className="tower-container flag-level4">
                    <img src={TowerDark} alt="Tower" width={259} height={304} draggable={false}/>
                    <div className="flag-container">
                        <div className="flag" flag-animation="fourth">
                            <h3>Level 4</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Roadmap;