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
class House1Page extends Component{
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
            require("../../images/houses/1/p1.jpg")
        ];
        const imagesR = [
            require("../../images/houses/1/r1.jpg")
        ];
        const imagesF = [
            require("../../images/houses/1/f1.jpg"),
            require("../../images/houses/1/f2.jpg"),
            require("../../images/houses/1/f3.jpg"),
            require("../../images/houses/1/f4.jpg")
        ];
        const imagesI = [
            require("../../images/houses/1/i1.jpg"),
            require("../../images/houses/1/i2.jpg"),
            require("../../images/houses/1/i3.jpg"),
            require("../../images/houses/1/i4.jpg"),
            require("../../images/houses/1/i5.jpg"),
            require("../../images/houses/1/i6.jpg")
        ];
        return(
            <>
                <Header/>
                <section className="qwer">
                    <div className="block-wrapper">
                        <div className="q">
                            <h1>Проект П-120</h1>
                        </div>
                        <div className="qq">
                            <div className="qqq">
                                <AwesomeSlider>
                                    <div data-src={require("../../images/houses/1/m1.jpg")} />
                                    <div data-src={require("../../images/houses/1/m2.jpg")} />
                                </AwesomeSlider>  
                            </div>
                            <div className="qqqq">
                                <div className="detail_area col-md-12">120м<sup>2</sup></div>
                                <div className="flex-sb flex-w">
                                    <div className="flex-c w-50 flex-r m-bot w-100-1">
                                        <div className="flex f-s-50">
                                            3
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
                                    <div className="detail_area col-md-12 m-t-100">63000 BYN</div>
                                    <a className="button" href="/">ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ</a>
                                </div>
                            </div>
                            <div className="w-100" data-tabs="true" style={{marginTop: "25px"}}>
                                <Tabs>
                                    <TabList>
                                        <Tab>Планировка</Tab>
                                        <Tab>Фасады</Tab>
                                        <Tab>Реализация</Tab>
                                        <Tab>Интерьер</Tab>
                                    </TabList>

                                    <TabPanel>
                                        <div className="outline-no" onClick={() => this.toggleP(0)} >
                                            <div style={{
                                                cursor: 'pointer',
                                                maxWidth: '100%',
                                                backgroundImage: `url(${require('../../images/houses/1/p1.jpg')})`
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
                                                backgroundImage: `url(${require('../../images/houses/1/f1.jpg')})`
                                            }} className="q123" ></div>
                                        </div>
                                        <div className="outline-no" onClick={() => this.toggleF(1)} >
                                            <div style={{
                                                cursor: 'pointer',
                                                maxWidth: '100%',
                                                backgroundImage: `url(${require('../../images/houses/1/f2.jpg')})`
                                            }} className="q123" ></div>
                                        </div>
                                        <div className="outline-no" onClick={() => this.toggleF(2)} >
                                            <div style={{
                                                cursor: 'pointer',
                                                maxWidth: '100%',
                                                backgroundImage: `url(${require('../../images/houses/1/f3.jpg')})`
                                            }} className="q123" ></div>
                                        </div>
                                        <div className="outline-no" onClick={() => this.toggleF(3)} >
                                            <div style={{
                                                cursor: 'pointer',
                                                maxWidth: '100%',
                                                backgroundImage: `url(${require('../../images/houses/1/f4.jpg')})`
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
                                                backgroundImage: `url(${require('../../images/houses/1/r1.jpg')})`
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
                                                backgroundImage: `url(${require('../../images/houses/1/i1.jpg')})`
                                            }} className="q123" ></div>
                                        </div>
                                        <div className="outline-no" onClick={() => this.toggleI(1)} >
                                            <div style={{
                                                cursor: 'pointer',
                                                maxWidth: '100%',
                                                backgroundImage: `url(${require('../../images/houses/1/i2.jpg')})`
                                            }} className="q123" ></div>
                                        </div>
                                        <div className="outline-no" onClick={() => this.toggleI(2)} >
                                            <div style={{
                                                cursor: 'pointer',
                                                maxWidth: '100%',
                                                backgroundImage: `url(${require('../../images/houses/1/i3.jpg')})`
                                            }} className="q123" ></div>
                                        </div>
                                        <div className="outline-no" onClick={() => this.toggleI(3)} >
                                            <div style={{
                                                cursor: 'pointer',
                                                maxWidth: '100%',
                                                backgroundImage: `url(${require('../../images/houses/1/i4.jpg')})`
                                            }} className="q123" ></div>
                                        </div>
                                        <div className="outline-no" onClick={() => this.toggleI(4)} >
                                            <div style={{
                                                cursor: 'pointer',
                                                maxWidth: '100%',
                                                backgroundImage: `url(${require('../../images/houses/1/i5.jpg')})`
                                            }} className="q123" ></div>
                                        </div>
                                        <div className="outline-no" onClick={() => this.toggleI(5)} >
                                            <div style={{
                                                cursor: 'pointer',
                                                maxWidth: '100%',
                                                backgroundImage: `url(${require('../../images/houses/1/i6.jpg')})`
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
                                <h2 className="text-header">Проект П-120</h2>
                                <div className="description-text">
                                Данный проект обладает внешней оригинальностью и при этом внутренней простотой. Он не имеет аналогов, повторений. Благодаря уникальности дом легко вписывается в любые ландшафтные картины и пейзажи и в земельные наделы любого вида. Дом не очень большой, сформирован логично, экономично. В нём один этаж. Крыша имеет два ската. Строить его недолго. Проект низкобюджетный и не втянет хозяина в разорительные затраты. Проход в дом лежит через большую прихожую. Её размеры позволяют свободно разместить объёмный шкаф. Жильцам дома не будет тесно на единственном этаже. С прихожей сочленено хозяйственное отделение, откуда можно переходить в область дневной жизни дома. Здесь предложено единство пространной и отлично освещённой гостиной, столовой и кухни. Гостиная открывает выход на террасу. Холл занимает центральную часть и соединяет прочие доли дома. По левую руку выделена комфортная область ночного отдыха. Обустроены две спальни и пространная ванная комната. Где достаточно объёма для размещения ванны. Это идеальный проект для того, кто предпочитает близкое расположение комнат на единственном уровне, не разбрасывает деньги. Кто не тяготеет к масштабной стройке, огромным особнякам с вычурным дизайном.
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
export default House1Page