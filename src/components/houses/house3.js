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
class House3Page extends Component{
    state = {
        selectedP: 0,
        stateP: false,
        selectedR: 0,
        stateR: false,
        selectedF: 0,
        stateF: false
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
    render(){
        const imagesP = [
            require("../../images/houses/3/p1.jpg")
        ];
        const imagesR = [
            require("../../images/houses/3/r1.jpg")
        ];
        const imagesF = [
            require("../../images/houses/3/f1.jpg"),
            require("../../images/houses/3/f2.jpg"),
            require("../../images/houses/3/f3.jpg"),
            require("../../images/houses/3/f4.jpg")
        ];
        return(
            <>
                <Header/>
                <section className="qwer">
                    <div className="block-wrapper">
                        <div className="q">
                            <h1>Проект П-135</h1>
                        </div>
                        <div className="qq">
                            <div className="qqq">
                                <AwesomeSlider>
                                    <div data-src={require("../../images/houses/3/m1.jpg")} />
                                    <div data-src={require("../../images/houses/3/m2.jpg")} />
                                </AwesomeSlider>  
                            </div>
                            <div className="qqqq">
                                <div className="detail_area col-md-12">52м<sup>2</sup></div>
                                <div className="flex-sb flex-w">
                                    <div className="flex-c w-50 flex-r m-bot w-100-1">
                                        <div className="flex f-s-50">
                                            2
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
                                        <span className="f-s-24">санузел</span>
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
                                    <div className="detail_area col-md-12 m-t-100">27300 BYN</div>
                                    <a className="button" href="/">ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ</a>
                                </div>
                            </div>
                            <div className="w-100" data-tabs="true" style={{marginTop: "25px"}}>
                                <Tabs>
                                    <TabList>
                                        <Tab>Планировка</Tab>
                                        <Tab>Фасады</Tab>
                                        <Tab>Реализация</Tab>
                                    </TabList>

                                    <TabPanel>
                                        <div className="outline-no" onClick={() => this.toggleP(0)} >
                                            <div style={{
                                                cursor: 'pointer',
                                                maxWidth: '100%',
                                                backgroundImage: `url(${require('../../images/houses/3/p1.jpg')})`
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
                                                backgroundImage: `url(${require('../../images/houses/3/f1.jpg')})`
                                            }} className="q123" ></div>
                                        </div>
                                        <div className="outline-no" onClick={() => this.toggleF(1)} >
                                            <div style={{
                                                cursor: 'pointer',
                                                maxWidth: '100%',
                                                backgroundImage: `url(${require('../../images/houses/3/f2.jpg')})`
                                            }} className="q123" ></div>
                                        </div>
                                        <div className="outline-no" onClick={() => this.toggleF(2)} >
                                            <div style={{
                                                cursor: 'pointer',
                                                maxWidth: '100%',
                                                backgroundImage: `url(${require('../../images/houses/3/f3.jpg')})`
                                            }} className="q123" ></div>
                                        </div>
                                        <div className="outline-no" onClick={() => this.toggleF(3)} >
                                            <div style={{
                                                cursor: 'pointer',
                                                maxWidth: '100%',
                                                backgroundImage: `url(${require('../../images/houses/3/f4.jpg')})`
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
                                                backgroundImage: `url(${require('../../images/houses/3/r1.jpg')})`
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
                                </Tabs>
                            </div>
                            <div className="description-block">
                                <h2 className="text-header">Проект П-52</h2>
                                <div className="description-text">
                                Небольшой по размеру, но имеющий все необходимые функции дом за городом. С улицы постройка выглядит не очень большой по размеру, а вот находящийся внутри человек сможет сполна оценить свободное место и простор. Комнаты распланированы так, чтобы жить в них было удобно. Войдя в коридор, человек будет приятно удивлен отдельным гардеробом. Кстати, из него есть выход в абсолютно все комнаты. Гостиная практично соединяется со столовой, в которой поместится даже большая семья или компания друзей. Из столовой можно попасть как в ванную, где находится душевая кабина, так и в гостиную комнату. Она разделена на место для отдыха и для игр, благодаря чему экономится место в доме. Не только в столовой можно с комфортом поесть, но также на удобной кухне с широким столом. Если вы всегда мечтали о камине, то мечте пора сбыться: он в гостиной, способный согреть вас даже в зимние холода. Любите выйти на веранду и полюбоваться природой, подышать? Теперь можно выйти туда прямо из гостиной, ведь все здесь создано для вашего комфорта. Данный проект предназначен, чтобы жить в нем постоянно, а также может использоваться, как место отдыха на выходных.
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
export default House3Page