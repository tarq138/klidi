import React, { Component } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css';
import Header from '../header';
import Price from '../price';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; 
import Feedback from '../feedback'

class Bath3Page extends Component{
    state = {
        selectedP: 0,
        stateP: false,
        selectedR: 0,
        stateR: false,
        selectedF: 0,
        stateF: false,
        stateFeedback: false
    };
    toogleFeedback(){
        this.setState({stateFeedback: true})
    }
    toggleP(index){
        this.setState({selectedP: index, stateP: true})
    }
    toggleR(index){
        this.setState({selectedR: index, stateR: true})
    }
    toggleF(index){
        this.setState({selectedF: index, stateF: true})
    }
    render(){
        const imagesP = [
            require("../../images/baths/3/p1.jpeg")
        ];
        const imagesR = [
            require("../../images/baths/3/r1.jpeg")
        ];
        const imagesF = [
            require("../../images/baths/3/f1.jpeg")
        ];
        return(
            <>
                <Header/>
                <section className="qwer">
                    <div className="block-wrapper">
                        <div className="q">
                            <h1>Баня Б-81</h1>
                        </div>
                        <div className="qq">
                            <div className="qqq">
                                <AwesomeSlider>
                                    <div data-src={require("../../images/baths/3/m1.jpeg")} />
                                </AwesomeSlider>  
                            </div>
                            <div className="qqqq">
                            <div className="detail_area col-md-12">40м<sup>2</sup>+41м<sup>2</sup> терраса</div>
                                <div className="flex-sb flex-w">
                                    <div className="detail_area col-md-12 price-bath">23900 $</div>
                                    <a className="button" href="#" onClick={this.toogleFeedback.bind(this)}>ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ</a>
                                </div>
                            </div>
                            <div className="w-100" data-tabs="true" style={{marginTop: "25px"}}>
                                <Tabs>
                                    <TabList>
                                        <Tab>Планировка</Tab>
                                        <Tab>Реализация</Tab>
                                        <Tab>Фасад</Tab>
                                    </TabList>

                                    <TabPanel>
                                        <div className="outline-no" onClick={() => this.toggleP(0)} >
                                            <div style={{
                                                cursor: 'pointer',
                                                maxWidth: '100%',
                                                backgroundImage: `url(${require('../../images/baths/3/p1.jpeg')})`
                                            }} className="q123" ></div>
                                        </div>
                                        {this.state.stateP &&
                                        <Lightbox
                                            mainSrc={imagesP[this.state.selectedP]}
                                            nextSrc={imagesP[(this.state.selectedP + 1) % imagesP.length]}
                                            prevSrc={imagesP[(this.state.selectedP + imagesP.length - 1) % imagesP.length]}
                                            onCloseRequest={() => this.setState({ stateP: false })}
                                            onMovePrevRequest={() =>
                                            this.setState({
                                                selectedP: (this.state.selectedP + imagesP.length - 1) % imagesP.length,
                                            })
                                            }
                                            onMoveNextRequest={() =>
                                            this.setState({
                                                selectedP: (this.state.selectedP + 1) % imagesP.length,
                                            })
                                            }
                                        />}
                                    </TabPanel>
                                    <TabPanel>
                                        <div className="outline-no" onClick={() => this.toggleR(0)} >
                                            <div style={{
                                                cursor: 'pointer',
                                                maxWidth: '100%',
                                                backgroundImage: `url(${require('../../images/baths/3/r1.jpeg')})`
                                            }} className="q123" ></div>
                                        </div>
                                        {this.state.stateR &&
                                        <Lightbox
                                            mainSrc={imagesR[this.state.selectedR]}
                                            nextSrc={imagesR[(this.state.selectedR + 1) % imagesR.length]}
                                            prevSrc={imagesR[(this.state.selectedR + imagesR.length - 1) % imagesR.length]}
                                            onCloseRequest={() => this.setState({ stateF: false })}
                                            onMovePrevRequest={() =>
                                            this.setState({
                                                selectedR: (this.state.selectedR + imagesR.length - 1) % imagesR.length,
                                            })
                                            }
                                            onMoveNextRequest={() =>
                                            this.setState({
                                                selectedR: (this.state.selectedR + 1) % imagesR.length,
                                            })
                                            }
                                        />}
                                    </TabPanel>
                                    <TabPanel>
                                        <div className="outline-no" onClick={() => this.toggleF(0)} >
                                            <div style={{
                                                cursor: 'pointer',
                                                maxWidth: '100%',
                                                backgroundImage: `url(${require('../../images/baths/3/f1.jpeg')})`
                                            }} className="q123" ></div>
                                        </div>
                                        {this.state.stateF &&
                                        <Lightbox
                                            mainSrc={imagesF[this.state.selectedF]}
                                            nextSrc={imagesF[(this.state.selectedF + 1) % imagesF.length]}
                                            prevSrc={imagesF[(this.state.selectedF + imagesF.length - 1) % imagesF.length]}
                                            onCloseRequest={() => this.setState({ stateP: false })}
                                            onMovePrevRequest={() =>
                                            this.setState({
                                                selectedF: (this.state.selectedF + imagesF.length - 1) % imagesF.length,
                                            })
                                            }
                                            onMoveNextRequest={() =>
                                            this.setState({
                                                selectedF: (this.state.selectedF + 1) % imagesF.length,
                                            })
                                            }
                                        />}
                                    </TabPanel>
                                </Tabs>
                            </div>
                            <Price />
                            <Feedback stateFeedback={this.state.stateFeedback}/>
                        </div>
                    </div>
                </section>
                
            </>
        )
    }
}
export default Bath3Page