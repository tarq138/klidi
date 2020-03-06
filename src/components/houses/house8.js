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
class House8Page extends Component{
    state = {
        selectedP: 0,
        stateP: false,
        selectedF: 0,
        stateF: false,
        selectedI: 0,
        stateI: false
    };
    toggleP(index){
        this.setState({selectedP: index, stateP: true})
    }
    toggleF(index){
        this.setState({selectedF: index, stateF: true})
    }
    toggleI(index){
        this.setState({selectedI: index, stateI: true})
    }
    render(){
        const imagesP = [
            require("../../images/houses/8/p1.jpg"),
            require("../../images/houses/8/p2.jpg")
        ];
        const imagesF = [
            require("../../images/houses/8/f1.jpg"),
            require("../../images/houses/8/f2.jpg"),
            require("../../images/houses/8/f3.jpg"),
            require("../../images/houses/8/f4.jpg")
        ];
        const imagesI = [
            require("../../images/houses/8/i1.jpg"),
            require("../../images/houses/8/i2.jpg"),
            require("../../images/houses/8/i3.jpg"),
            require("../../images/houses/8/i4.jpg"),
            require("../../images/houses/8/i5.jpg")
        ];
        return(
            <>
                <Header/>
                <section className="qwer">
                    <div className="block-wrapper">
                        <div className="q">
                            <h1>Проект П-102</h1>
                        </div>
                        <div className="qq">
                            <div className="qqq">
                                <AwesomeSlider>
                                    <div data-src={require("../../images/houses/8/m1.jpg")} />
                                    <div data-src={require("../../images/houses/8/m2.jpg")} />
                                    <div data-src={require("../../images/houses/8/m3.jpg")} />
                                </AwesomeSlider>  
                            </div>
                            <div className="qqqq">
                                <div className="detail_area col-md-12">135м<sup>2</sup></div>
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
                                        <span className="f-s-24">комнат</span>
                                    </div>
                                    <div className="flex-c w-50 flex-r m-bot w-100-1">
                                        <div className="flex f-s-50">
                                            2
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
                                                    <img src={require('../../images/balcon.svg')}  alt="" style={{width:"50px"}}/>
                                                </div>
                                            </div>
                                        </div>
                                        <span className="f-s-24">балкон</span>
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
                                    <div className="detail_area col-md-12 m-t-100">53500 BYN</div>
                                    <a className="button" href="/">ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ</a>
                                </div>
                            </div>
                            <div className="w-100" data-tabs="true" style={{marginTop: "25px"}}>
                                <Tabs>
                                    <TabList>
                                        <Tab>Планировка</Tab>
                                        <Tab>Фасады</Tab>
                                        <Tab>ИНтерьер</Tab>
                                    </TabList>

                                    <TabPanel>
                                        <div className="outline-no" onClick={() => this.toggleP(0)} >
                                            <div style={{
                                                cursor: 'pointer',
                                                maxWidth: '100%',
                                                backgroundImage: `url(${require('../../images/houses/8/p1.jpg')})`
                                            }} className="q123" ></div>
                                        </div>
                                        <div className="outline-no" onClick={() => this.toggleP(1)} >
                                            <div style={{
                                                cursor: 'pointer',
                                                maxWidth: '100%',
                                                backgroundImage: `url(${require('../../images/houses/8/p2.jpg')})`
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
                                                backgroundImage: `url(${require('../../images/houses/8/f1.jpg')})`
                                            }} className="q123" ></div>
                                        </div>
                                        <div className="outline-no" onClick={() => this.toggleF(1)} >
                                            <div style={{
                                                cursor: 'pointer',
                                                maxWidth: '100%',
                                                backgroundImage: `url(${require('../../images/houses/8/f2.jpg')})`
                                            }} className="q123" ></div>
                                        </div>
                                        <div className="outline-no" onClick={() => this.toggleF(2)} >
                                            <div style={{
                                                cursor: 'pointer',
                                                maxWidth: '100%',
                                                backgroundImage: `url(${require('../../images/houses/8/f3.jpg')})`
                                            }} className="q123" ></div>
                                        </div>
                                        <div className="outline-no" onClick={() => this.toggleF(3)} >
                                            <div style={{
                                                cursor: 'pointer',
                                                maxWidth: '100%',
                                                backgroundImage: `url(${require('../../images/houses/8/f4.jpg')})`
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
                                        <div className="outline-no" onClick={() => this.toggleI(0)} >
                                            <div style={{
                                                cursor: 'pointer',
                                                maxWidth: '100%',
                                                backgroundImage: `url(${require('../../images/houses/8/i1.jpg')})`
                                            }} className="q123" ></div>
                                        </div>
                                        <div className="outline-no" onClick={() => this.toggleI(1)} >
                                            <div style={{
                                                cursor: 'pointer',
                                                maxWidth: '100%',
                                                backgroundImage: `url(${require('../../images/houses/8/i2.jpg')})`
                                            }} className="q123" ></div>
                                        </div>
                                        <div className="outline-no" onClick={() => this.toggleI(2)} >
                                            <div style={{
                                                cursor: 'pointer',
                                                maxWidth: '100%',
                                                backgroundImage: `url(${require('../../images/houses/8/i3.jpg')})`
                                            }} className="q123" ></div>
                                        </div>
                                        <div className="outline-no" onClick={() => this.toggleI(3)} >
                                            <div style={{
                                                cursor: 'pointer',
                                                maxWidth: '100%',
                                                backgroundImage: `url(${require('../../images/houses/8/i4.jpg')})`
                                            }} className="q123" ></div>
                                        </div>
                                        <div className="outline-no" onClick={() => this.toggleI(4)} >
                                            <div style={{
                                                cursor: 'pointer',
                                                maxWidth: '100%',
                                                backgroundImage: `url(${require('../../images/houses/8/i5.jpg')})`
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
                                <h2 className="text-header">Проект П-102</h2>
                                <div className="description-text">Маленькие дома являются самыми привлекательными и уютными, и подтверждением данному факту следует выбрать этот проект. Относительно небольшое строение, которое обладает и изысканной архитектурой и продуманной внутренней планировкой пространства. Оптимальным вариантом является размещение данного строения на небольших земельных участках. Привлекательная фасадная группа имеет просторное крыльцо и массивные колонны с крышей, под которой так приятно наслаждаться свежим воздухом и приятным досугом. Внешняя отделка сочетает в себе элементы из натуральных древесных панелей и классической штукатурки в бежевых и серых тонах. В нижней части дома располагается открытая кухня, которая условно зонирована от пространства гостиной и столовой. Помимо этого там есть подсобное помещение – котельная, которая имеет отдельный выход на задний двор и зимний сад дома. В планировке используется общий дымоход для котельной и гостиной – дополнительное удобство в плане эксплуатации строения. Прихожая, которая располагается на первом этаже, соединена с ванной. Второй этаж является зоной отдыха, там есть две спальни поменьше и одна большая спальня с собственным гардеробом. Помимо этого на втором этаже имеется собственный гардероб и ванная. Данный проект отличается индивидуальностью, оригинальностью и уютом. В относительно небольшом пространстве сформированы оптимальные условия для частного проживания.
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
export default House8Page