import React, { Component } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css';
import Header from '../header';
import Price from './price';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; 
import Feedback from '../feedback'
class House9Page extends Component{
    state = {
        selectedP: 0,
        stateP: false,
        selectedR: 0,
        stateR: false,
        selectedF: 0,
        stateF: false,
        selectedI: 0,
        stateI: false
    };
    toggleP(index){
        this.setState({selectedP: index, stateP: true})
    }
    toggleR(index){
        this.setState({selectedR: index, stateR: true})
    }
    toggleF(index){
        this.setState({selectedF: index, stateF: true})
    }
    toggleI(index){
        this.setState({selectedI: index, stateI: true})
    }
    render(){
        const imagesP = [
            require("../../images/houses/9/p1.jpg")
        ];
        const imagesR = [
            require("../../images/houses/9/r1.jpg"),
            require("../../images/houses/9/r2.jpg"),
            require("../../images/houses/9/r3.jpg")
        ];
        const imagesF = [
            require("../../images/houses/9/f1.jpg"),
            require("../../images/houses/9/f2.jpg"),
            require("../../images/houses/9/f3.jpg"),
            require("../../images/houses/9/f4.jpg")
        ];
        const imagesI = [
            require("../../images/houses/9/i1.jpg"),
            require("../../images/houses/9/i2.jpg"),
            require("../../images/houses/9/i3.jpg"),
            require("../../images/houses/9/i4.jpg"),
            require("../../images/houses/9/i5.jpg")
        ];
        return(
            <>
                <Header/>
                <section className="qwer">
                    <div className="block-wrapper">
                        <div className="q">
                            <h1>Проект П-85</h1>
                        </div>
                        <div className="qq">
                            <div className="qqq">
                                <AwesomeSlider>
                                    <div data-src={require("../../images/houses/9/m1.jpg")} />
                                    <div data-src={require("../../images/houses/9/m2.jpg")} />
                                </AwesomeSlider>  
                            </div>
                            <div className="qqqq">
                                <div className="detail_area col-md-12">85м<sup>2</sup></div>
                                <div className="flex-sb flex-w">
                                    <div className="flex-c w-50 flex-r m-bot w-100-1">
                                        <div className="flex f-s-50">
                                            4
                                            <div>
                                                <div>
                                                    <img src={require('../../images/bedroom.svg')}  alt="" style={{width:"50px"}}/>
                                                </div>
                                            </div>
                                        </div>
                                        <span className="f-s-24">комнаты</span>
                                    </div>
                                    <div className="flex-c w-50 flex-r m-bot w-100-1">
                                        <div className="flex f-s-50">
                                            1
                                            <div>
                                                <div>
                                                    <img src={require('../../images/wc.svg')}  alt="" style={{width:"50px"}}/>
                                                </div>
                                            </div>
                                        </div>
                                        <span className="f-s-24">санузела</span>
                                    </div>
                                    <div className="flex-c w-50 flex-r m-bot w-100-1">
                                        <div className="flex f-s-50">
                                            1
                                            <div>
                                                <div>
                                                    <img src={require('../../images/terrace.svg')}  alt="" style={{width:"50px"}}/>
                                                </div>
                                            </div>
                                        </div>
                                        <span className="f-s-24">терраса</span>
                                    </div>
                                    <div className="detail_area col-md-12 m-t-100">45000 BYN</div>
                                    <a className="button" href="/">ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ</a>
                                </div>
                            </div>
                            <div className="w-100" data-tabs="true" style={{marginTop: "25px"}}>
                                <Tabs>
                                    <TabList>
                                        <Tab>Планировка</Tab>
                                        <Tab>Фасады</Tab>
                                        <Tab>Реаоизация</Tab>
                                        <Tab>Интерьер</Tab>
                                    </TabList>

                                    <TabPanel>
                                        <div className="outline-no" onClick={() => this.toggleP(0)} >
                                            <div style={{
                                                cursor: 'pointer',
                                                maxWidth: '100%',
                                                backgroundImage: `url(${require('../../images/houses/9/p1.jpg')})`
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
                                        <div className="outline-no" onClick={() => this.toggleF(0)} >
                                            <div style={{
                                                cursor: 'pointer',
                                                maxWidth: '100%',
                                                backgroundImage: `url(${require('../../images/houses/9/f1.jpg')})`
                                            }} className="q123" ></div>
                                        </div>
                                        <div className="outline-no" onClick={() => this.toggleF(1)} >
                                            <div style={{
                                                cursor: 'pointer',
                                                maxWidth: '100%',
                                                backgroundImage: `url(${require('../../images/houses/9/f2.jpg')})`
                                            }} className="q123" ></div>
                                        </div>
                                        <div className="outline-no" onClick={() => this.toggleF(2)} >
                                            <div style={{
                                                cursor: 'pointer',
                                                maxWidth: '100%',
                                                backgroundImage: `url(${require('../../images/houses/9/f3.jpg')})`
                                            }} className="q123" ></div>
                                        </div>
                                        <div className="outline-no" onClick={() => this.toggleF(3)} >
                                            <div style={{
                                                cursor: 'pointer',
                                                maxWidth: '100%',
                                                backgroundImage: `url(${require('../../images/houses/9/f4.jpg')})`
                                            }} className="q123" ></div>
                                        </div>
                                        {this.state.stateF &&
                                        <Lightbox
                                            mainSrc={imagesF[this.state.selectedF]}
                                            nextSrc={imagesF[(this.state.selectedF + 1) % imagesF.length]}
                                            prevSrc={imagesF[(this.state.selectedF + imagesF.length - 1) % imagesF.length]}
                                            onCloseRequest={() => this.setState({ stateF: false })}
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
                                    <TabPanel>
                                        <div className="outline-no" onClick={() => this.toggleR(0)} >
                                            <div style={{
                                                cursor: 'pointer',
                                                maxWidth: '100%',
                                                backgroundImage: `url(${require('../../images/houses/9/r1.jpg')})`
                                            }} className="q123" ></div>
                                        </div>
                                        <div className="outline-no" onClick={() => this.toggleR(1)} >
                                            <div style={{
                                                cursor: 'pointer',
                                                maxWidth: '100%',
                                                backgroundImage: `url(${require('../../images/houses/9/r2.jpg')})`
                                            }} className="q123" ></div>
                                        </div>
                                        <div className="outline-no" onClick={() => this.toggleR(2)} >
                                            <div style={{
                                                cursor: 'pointer',
                                                maxWidth: '100%',
                                                backgroundImage: `url(${require('../../images/houses/9/r3.jpg')})`
                                            }} className="q123" ></div>
                                        </div>
                                        {this.state.stateR &&
                                        <Lightbox
                                            mainSrc={imagesR[this.state.selectedR]}
                                            nextSrc={imagesR[(this.state.selectedR + 1) % imagesR.length]}
                                            prevSrc={imagesR[(this.state.selectedR + imagesR.length - 1) % imagesR.length]}
                                            onCloseRequest={() => this.setState({ stateR: false })}
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
                                        <div className="outline-no" onClick={() => this.toggleI(0)} >
                                            <div style={{
                                                cursor: 'pointer',
                                                maxWidth: '100%',
                                                backgroundImage: `url(${require('../../images/houses/9/i1.jpg')})`
                                            }} className="q123" ></div>
                                        </div>
                                        <div className="outline-no" onClick={() => this.toggleI(1)} >
                                            <div style={{
                                                cursor: 'pointer',
                                                maxWidth: '100%',
                                                backgroundImage: `url(${require('../../images/houses/9/i2.jpg')})`
                                            }} className="q123" ></div>
                                        </div>
                                        <div className="outline-no" onClick={() => this.toggleI(2)} >
                                            <div style={{
                                                cursor: 'pointer',
                                                maxWidth: '100%',
                                                backgroundImage: `url(${require('../../images/houses/9/i3.jpg')})`
                                            }} className="q123" ></div>
                                        </div>
                                        <div className="outline-no" onClick={() => this.toggleI(3)} >
                                            <div style={{
                                                cursor: 'pointer',
                                                maxWidth: '100%',
                                                backgroundImage: `url(${require('../../images/houses/9/i4.jpg')})`
                                            }} className="q123" ></div>
                                        </div>
                                        <div className="outline-no" onClick={() => this.toggleI(4)} >
                                            <div style={{
                                                cursor: 'pointer',
                                                maxWidth: '100%',
                                                backgroundImage: `url(${require('../../images/houses/9/i5.jpg')})`
                                            }} className="q123" ></div>
                                        </div>
                                        {this.state.stateI &&
                                        <Lightbox
                                            mainSrc={imagesI[this.state.selectedI]}
                                            nextSrc={imagesI[(this.state.selectedI + 1) % imagesI.length]}
                                            prevSrc={imagesI[(this.state.selectedI + imagesI.length - 1) % imagesI.length]}
                                            onCloseRequest={() => this.setState({ stateI: false })}
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
                            <div className="description-block">
                                <h2 className="text-header">Проект П-85</h2>
                                <div className="description-text">
                                Это проект небольшого одноэтажного дома с двускатной конструкцией крыши. Современная технология каркасного строительства позволяет выполнить работы в короткие сроки. Фасад блочного дома, выполненный с использованием деревянных вставок, органично сочетается с черепичной крышей. Крытое входное крыльцо отделено от основной жилой зоны небольшой прихожей. Внутреннее пространство одноэтажного красивого дома функционально распланировано и разделено на три спальни, ванную комнату, а также на выделенную гостевую зону, объединённую с кухней и небольшим хозяйственным помещением. Сплошное остекление, выполненное с помощью стеклянных дверей, позволяет объединить гостиную с крытой террасой, которая визуально увеличивает комнату и даёт дополнительный объём в летний сезон. Проект загородного дома идеально подойдёт для всех, кто предпочитает простые, функциональные и экономичные решения при выборе коттеджа.
                                </div>
                            </div>
                            <Price />
                            <Feedback/>
                        </div>
                    </div>
                </section>
                
            </>
        )
    }
}
export default House9Page