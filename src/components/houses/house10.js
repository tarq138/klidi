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
class House10Page extends Component{
    state = {
        selectedP: 0,
        stateP: false,
        selectedF: 0,
        stateF: false,
    };
    toggleP(index){
        this.setState({selectedP: index, stateP: true})
    }
    toggleF(index){
        this.setState({selectedF: index, stateF: true})
    }
    render(){
        const imagesP = [
            require("../../images/houses/10/p1.png"),
            require("../../images/houses/10/p2.png")
        ];
        const imagesF = [
            require("../../images/houses/10/f1.jpg"),
            require("../../images/houses/10/f2.jpg"),
            require("../../images/houses/10/f3.jpg"),
            require("../../images/houses/10/f4.jpg")
        ];
        return(
            <>
                <Header/>
                <section className="qwer">
                    <div className="block-wrapper">
                        <div className="q">
                            <h1>Проект П-228</h1>
                        </div>
                        <div className="qq">
                            <div className="qqq">
                                <AwesomeSlider>
                                    <div data-src={require("../../images/houses/10/m1.jpg")} />
                                    <div data-src={require("../../images/houses/10/m2.jpg")} />
                                    <div data-src={require("../../images/houses/10/m3.jpg")} />
                                    <div data-src={require("../../images/houses/10/m3.jpg")} />
                                </AwesomeSlider>  
                            </div>
                            <div className="qqqq">
                                <div className="detail_area col-md-12">228м<sup>2</sup></div>
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
                                            3
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
                                                    <img src={require('../../images/balcon.svg')}  alt="" style={{width:"50px"}}/>
                                                </div>
                                            </div>
                                        </div>
                                        <span className="f-s-24">балкона</span>
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
                                    <div className="detail_area col-md-12 m-t-100">120000 BYN</div>
                                    <a className="button" href="/">ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ</a>
                                </div>
                            </div>
                            <div className="w-100" data-tabs="true" style={{marginTop: "25px"}}>
                                <Tabs>
                                    <TabList>
                                        <Tab>Планировка</Tab>
                                        <Tab>Фасады</Tab>
                                    </TabList>

                                    <TabPanel>
                                        <div className="outline-no" onClick={() => this.toggleP(0)} >
                                            <div style={{
                                                cursor: 'pointer',
                                                maxWidth: '100%',
                                                backgroundImage: `url(${require('../../images/houses/10/p1.png')})`
                                            }} className="q123" ></div>
                                        </div>
                                        <div className="outline-no" onClick={() => this.toggleP(1)} >
                                            <div style={{
                                                cursor: 'pointer',
                                                maxWidth: '100%',
                                                backgroundImage: `url(${require('../../images/houses/10/p2.png')})`
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
                                                backgroundImage: `url(${require('../../images/houses/10/f1.jpg')})`
                                            }} className="q123" ></div>
                                        </div>
                                        <div className="outline-no" onClick={() => this.toggleF(1)} >
                                            <div style={{
                                                cursor: 'pointer',
                                                maxWidth: '100%',
                                                backgroundImage: `url(${require('../../images/houses/10/f2.jpg')})`
                                            }} className="q123" ></div>
                                        </div>
                                        <div className="outline-no" onClick={() => this.toggleF(2)} >
                                            <div style={{
                                                cursor: 'pointer',
                                                maxWidth: '100%',
                                                backgroundImage: `url(${require('../../images/houses/10/f3.jpg')})`
                                            }} className="q123" ></div>
                                        </div>
                                        <div className="outline-no" onClick={() => this.toggleF(3)} >
                                            <div style={{
                                                cursor: 'pointer',
                                                maxWidth: '100%',
                                                backgroundImage: `url(${require('../../images/houses/10/f4.jpg')})`
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
                                </Tabs>
                            </div>
                            <div className="description-block">
                                <h2 className="text-header">Проект П-228</h2>
                                <div className="description-text">
                                В разработке этого проекта дома преследовалась цель создания максимально комфортного жилья и ставились задачи сделать дом серии Barn house теплым и светлым, при этом доступным по цене.
                                В результате появился современный уютный дом амбарного типа для семьи из 4 человек, где все продумано до мелочей: обрамленное в деревянную раму крыльцо, просторная прихожая, большая гардеробная при входе, постирочная, где удобно разместится вся необходимая техника и инвентарь, открытое пространство кухни-столовой-гостиной с кладовой и целой стеклянной стеной с портальными раздвижными дверями, позволяющими объединить пространство гостиной с террасой. На второй этаж ведет лестница, освещенная дневным светом через карнизное окно. На втором этаже расположилась мастер-спальня с собственной гардеробной с большим окном и ванной комнатой с душевой и ванной, освещаемая через мансардное окно. Также на втором этаже находятся две большие детские комнаты с продуманными местами хранения и отдельный санузел для них, также с душевой и ванной, в который дневной свет попадает аж через два мансардных окна. Фишка этого дома в стиле barn house — возможность установки бельепровода, через который можно сбрасывать грязное белье из санузлов второго этажа — оно будет попадать сразу в постирочную на первом.
                                <br/>
                                <br/>
                                В проекте присутствует большое количество остекления. Кроме панорамного остекления в гостиной, остекление во всю стену предусмотрено в спальнях второго этажа. При этом продумана безопасность: панорамные окна второго этажа изготовлены из триплекса, а в гостиной применено закаленное стекло. Все стеклопакеты энергосберегающие, что позволит в любую погоду чувствовать себя в доме комфортно, при этом наслаждаться видом окружающей природы.
                                <br/>
                                <br/>
                                При необходимости к дому можно прибавить дополнительную открытую террасу и навес для автомобиля с плоской эксплуатируемой кровлей, на которую можно организовать выход, установив дополнительное карнизное окно в гостиной.
                                <br/>
                                <br/>
                                Архитектурный стиль, в котором выполнен этот проект, — набирающий популярность стиль barn house — смесь минимализма и лофта, с двускатной фальцевой крышей, переходящей на стены, остекленными фронтонами и консольно выступающими балконами под широкими выступами крыши. Для отделки внешних стен первого этажа предусмотрено несколько вариантов: это могут быть вертикальные фиброцементные панели «Кедрал» с несколькими десятками возможных цветов, может быть вечный облицовочный кирпич, также с большим многообразием форм и расцветок, а может быть фасадная штукатурка, которую можно колорировать практически в любой цвет. Брутальность металла и камня амбарного дома смягчает деревянная отделка в зоне балконов, цвет которой также может варьироваться. Таким образом, можно создать свой неповторимый облик этого дома.
                                <br/>
                                <br/>
                                Мы создавали этот дом с любовью к тому, что мы делаем, и к тем, для кого мы это делаем, а будущим хозяевам хотим пожелать только одного: пусть атмосфера в вашей семье будет такой же теплой и солнечной, как этот дом!

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
export default House10Page