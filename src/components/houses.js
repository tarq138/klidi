import React, { Component } from 'react';
import Header from './header';
import Feedback from './feedback'
import House1 from '../images/houses/1/m1.jpg';
import House2 from '../images/houses/2/m1.jpg';
import House3 from '../images/houses/3/m1.jpg';
import House4 from '../images/houses/4/m1.jpg';
import House5 from '../images/houses/5/m1.jpg';
import House6 from '../images/houses/6/m1.jpg';
import House7 from '../images/houses/7/m1.jpg';
import House8 from '../images/houses/8/m1.jpg';
import House9 from '../images/houses/9/m1.jpg';
import House10 from '../images/houses/10/m1.jpg';
import House11 from '../images/houses/11/m1.jpg';
import House12 from '../images/houses/12/m1.jpg';
import House13 from '../images/houses/13/m1.jpg';

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
                                    <div style={{marginTop: "15px"}}>Проект П-44</div>
                                    <div className="flex-sb">
                                        <span className="item-price">14900 $</span>
                                        <span className="item-area">
                                            44м
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
                                    <div style={{marginTop: "15px"}}>Проект П-59</div>
                                    <div className="flex-sb">
                                        <span className="item-price">14900 $</span>
                                        <span className="item-area">
                                            59м
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
                                    <div style={{marginTop: "15px"}}>Проект П-94</div>
                                    <div className="flex-sb">
                                        <span className="item-price">24800 $</span>
                                        <span className="item-area">
                                            94м
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
                                    <div style={{marginTop: "15px"}}>Проект П-74</div>
                                    <div className="flex-sb">
                                        <span className="item-price">18800 $</span>
                                        <span className="item-area">
                                            74м
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
                        <a className="flex-c" href="/house/5">
                            <div className="item-content house-item">
                                <div style={{backgroundImage: `url(${House5})`}} className="item-image">
                                    <div className="hover-effect"></div>
                                </div>
                                <div style={{margin: "0px"}} className="item-title t-align-c">
                                    <div style={{marginTop: "15px"}}>Проект П-79</div>
                                    <div className="flex-sb">
                                        <span className="item-price">22900 $</span>
                                        <span className="item-area">
                                            79м
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
                        <a className="flex-c" href="/house/6">
                            <div className="item-content house-item">
                                <div style={{backgroundImage: `url(${House6})`}} className="item-image">
                                    <div className="hover-effect"></div>
                                </div>
                                <div style={{margin: "0px"}} className="item-title t-align-c">
                                    <div style={{marginTop: "15px"}}>Проект П-92</div>
                                    <div className="flex-sb">
                                        <span className="item-price">29300 $</span>
                                        <span className="item-area">
                                            92м
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
                        <a className="flex-c" href="/house/7">
                            <div className="item-content house-item">
                                <div style={{backgroundImage: `url(${House7})`}} className="item-image">
                                    <div className="hover-effect"></div>
                                </div>
                                <div style={{margin: "0px"}} className="item-title t-align-c">
                                    <div style={{marginTop: "15px"}}>Проект П-150</div>
                                    <div className="flex-sb">
                                        <span className="item-price">31200 $</span>
                                        <span className="item-area">
                                            150м
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
                                    <div style={{marginTop: "15px"}}>Проект П-117</div>
                                    <div className="flex-sb">
                                        <span className="item-price">27800 $</span>
                                        <span className="item-area">
                                            117м
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
                                    <div style={{marginTop: "15px"}}>Проект П-184</div>
                                    <div className="flex-sb">
                                        <span className="item-price">43000 $</span>
                                        <span className="item-area">
                                            184м
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
                                    <div style={{marginTop: "15px"}}>Проект П-134</div>
                                    <div className="flex-sb">
                                        <span className="item-price">31200 $</span>
                                        <span className="item-area">
                                            134м
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
                        <a className="flex-c" href="/house/11">
                            <div className="item-content house-item">
                                <div style={{backgroundImage: `url(${House11})`}} className="item-image">
                                    <div className="hover-effect"></div>
                                </div>
                                <div style={{margin: "0px"}} className="item-title t-align-c">
                                    <div style={{marginTop: "15px"}}>Проект П-122</div>
                                    <div className="flex-sb">
                                        <span className="item-price">24000 $</span>
                                        <span className="item-area">
                                            122м
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
                        <a className="flex-c" href="/house/12">
                            <div className="item-content house-item">
                                <div style={{backgroundImage: `url(${House12})`}} className="item-image">
                                    <div className="hover-effect"></div>
                                </div>
                                <div style={{margin: "0px"}} className="item-title t-align-c">
                                    <div style={{marginTop: "15px"}}>Проект П-133</div>
                                    <div className="flex-sb">
                                        <span className="item-price">31000 $</span>
                                        <span className="item-area">
                                            133м
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
                        <a className="flex-c" href="/house/13">
                            <div className="item-content house-item">
                                <div style={{backgroundImage: `url(${House13})`}} className="item-image">
                                    <div className="hover-effect"></div>
                                </div>
                                <div style={{margin: "0px"}} className="item-title t-align-c">
                                    <div style={{marginTop: "15px"}}>Проект П-228</div>
                                    <div className="flex-sb">
                                        <span className="item-price">54500 $</span>
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