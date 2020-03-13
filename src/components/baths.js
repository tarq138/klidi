import React, { Component } from 'react';
import Header from './header';
import Feedback from './feedback'
import Bath1 from '../images/baths/1/m1.jpeg';
import Bath2 from '../images/baths/2/m1.jpeg';
import Bath3 from '../images/baths/3/m1.jpeg';
import {Col, Row} from 'reactstrap'

class BathsPage extends Component{
    render(){
        return(
            <div>
                <Header/>
                <div className="flex-w block-wrapper">
                 <Row>
                        <Col md="4">
                    <div className="house-block">
                        <a className="flex-c" href="/bath/1">
                            <div className="item-content house-item">
                                <div style={{backgroundImage: `url(${Bath1})`}} className="item-image">
                                    <div className="hover-effect"></div>
                                </div>
                                <div style={{margin: "0px"}} className="item-title t-align-c">
                                    <div style={{marginTop: "15px"}}>Баня Б-16</div>
                                    <div className="flex-sb">
                                        <span className="item-price">6500 $</span>
                                        <span className="item-area">
                                            16м
                                            <sup>
                                                <small>2</small>
                                            </sup>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    </Col>
                    <Col md="4">
                    <div className=" house-block">
                        <a className="flex-c" href="/bath/2">
                            <div className="item-content house-item">
                                <div style={{backgroundImage: `url(${Bath2})`}} className="item-image">
                                    <div className="hover-effect"></div>
                                </div>
                                <div style={{margin: "0px"}} className="item-title t-align-c">
                                    <div style={{marginTop: "15px"}}>Баня Б-41</div>
                                    <div className="flex-sb">
                                        <span className="item-price">15800 $</span>
                                        <span className="item-area">
                                            41м
                                            <sup>
                                                <small>2</small>
                                            </sup>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    </Col>
                    <Col md="4">
                    <div className=" house-block">
                        <a className="flex-c" href="/bath/3">
                            <div className="item-content house-item">
                                <div style={{backgroundImage: `url(${Bath3})`}} className="item-image">
                                    <div className="hover-effect"></div>
                                </div>
                                <div style={{margin: "0px"}} className="item-title t-align-c">
                                    <div style={{marginTop: "15px"}}>Баня Б-81</div>
                                    <div className="flex-sb">
                                        <span className="item-price">23900 $</span>
                                        <span className="item-area">
                                            81м
                                            <sup>
                                                <small>2</small>
                                            </sup>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    </Col>
                    </Row>
                </div>
                <Feedback/>
            </div>
        )
    }
}
export default BathsPage