import React from 'react';
import './style/index.css';
import TitleFrame from '../../../assets/images/title-frame-little.svg';
import CloudGrid from '../../../assets/images/cloud-grid.svg';
import BambooNoLeaf from '../../../assets/images/bamboo-no-leaf.svg';
import BambooDark from '../../../assets/images/bamboo-dark.svg';
import BalloonRound from '../../../assets/images/balloon-round.svg';
import Bamboo from '../../../assets/images/bamboo.svg';
import Chevron from '../../../assets/icons/chevron.svg';
const Faq =()=>{
    return(
        <div className="faq-container">
           <img className="balloon balloon-right" src={BalloonRound} alt="balão" width={181} height={284} draggable={false}/>
           <img className="balloon balloon-left" src={BalloonRound} alt="balão" width={181} height={284} draggable={false}/>
           <img className="bamboo bamboo-no-leaf bamboo-left" src={BambooNoLeaf} alt="bamboo no leaft" width={126} height={1080} draggable={false}/>
           <img className="bamboo bamboo-no-leaf bamboo-right" src={BambooNoLeaf} alt="bamboo no leaft" width={126} height={1080} draggable={false}/>
           <img className="bamboo bamboo-dark" src={BambooDark} alt="Bamboo dark" width={214} height={1091} draggable={false}/>
           <div className="chinese-column-container column-left">
                <div className="bases-container">
                    <div className="larger-base"></div>
                    <div className="smaller-base"></div>
                </div>
                <div className="column">
                    <img src={CloudGrid} alt="" width={127} height={861} draggable={false}/>
                </div>
                <div className="bases-container bottom">
                    <div className="larger-base"></div>
                    <div className="smaller-base"></div>
                </div>
           </div>
           <div className="chinese-column-container column-right">
                <div className="bases-container">
                    <div className="larger-base"></div>
                    <div className="smaller-base"></div>
                </div>
                <div className="column">
                    <img src={CloudGrid} alt="cloud grid" width={127} height={861} draggable={false}/>
                </div>
                <div className="bases-container bottom">
                    <div className="larger-base"></div>
                    <div className="smaller-base"></div>
                </div>
           </div>
            <div className="title-container">
                <h2>FAQ</h2>
                <img src={TitleFrame} alt="title frame" width={503} height={188} draggable={false}/>
            </div>
            <div className="parchments-container">
                <img className="bamboo left" src={Bamboo} alt="bamboo" width={214} height={1080} draggable={false}/>
                <img className="bamboo right" src={Bamboo} alt="bamboo" width={214} height={1080} draggable={false}/>
                <div className="parchment-scroll">
                    <div className="parchment parchment1">
                        <div className="metal-part-container">
                            <div className="big-part"></div>
                            <div className="small-part"></div>
                        </div>
                        <div className="rolled question1">
                            <input type="checkbox" class="checkbox_pergunta"/>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit?</p>
                            <img className='chevron-icon' id='chevron-icon' src={Chevron} width={30} height={18} alt="Chevron icon" draggable={false} chevron-icon="rotate"/>
                            <div className="parchment-content-container">
                                <div className="text-container">
                                    <p>asdasdLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                </div>
                            </div>
                        </div>
                        <div className="metal-part-container">
                            <div className="big-part"></div>
                            <div className="small-part"></div>
                        </div>
                    </div>
                    <div className="parchment parchment2">
                        <div className="metal-part-container">
                            <div className="big-part"></div>
                            <div className="small-part"></div>
                        </div>
                        <div className="rolled question2">
                            <input type="checkbox" class="checkbox_pergunta"/>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit?</p>
                            <img className='chevron-icon' id='chevron-icon' src={Chevron} width={30} height={18} alt="Chevron icon" draggable={false} chevron-icon="rotate"/>
                            <div className="parchment-content-container">
                                <div className="text-container">
                                    <p>asdasdLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                </div>
                            </div>
                        </div>
                        <div className="metal-part-container">
                            <div className="big-part"></div>
                            <div className="small-part"></div>
                        </div>
                    </div>
                    <div className="parchment parchment3">
                        <div className="metal-part-container">
                            <div className="big-part"></div>
                            <div className="small-part"></div>
                        </div>
                        <div className="rolled question3">
                            <input type="checkbox" class="checkbox_pergunta"/>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit?</p>
                            <img className='chevron-icon' id='chevron-icon' src={Chevron} width={30} height={18} alt="Chevron icon" draggable={false} chevron-icon="rotate"/>
                            <div className="parchment-content-container">
                                <div className="text-container">
                                    <p>asdasdLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                </div>
                            </div>
                        </div>
                        <div className="metal-part-container">
                            <div className="big-part"></div>
                            <div className="small-part"></div>
                        </div>
                    </div>
                    <div className="parchment parchment4">
                        <div className="metal-part-container">
                            <div className="big-part"></div>
                            <div className="small-part"></div>
                        </div>
                        <div className="rolled question4">
                            <input type="checkbox" class="checkbox_pergunta"/>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit?</p>
                            <img className='chevron-icon' id='chevron-icon' src={Chevron} width={30} height={18} alt="Chevron icon" draggable={false} chevron-icon="rotate"/>
                            <div className="parchment-content-container">
                                <div className="text-container">
                                    <p>asdasdLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                </div>
                            </div>
                        </div>
                        <div className="metal-part-container">
                            <div className="big-part"></div>
                            <div className="small-part"></div>
                        </div>
                    </div>
                    <div className="parchment parchment5">
                        <div className="metal-part-container">
                            <div className="big-part"></div>
                            <div className="small-part"></div>
                        </div>
                        <div className="rolled question5">
                            <input type="checkbox" class="checkbox_pergunta"/>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit?</p>
                            <img className='chevron-icon' id='chevron-icon' src={Chevron} width={30} height={18} alt="Chevron icon" draggable={false} chevron-icon="rotate"/>
                            <div className="parchment-content-container">
                                <div className="text-container">
                                    <p>asdasdLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                </div>
                            </div>
                        </div>
                        <div className="metal-part-container">
                            <div className="big-part"></div>
                            <div className="small-part"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Faq;