import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { Row, Col } from 'reactstrap';

class Price extends Component{
    render(){
        return(
            <div className="w-100" data-tabs="true" style={{marginTop: "25px"}}>
                <h2 className="main-section-title" style={{textAlign: "center"}}>Что входит в стоимость</h2>
                <div className="m-top-90 block-wrapper f-s-20">
                    <Row>
                        <Col md="3">
                            <div>
                                <div style={{textAlign: "center"}}>
                                    <img src={require('../images/fundament.svg')}  alt="" style={{width:"200px"}}/>
                                </div>
                            </div>
                            <p className="price-title">Фундамент</p>
                        </Col>
                        <Col md="3">
                            <div>
                                <div style={{textAlign: "center"}}>
                                    <img src={require('../images/walls.svg')}  alt="" style={{width:"200px"}}/>
                                </div>
                            </div>
                            <p className="price-title">Стеновой проект</p>
                        </Col>
                        <Col md="3">
                            <div>
                                <div style={{textAlign: "center"}}>
                                    <img src={require('../images/roof.svg')}  alt="" style={{width:"200px"}}/>
                                </div>
                            </div>
                            <p className="price-title">Кровля</p>
                        </Col>
                        <Col md="3">
                            <div>
                                <div style={{textAlign: "center"}}>
                                    <img src={require('../images/escort_hover.svg')}  alt="" style={{width:"200px"}}/>
                                </div>
                            </div>
                            <p className="price-title">Сопровождение<br/> строительства  </p>
                        </Col>
                    </Row>  
                </div>
            </div>
        )
    }
}
export default Price