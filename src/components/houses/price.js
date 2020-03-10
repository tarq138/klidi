import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

class Price extends Component{
    state = {
        openFundament1: false,
        openFundament2: false,
        openFundament3: false,
        opdenWalls1: false,
        opdenRoof1: false,
        opdenRoof2: false,
        opdenRoof3: false,
        opdenRoof4: false
    }
    toggleFundament1(){
        this.setState({openFundament1: !this.state.openFundament1})
    }
    toggleFundament2(){
        this.setState({openFundament2: !this.state.openFundament2})
    }
    toggleFundament3(){
        this.setState({openFundament3: !this.state.openFundament3})
    }
    toggleWalls1(){
        this.setState({opdenWalls1: !this.state.opdenWalls1})
    }
    toggleRoof1(){
        this.setState({opdenRoof1: !this.state.opdenRoof1})
    }
    toggleRoof2(){
        this.setState({opdenRoof2: !this.state.opdenRoof2})
    }
    toggleRoof3(){
        this.setState({opdenRoof3: !this.state.opdenRoof3})
    }
    toggleRoof4(){
        this.setState({opdenRoof4: !this.state.opdenRoof4})
    }
    render(){
        return(
            <div className="w-100" data-tabs="true" style={{marginTop: "25px"}}>
                <h2 className="main-section-title" style={{textAlign: "center"}}>Что входит в стоимость</h2>
                <Tabs>
                    <TabList>
                        <Tab>
                            <div>
                                <div style={{textAlign: "center"}}>
                                    <img src={require('../../images/fundament.svg')}  alt="" style={{width:"150px"}}/>
                                </div>
                            </div>
                            Фундамент
                        </Tab>
                        <Tab>
                            <div>
                                <div style={{textAlign: "center"}}>
                                    <img src={require('../../images/walls.svg')}  alt="" style={{width:"150px"}}/>
                                </div>
                            </div>
                            Стеновой проект
                        </Tab>
                        <Tab>
                            <div>
                                <div style={{textAlign: "center"}}>
                                    <img src={require('../../images/roof.svg')}  alt="" style={{width:"150px"}}/>
                                </div>
                            </div>
                            Кровля
                        </Tab>
                        <Tab>
                            <div>
                                <div style={{textAlign: "center"}}>
                                    <img src={require('../../images/escort_hover.svg')}  alt="" style={{width:"150px"}}/>
                                </div>
                            </div>
                            Сопровождение<br/> строительства    
                        </Tab>
                    </TabList>   
                    <TabPanel>
                        <div className="block-wrapper" style={{display: "contents"}}>
                            <div className="card  w-50">
                                <div className="card-header">
                                    <h5 className="mb-0"  onClick={this.toggleFundament1.bind(this)}>
                                        <span>Проект СВФ</span>
                                    </h5>
                                </div>
                                <div className={this.state.openFundament1 ? "collapse show" : "collapse"} >
                                    <div className="card-body">
                                        <b>Проект СВФ (свайно-винтовой фундемент):</b><br/>
                                        <div>
                                            <ul>
                                                <li>Расчет статических нагрузок на фундамент.</li>
                                                <li>Разработка проекта в программе Autocad.</li>
                                            </ul>
                                        </div>
                                        <br/>
                                    </div>
                                </div>
                            </div>
                            <div className="card  w-50">
                                <div className="card-header">
                                    <h5 className="mb-0"  onClick={this.toggleFundament2.bind(this)}>
                                        <span>Свайно-винтовой фундамент</span>
                                    </h5>
                                </div>
                                <div className={this.state.openFundament2 ? "collapse show" : "collapse"} >
                                    <div className="card-body">
                                        <div>
                                            <ul>
                                                <li>Разбика осей.</li>
                                                <li>Монтаж винтовых свай.</li>
                                                <li>Монтаж оголовков.</li>
                                                <li>Обвязка металлом.</li>
                                                <li>Заливка бетоном.</li>
                                                <li>Обрезка винтовых свай по невелиру.</li>
                                                <li>Наварка оголовка.</li>
                                                <li>Монтаж обвязочного бруса 200ммx200мм.</li>
                                            </ul>
                                        </div>
                                        <br/>
                                    </div>
                                </div>
                            </div>
                            <div className="card  w-50">
                                <div className="card-header">
                                    <h5 className="mb-0"  onClick={this.toggleFundament3.bind(this)}>
                                        <span>Приёмка инженером технического надзора</span>
                                    </h5>
                                </div>
                                <div className={this.state.openFundament3 ? "collapse show" : "collapse"} >
                                    <div className="card-body">
                                        <div>
                                            <ul>
                                                <li>Приемка инженером технического надзора по чек-листу.</li>
                                                <li>Контроль геометрии.</li>
                                                <li>Фиксация окончательной приемки.</li>
                                            </ul>
                                        </div>
                                        <br/>
                                    </div>
                                </div>
                            </div>
                            <div className="card  w-50"></div>
                        </div>
                    </TabPanel> 
                    <TabPanel>
                        <div className="block-wrapper">
                            <div className="card  w-50">
                                <div className="card-header">
                                    <h5 className="mb-0"  onClick={this.toggleWalls1.bind(this)}>
                                        <span>Стеновой комплект</span>
                                    </h5>
                                </div>
                                <div className={this.state.opdenWalls1 ? "collapse show" : "collapse"} >
                                    <div className="card-body">
                                        <div>
                                            <ul>
                                                <li>Панели перекрытий.</li>
                                                <li>Панели стен.</li>
                                                <li>Панели кровли.</li>
                                                <li>Силовой каркас из сухого строганного пиломатериала.</li>
                                                <li>Балки перекрытий, мауэрлаты из клееного бруса.</li>
                                                <li>Пиломатериал необходимый для изготовления крыльца, террас.</li>
                                                <li>Весь необходимый крепеж для сборки.</li>
                                                <li>Монтажная пена.</li>
                                            </ul>
                                        </div>
                                        <br/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabPanel> 
                    <TabPanel>
                        <div className="block-wrapper" style={{display: "contents"}}>
                            <div className="card  w-50">
                                <div className="card-header">
                                    <h5 className="mb-0"  onClick={this.toggleRoof1.bind(this)}>
                                        <span>Рабочий проект кровли</span>
                                    </h5>
                                </div>
                                <div className={this.state.opdenRoof1 ? "collapse show" : "collapse"} >
                                    <div className="card-body">
                                        <div>
                                            <ul>
                                                <li>Уникальные кровельные узлы, обеспечивающие высокий уровень шумоизоляции.</li>
                                                <li>Расчёт снеговой и ветровой нагрузки на силовую конструкцию кровли.</li>
                                            </ul>
                                        </div>
                                        <br/>
                                    </div>
                                </div>
                            </div>
                            <div className="card  w-50">
                                <div className="card-header">
                                    <h5 className="mb-0"  onClick={this.toggleRoof2.bind(this)}>
                                        <span>Гидро-ветрозащитная мембрана Tyvek</span>
                                    </h5>
                                </div>
                                <div className={this.state.opdenRoof2 ? "collapse show" : "collapse"} >
                                    <div className="card-body">
                                        <div>
                                            <ul>
                                                <li>Однослойная диффузионная мембрана из нетканого полиэтилена высокой плотности.</li>
                                                <li>Водонепроницаемая.</li>
                                                <li>Ветронепроницаемая.</li>
                                                <li>Паропроницаемая.</li>
                                                <li>Температурная стабильность - до + 100°C (очень важно при использовании металлочерепицы).</li>
                                            </ul>
                                        </div>
                                        <br/>
                                    </div>
                                </div>
                            </div>
                            <div className="card  w-50">
                                <div className="card-header">
                                    <h5 className="mb-0"  onClick={this.toggleRoof3.bind(this)}>
                                        <span>Обрешётка</span>
                                    </h5>
                                </div>
                                <div className={this.state.opdenRoof3 ? "collapse show" : "collapse"} >
                                    <div className="card-body">
                                        <div>
                                            <ul>
                                                <li>Бруски обрешётки.</li>
                                                <li>Бруски контробрешки.</li>
                                            </ul>
                                        </div>
                                        <br/>
                                    </div>
                                </div>
                            </div>
                            <div className="card  w-50">
                                <div className="card-header">
                                    <h5 className="mb-0"  onClick={this.toggleRoof4.bind(this)}>
                                        <span>Кровельный материал</span>
                                    </h5>
                                </div>
                                <div className={this.state.opdenRoof4 ? "collapse show" : "collapse"} >
                                    <div className="card-body">
                                        <div>
                                            <ul>
                                                <li>Кровельный материал на ваш выбор.</li>
                                            </ul>
                                        </div>
                                        <br/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabPanel> 
                    <TabPanel></TabPanel> 
                </Tabs>
            </div>
        )
    }
}
export default Price