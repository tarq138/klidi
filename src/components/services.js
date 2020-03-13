import React, { Component } from 'react';
import Header from './header';
import Feedback from './feedback'
import {Row, Col} from 'reactstrap'
class SerivcesPage extends Component{
    render(){
        return(
            <div style={{backgroundColor: "#f1f1f2"}}>
                <Header/>
                <div className="m-top-90 block-wrapper f-s-20 about">
                    <h2 className="m-3" style={{color: "rgb(51, 51, 51);"}}>Услуги</h2>
                    <Row>
                        <Col md="6" className="h-350 p-r">
                            <i class="ico service5"></i>
                            <h3>КАРКАСНО-ПАНЕЛЬНЫЕ ДОМА</h3>
                            <p>Мы построим вам энергоэффективный с использованием только качественных материалов и с соблюдением технологии строительства.</p>
                        </Col>
                        <Col md="6" className="h-350 p-r">
                            <i class="ico service6"></i>
                            <h3>НАДЕЖНЫЕ ФУНДАМЕНТЫ</h3>
                            <p>Ваш дом будет построен на надежном и основании:</p>
                            <p>- СФВ<br/>
                            - Свайно-ростверковый фундамент<br/>
                            - Сваи ТИСЭ<br/>
                            - Ленточный фундамент</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="6" className=" h-350 p-r">
                            <i class="ico service8"></i>
                            <h3>ПРОЕКТИРОВАНИЕ</h3>
                            <p>Создание дизайн-проекта Вашего дома, начиная от планировки расположения комнат до наглядной визуализации проекта и 3D модели.</p>
                            <p>- Архитектурное решение<br/>
                            - Конструкции деревянные<br/>
                            - Водоснабжение–канализация<br/>
                            - Осмечивание проекта</p>
                        </Col>
                    </Row>
                </div>
                <Feedback/>
            </div>
        )
    }
}
export default SerivcesPage