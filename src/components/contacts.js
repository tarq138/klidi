import React, { Component } from 'react';
import Header from './header';
import Feedback from './feedback'
import { Row, Col } from 'reactstrap';

class ContactsPage extends Component{
    render(){
        return(
            <div style={{backgroundColor: "#f1f1f2"}}>
                <Header/>
                <div className="m-top-90 block-wrapper f-s-20 about">
                    <h2 style={{color: "rgb(51, 51, 51);"}}>Контакты</h2>
                    <Row className="m-3" >
                        <Col md="4" className="h-350 p-r" style={{padding: "20px", backgroundColor: "#fff"}}>
                            <strong>Адрес:</strong>
                            <p>
                                г.Минск, ул.Аннаева 84/7
                            </p>
                            <strong>Телефон:</strong>
                            <p>
                                +375 (33) 9041280
                            </p>
                            <strong>Напишите нам:</strong>
                            <p>
                                <a href="mailto:klidi@tut.by">klidi@tut.by</a>
                            </p>
                            <br/>					
                            {/* <ul class="reset soc_menu">
                                <li><a target="_blank" rel="nofollow" className="inst" href="https://www.instagram.com/klidi.by/"></a></li>
                            </ul> */}
                        </Col>
                        <Col md="8" className="h-350 p-r">
                            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A3cd1c5b0c8720fc5629351c44b267369d454d3d0f7216afb36c77004cf5d7846&amp;source=constructor" width="700" height="350" frameborder="0"></iframe>
                        </Col>
                    </Row>
                </div>
                <Feedback/>
            </div>
        )
    }
}
export default ContactsPage