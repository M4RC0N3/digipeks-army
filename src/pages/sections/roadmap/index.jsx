import React from 'react';
import './style/index.css';
import TitleFrame from '../../../assets/images/title-frame.svg';
import bamboo from '../../../assets/images/bamboo.svg';
import Tower from '../../../assets/images/tower.svg';
import TowerDark from '../../../assets/images/tower-dark.svg';
import Wall from '../../../assets/images/wall.svg';
import WallDark from '../../../assets/images/wall-dark.svg';
const Roadmap =()=>{
    return(
        <div className="roadmap-us-container">
            <div className="title-container">
                <h2>Roadmap</h2>
                <img src={TitleFrame} alt="title frame" width={988} height={218} draggable={false}/>
            </div>
            <div className="top-bamboo-container">
                <img className="top-bamboo" src={bamboo} alt="bamboo" width={215} height={1095} draggable={false}/>
                <img className="top-bamboo top-bamboo-complement" src={bamboo} alt="bamboo" width={215} height={1095} draggable={false}/>
                <img className="top-bamboo top-bamboo-complement2" src={bamboo} alt="bamboo" width={215} height={1095} draggable={false}/>
            </div>
            <div className="background-bamboos-container">
                <img className="left-total-bamboo" src={bamboo} alt="bamboo" width={215} height={1095} draggable={false}/>
                <img className="left-bamboo" src={bamboo} alt="bamboo" width={215} height={1095} draggable={false}/>
                <img className="right-bamboo" src={bamboo} alt="bamboo" width={215} height={1095} draggable={false}/>
                <img className="right-total-bamboo" src={bamboo} alt="bamboo" width={215} height={1095} draggable={false}/>
            </div>
            <div className="chinese-wall-container">
                {/* twers-no-flag */}

                <div className="tower-container no-flag1">
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
                        <div className="flag">
                            <h3>Level 1</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>
                        </div>
                    </div>
                </div>
                <div className="tower-container flag-level2">
                    <img src={Tower} alt="Tower" width={259} height={304} draggable={false}/>
                    <div className="flag-container">
                        <div className="flag">
                            <h3>Level 2</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>
                        </div>
                    </div>
                </div>
                <div className="tower-container flag-level3">
                    <img src={TowerDark} alt="Tower" width={259} height={304} draggable={false}/>
                    <div className="flag-container">
                        <div className="flag">
                            <h3>Level 3</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>
                        </div>
                    </div>
                </div>
                <div className="tower-container flag-level4">
                    <img src={TowerDark} alt="Tower" width={259} height={304} draggable={false}/>
                    <div className="flag-container">
                        <div className="flag">
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