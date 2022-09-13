import React from 'react';
import './style/index.css';
import {House} from './svg-export';
import ChineseCloud from '../../../assets/images/chinese-cloud.svg';
import HouseBalloon from '../../../assets/images/balloon.svg';
import Tree from '../../../assets/images/tree.svg';
import TreeGold from '../../../assets/images/tree-gold.svg';
const JoinUs=()=>{
    return(
        <div className="join-us-container">
            <div className="chinese-house-container">
                <div className="container-button">
                    <div className="cut-border-button">
                        <button className="join-us-button"></button>
                    </div>
                    <p>JOIN US</p>
                </div>
                <div className="cloud-container left-little">
                    <img className="chinese-cloud" src={ChineseCloud} alt="chinese cloud" width={422} height={183} draggable={false} />
                </div>
                <div className="cloud-container left">
                    <img className="chinese-cloud" src={ChineseCloud} alt="chinese cloud" width={422} height={183} draggable={false} />
                </div>
                <div className="cloud-container mid">
                    <img className="chinese-cloud" src={ChineseCloud} alt="chinese cloud" width={422} height={183} draggable={false} />
                </div>
                <div className="cloud-container right">
                    <img className="chinese-cloud" src={ChineseCloud} alt="chinese cloud" width={422} height={183} draggable={false} />
                </div>
                <div className="cloud-container right-little">
                    <img className="chinese-cloud" src={ChineseCloud} alt="chinese cloud" width={422} height={183} draggable={false} />
                </div>
                <House/>
                <img className="chinese-tree-right" src={Tree} alt="chinese tree" width={840} height={645} draggable={false}/>
                <img className="chinese-tree-left" src={TreeGold} alt="chinese tree gold" width={802} height={363} draggable={false}/>
                <div className="house-balloon-container top-left">
                    <img src={HouseBalloon} alt="chinese balloon" width={182} height={284} draggable={false}/>
                </div>
                <div className="house-balloon-container down-left">
                    <img src={HouseBalloon} alt="chinese balloon" width={182} height={284} draggable={false}/>
                </div>
                <div className="house-balloon-container top-right">
                    <img src={HouseBalloon} alt="chinese balloon" width={182} height={284} draggable={false}/>
                </div>
                <div className="house-balloon-container down-right">
                    <img src={HouseBalloon} alt="chinese balloon" width={182} height={284} draggable={false}/>
                </div>
                <ul className="how-to-buy-container">
                    <li type="1">Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</li>
                    <li type="1">Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</li>
                    <li type="1">Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</li>
                    <li type="1">Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</li>
                    <li type="1">Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</li>
                    <li type="1">Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</li>
                </ul>
            </div>
        </div>
    );
}
export default JoinUs;