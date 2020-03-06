import React, { Component } from 'react';
import Header from './header';
import Feedback from './feedback'
import House1 from '../images/houses/1.jpg';
import House2 from '../images/houses/2.jpg'
import House3 from '../images/houses/3.jpg'
import House4 from '../images/houses/4.jpg'
import House8 from '../images/houses/8.jpg'
import House9 from '../images/houses/9.jpg'
import House10 from '../images/houses/10.jpg'
class HousesPage extends Component{
    render(){
        return(
            <div>
                <Header/>
                <div className="flex flex-w m-top-90 block-wrapper">
                    <div className="item-wrapper house-block">
                        <a className="flex-c" href="/house/1">
                            <div className="item-content house-item">
                                <div style={{backgroundImage: `url(${House1})`}} className="item-image">
                                    <div className="hover-effect"></div>
                                </div>
                                <div style={{margin: "0px"}} className="item-title t-align-c">
                                    <div style={{marginTop: "15px"}}>Проект П-120</div>
                                    <div className="flex-sb">
                                        <span className="item-price">63000 BYN</span>
                                        <span className="item-area">
                                            120м
                                            <sup>
                                                <small>2</small>
                                            </sup>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="item-wrapper house-block">
                        <a className="flex-c" href="/house/2">
                            <div className="item-content house-item">
                                <div style={{backgroundImage: `url(${House2})`}} className="item-image">
                                    <div className="hover-effect"></div>
                                </div>
                                <div style={{margin: "0px"}} className="item-title t-align-c">
                                    <div style={{marginTop: "15px"}}>Проект П-135</div>
                                    <div className="flex-sb">
                                        <span className="item-price">70800 BYN</span>
                                        <span className="item-area">
                                            135м
                                            <sup>
                                                <small>2</small>
                                            </sup>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="item-wrapper house-block">
                        <a className="flex-c" href="/house/3">
                            <div className="item-content house-item">
                                <div style={{backgroundImage: `url(${House3})`}} className="item-image">
                                    <div className="hover-effect"></div>
                                </div>
                                <div style={{margin: "0px"}} className="item-title t-align-c">
                                    <div style={{marginTop: "15px"}}>Проект П-52</div>
                                    <div className="flex-sb">
                                        <span className="item-price">27300 BYN</span>
                                        <span className="item-area">
                                            52м
                                            <sup>
                                                <small>2</small>
                                            </sup>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="item-wrapper house-block">
                        <a className="flex-c" href="/house/4">
                            <div className="item-content house-item">
                                <div style={{backgroundImage: `url(${House4})`}} className="item-image">
                                    <div className="hover-effect"></div>
                                </div>
                                <div style={{margin: "0px"}} className="item-title t-align-c">
                                    <div style={{marginTop: "15px"}}>Проект П-139</div>
                                    <div className="flex-sb">
                                        <span className="item-price">73000 BYN</span>
                                        <span className="item-area">
                                            139м
                                            <sup>
                                                <small>2</small>
                                            </sup>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="item-wrapper house-block">
                        <a className="flex-c" href="/house/8">
                            <div className="item-content house-item">
                                <div style={{backgroundImage: `url(${House8})`}} className="item-image">
                                    <div className="hover-effect"></div>
                                </div>
                                <div style={{margin: "0px"}} className="item-title t-align-c">
                                    <div style={{marginTop: "15px"}}>Проект П-102</div>
                                    <div className="flex-sb">
                                        <span className="item-price">53500 BYN</span>
                                        <span className="item-area">
                                            102м
                                            <sup>
                                                <small>2</small>
                                            </sup>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="item-wrapper house-block">
                        <a className="flex-c" href="/house/9">
                            <div className="item-content house-item">
                                <div style={{backgroundImage: `url(${House9})`}} className="item-image">
                                    <div className="hover-effect"></div>
                                </div>
                                <div style={{margin: "0px"}} className="item-title t-align-c">
                                    <div style={{marginTop: "15px"}}>Проект П-85</div>
                                    <div className="flex-sb">
                                        <span className="item-price">45000 BYN</span>
                                        <span className="item-area">
                                            85м
                                            <sup>
                                                <small>2</small>
                                            </sup>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="item-wrapper house-block">
                        <a className="flex-c" href="/house/10">
                            <div className="item-content house-item">
                                <div style={{backgroundImage: `url(${House10})`}} className="item-image">
                                    <div className="hover-effect"></div>
                                </div>
                                <div style={{margin: "0px"}} className="item-title t-align-c">
                                    <div style={{marginTop: "15px"}}>Проект П-228</div>
                                    <div className="flex-sb">
                                        <span className="item-price">120000 BYN</span>
                                        <span className="item-area">
                                            228м
                                            <sup>
                                                <small>2</small>
                                            </sup>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <Feedback/>
            </div>
        )
    }
}
export default HousesPage