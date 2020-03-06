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
class House4Page extends Component{
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
            require("../../images/houses/4/p1.jpg"),
            require("../../images/houses/4/p2.jpg")
        ];
        const imagesF = [
            require("../../images/houses/4/f1.jpg"),
            require("../../images/houses/4/f2.jpg"),
            require("../../images/houses/4/f3.jpg"),
            require("../../images/houses/4/f4.jpg")
        ];
        const imagesI = [
            require("../../images/houses/4/i1.jpg"),
            require("../../images/houses/4/i2.jpg"),
            require("../../images/houses/4/i3.jpg"),
            require("../../images/houses/4/i4.jpg"),
            require("../../images/houses/4/i5.jpg"),
            require("../../images/houses/4/i6.jpg")
        ];
        return(
            <>
                <Header/>
                <section className="qwer">
                    <div className="block-wrapper">
                        <div className="q">
                            <h1>Проект П-139</h1>
                        </div>
                        <div className="qq">
                            <div className="qqq">
                                <AwesomeSlider>
                                    <div data-src={require("../../images/houses/4/m1.jpg")} />
                                    <div data-src={require("../../images/houses/4/m2.jpg")} />
                                    <div data-src={require("../../images/houses/4/m3.jpg")} />
                                </AwesomeSlider>  
                            </div>
                            <div className="qqqq">
                                <div className="detail_area col-md-12">139м<sup>2</sup></div>
                                <div className="flex-sb flex-w">
                                    <div className="flex-c w-50 flex-r m-bot w-100-1">
                                        <div className="flex f-s-50">
                                            5
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
                                            2
                                            <div>
                                                <div>
                                                    <img src={require('../../images/terrace.svg')}  alt="" style={{width:"50px"}}/>
                                                </div>
                                            </div>
                                        </div>
                                        <span className="f-s-24">террасы</span>
                                    </div>
                                    <div className="detail_area col-md-12 m-t-100">73000 BYN</div>
                                    <a className="button" href="/">ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ</a>
                                </div>
                            </div>
                            <div className="w-100" data-tabs="true" style={{marginTop: "25px"}}>
                                <Tabs>
                                    <TabList>
                                        <Tab>Планировка</Tab>
                                        <Tab>Фасады</Tab>
                                        <Tab>Интерьер</Tab>
                                    </TabList>

                                    <TabPanel>
                                        <div className="outline-no" onClick={() => this.toggleP(0)} >
                                            <div style={{
                                                cursor: 'pointer',
                                                maxWidth: '100%',
                                                backgroundImage: `url(${require('../../images/houses/4/p1.jpg')})`
                                            }} className="q123" ></div>
                                        </div>
                                        <div className="outline-no" onClick={() => this.toggleP(1)} >
                                            <div style={{
                                                cursor: 'pointer',
                                                maxWidth: '100%',
                                                backgroundImage: `url(${require('../../images/houses/4/p2.jpg')})`
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
                                        <div className="outline-no" onClick={() => this.toggleF(0)} >
                                            <div style={{
                                                cursor: 'pointer',
                                                maxWidth: '100%',
                                                backgroundImage: `url(${require('../../images/houses/4/f1.jpg')})`
                                            }} className="q123" ></div>
                                        </div>
                                        <div className="outline-no" onClick={() => this.toggleF(1)} >
                                            <div style={{
                                                cursor: 'pointer',
                                                maxWidth: '100%',
                                                backgroundImage: `url(${require('../../images/houses/4/f2.jpg')})`
                                            }} className="q123" ></div>
                                        </div>
                                        <div className="outline-no" onClick={() => this.toggleF(2)} >
                                            <div style={{
                                                cursor: 'pointer',
                                                maxWidth: '100%',
                                                backgroundImage: `url(${require('../../images/houses/4/f3.jpg')})`
                                            }} className="q123" ></div>
                                        </div>
                                        <div className="outline-no" onClick={() => this.toggleF(3)} >
                                            <div style={{
                                                cursor: 'pointer',
                                                maxWidth: '100%',
                                                backgroundImage: `url(${require('../../images/houses/4/f4.jpg')})`
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
                                                backgroundImage: `url(${require('../../images/houses/4/i1.jpg')})`
                                            }} className="q123" ></div>
                                        </div>
                                        <div className="outline-no" onClick={() => this.toggleI(1)} >
                                            <div style={{
                                                cursor: 'pointer',
                                                maxWidth: '100%',
                                                backgroundImage: `url(${require('../../images/houses/4/i2.jpg')})`
                                            }} className="q123" ></div>
                                        </div>
                                        <div className="outline-no" onClick={() => this.toggleI(2)} >
                                            <div style={{
                                                cursor: 'pointer',
                                                maxWidth: '100%',
                                                backgroundImage: `url(${require('../../images/houses/4/i3.jpg')})`
                                            }} className="q123" ></div>
                                        </div>
                                        <div className="outline-no" onClick={() => this.toggleI(3)} >
                                            <div style={{
                                                cursor: 'pointer',
                                                maxWidth: '100%',
                                                backgroundImage: `url(${require('../../images/houses/4/i4.jpg')})`
                                            }} className="q123" ></div>
                                        </div>
                                        <div className="outline-no" onClick={() => this.toggleI(4)} >
                                            <div style={{
                                                cursor: 'pointer',
                                                maxWidth: '100%',
                                                backgroundImage: `url(${require('../../images/houses/4/i5.jpg')})`
                                            }} className="q123" ></div>
                                        </div>
                                        <div className="outline-no" onClick={() => this.toggleI(5)} >
                                            <div style={{
                                                cursor: 'pointer',
                                                maxWidth: '100%',
                                                backgroundImage: `url(${require('../../images/houses/4/i6.jpg')})`
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
                                <h2 className="text-header">Проект П-139</h2>
                                <div className="description-text">
                                Проект этого дома является интересным архитектурным решением. Дом выглядит современно и стильно. Несмотря на определенный минимализм в проекте дома предусмотрено все, что необходимо для комфортного проживания семьи из трех-четырех человек. Есть где в этом доме и принять гостей. Несмотря на относительно небольшую площадь застройки, всего около девяносто шести квадратных метров, проектом предусмотрены две веранды. По одной веранде на каждом этаже. Вообще дом спланирован продумано и удобен для жизни. Так в доме есть гараж, вполне достаточный для одной машины, площадью больше двадцати квадратных метров, с непосредственным входом в дом, что очень удобно во время непогоды, а так же зимой. В холле площадью более пяти метров, в который как раз можно попасть из гаража, проектом предлагается встроенный шкаф или гардеробная, для которой выделено удобное место. На первом этаже кухня, столовая, гостиная, пространство перед лестницей на второй этаж, как бы объединены в одну площадь, что вместе с большими оконными проемами придает объем. Общая площадь этих помещений превышает тридцать квадратных метров. На первом этаже проектом так же предусмотрены гостевая комната или кабинет площадью более девяти квадратных метров, санузел около трех квадратных метров и подсобное помещение такой же площади. Кроме всего вышеперечисленного проектом дома на первом этаже, в гостиной, предусмотрен камин, который может быть не только предметом интерьера, но и действительно обогревать дом.
На второй этаж дома ведет удобная и достаточно широкая лестница. Лестница заканчивается коридором, площадью более пяти квадратных метров. Из коридора есть входы в три комнаты и санузел. Несмотря на это коридор не является темным, так как в лестничном проеме на уровне второго этажа предусмотрено окно. Две комнаты, расположенные через смежную стену, похожи друг на друга. Площадь каждой комнаты немного более одиннадцати квадратных метров. Их можно использовать в качестве детских комнат, гостевых спален или кабинетов. Санузел на втором этаже почти шесть с половиной квадратных метров, что довольно много для санузла такого дома. В нем кроме туалета, предлагается установить биде, двойную раковину и полноценную ванную. Хозяйская спальня площадью более двенадцати квадратных метров имеет гардеробную комнату площадью четыре с половиной квадратных метра. В хозяйской спальне есть два выхода на просторную веранду расположенную над гаражем. Фасад дома современный и достаточно выразительный. Данный дом будет органично смотреться, практически, на участке с любым ландшафтным дизайном. 

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
export default House4Page