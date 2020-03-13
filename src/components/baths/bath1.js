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

class Bath1Page extends Component{
    state = {
        selectedP: 0,
        stateP: false,
        selectedPa: 0,
        statePa: false,
        selectedI: 0,
        stateI: false,
        stateFeedback: false
    };
    toogleFeedback(){
        this.setState({stateFeedback: true})
    }
    toggleP(index){
        this.setState({selectedP: index, stateP: true})
    }
    togglePa(index){
        this.setState({selectedPa: index, statePa: true})
    }
    toggleI(index){
        this.setState({selectedI: index, stateI: true})
    }
    render(){
        const imagesP = [
            require("../../images/baths/1/p1.jpeg")
        ];
        const imagesPa = [
            require("../../images/baths/1/pa1.jpeg")
        ];
        const imagesI = [
            require("../../images/baths/1/i1.jpeg")
        ];
        return(
            <>
                <Header/>
                <section className="qwer">
                    <div className="block-wrapper">
                        <div className="q">
                            <h1>Баня Б-16</h1>
                        </div>
                        <div className="qq">
                            <div className="qqq">
                                <AwesomeSlider>
                                    <div data-src={require("../../images/baths/1/m1.jpeg")} />
                                </AwesomeSlider>  
                            </div>
                            <div className="qqqq">
                                <div className="detail_area col-md-12">16м<sup>2</sup></div>
                                <div className="flex-sb flex-w">
                                    <div className="detail_area col-md-12 price-bath">6500 $</div>
                                    <a className="button" href="#" onClick={this.toogleFeedback.bind(this)}>ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ</a>
                                </div>
                            </div>
                            <div className="w-100" data-tabs="true" style={{marginTop: "25px"}}>
                                <Tabs>
                                    <TabList>
                                        <Tab>Планировка</Tab>
                                        <Tab>Парная</Tab>
                                        <Tab>Интерьер</Tab>
                                    </TabList>

                                    <TabPanel>
                                        <div className="outline-no" onClick={() => this.toggleP(0)} >
                                            <div style={{
                                                cursor: 'pointer',
                                                maxWidth: '100%',
                                                backgroundImage: `url(${require('../../images/baths/1/p1.jpeg')})`
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
                                        <div className="outline-no" onClick={() => this.togglePa(0)} >
                                            <div style={{
                                                cursor: 'pointer',
                                                maxWidth: '100%',
                                                backgroundImage: `url(${require('../../images/baths/1/pa1.jpeg')})`
                                            }} className="q123" ></div>
                                        </div>
                                        {this.state.statePa &&
                                        <Lightbox
                                            mainSrc={imagesPa[this.state.selectedPa]}
                                            nextSrc={imagesPa[(this.state.selectedPa + 1) % imagesPa.length]}
                                            prevSrc={imagesPa[(this.state.selectedPa + imagesPa.length - 1) % imagesPa.length]}
                                            onCloseRequest={() => this.setState({ stateF: false })}
                                            onMovePrevRequest={() =>
                                            this.setState({
                                                selectedPa: (this.state.selectedPa + imagesPa.length - 1) % imagesPa.length,
                                            })
                                            }
                                            onMoveNextRequest={() =>
                                            this.setState({
                                                selectedPa: (this.state.selectedPa + 1) % imagesPa.length,
                                            })
                                            }
                                        />}
                                    </TabPanel>
                                    <TabPanel>
                                        <div className="outline-no" onClick={() => this.toggleI(0)} >
                                            <div style={{
                                                cursor: 'pointer',
                                                maxWidth: '100%',
                                                backgroundImage: `url(${require('../../images/baths/1/i1.jpeg')})`
                                            }} className="q123" ></div>
                                        </div>
                                        {this.state.stateI &&
                                        <Lightbox
                                            mainSrc={imagesI[this.state.selectedI]}
                                            nextSrc={imagesI[(this.state.selectedI + 1) % imagesI.length]}
                                            prevSrc={imagesI[(this.state.selectedI + imagesI.length - 1) % imagesI.length]}
                                            onCloseRequest={() => this.setState({ stateP: false })}
                                            onMovePrevRequest={() =>
                                            this.setState({
                                                selectedI: (this.state.selectedI + imagesI.length - 1) % imagesI.length,
                                            })
                                            }
                                            onMoveNextRequest={() =>
                                            this.setState({
                                                selectedI: (this.state.selectedI + 1) % imagesI.length,
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
export default Bath1Page