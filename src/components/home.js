import React, { Component } from 'react';
import Header from './header';
import { FaCheck, FaTimes } from 'react-icons/fa';
import Modal from 'react-modal';
const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
};

class HomePage extends Component{
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
          status: "",
          openModal: false
        };
    }
    closeModal(){
        this.setState({stateForm: false})
    }
    openModal(){
        this.setState({stateForm: true})
    }
    submitForm(ev) {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                this.setState({ status: "SUCCESS", stateForm: false});
            } else {
                this.setState({ status: "ERROR", stateForm: false });
            }
        };
        xhr.send(data);
    }
    render(){
        return(
            <div>
                <Header/>
                <section className="image main-banner-image">
                    <div className="block-wrapper">
                        <div className="main-banner-info">
                            <div className="main-banner-title">
                                <span className="topTitle">Барнхаус 228м<sup>2</sup></span>
                            </div>
                            <div className="main-banner-text">Индивидуальный  проект</div>
                            <div className="banner_button TODO:">
                                <span><a className="flex-c" href="/house/13">Подробнее</a></span>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section">
                    <div className="block-wrapper">
                        <h1 className="main-section-title">Дома и бани по канадской технологии</h1>
                        <div className="flex-sb m-3">
                            <div className="w-50 h-350 p-r">
                                <a href="/houses">
                                    <div className="image i-13">
                                        <div className="image-shadow"></div>
                                        <div className="p-a image-text">Проекты домов</div>
                                    </div>
                                </a>
                            </div>
                            <div className="w-50 h-350 p-r">
                                <div className="image i-12">
                                    <div className="image-shadow"></div>
                                </div>
                                <div className="p-a image-text">Проекты бань</div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section">
                    <div className="block-wrapper">
                        <div className="why">
                            <h2 className="main-section-title">Почему именно мы?</h2>
                            <div className="flex-sb m-3" style={{textAlign: "center"}}>
                                <div className="w-50 h-250 p-r">
                                    <p className="h2">
                                        <b>Как делают конкуренты?</b>
                                    </p>
                                </div>
                                <div className="w-50  p-r">
                                    <p className="h2">
                                        <b>Как делаем мы?</b>
                                    </p>
                                </div>
                            </div>
                            <div className="flex-sb m-3" style={{textAlign: "center"}}>
                                <div className="w-50 h-250 p-r">
                                    <p className="h2">
                                        <FaTimes />
                                        Используют древесину естественной влажности.<br/>
                                        (При эксплуатации древесина начнёт усыхать и 
                                        изменять свои геометрические характеристики, 
                                        что скажется на геометрии дома)
                                    </p>
                                </div>
                                <div className="w-50  p-r">
                                    <p className="h2" >
                                    <FaCheck/>
                                        Мы используем только древесину камерной сушки.
                                    </p>
                                </div>
                            </div>
                            
                            <div className="flex-sb m-3" style={{textAlign: "center"}}>
                                <div className="w-50 h-250 p-r">
                                    <p className="h2">
                                        <FaTimes />
                                        Применяют для соединения панелей доску сечением 50мм.<br/>
                                        (Грубое нарушение технологии, которое может привести 
                                        к разрушению конструкции)
                                    </p>
                                </div>
                                <div className="w-50  p-r">
                                    <p className="h2" >
                                    <FaCheck/>
                                        Наша компания применяет стыковочный брус сечением 90мм.
                                    </p>
                                </div>
                            </div>

                            <div className="flex-sb m-3" style={{textAlign: "center"}}>
                                <div className="w-50 h-250 p-r">
                                    <p className="h2">
                                        <FaTimes />
                                        Используют некачественный крепёж.<br/>
                                        (При нагрузках саморезы просто ломаются и не выполняют свою функцию)
                                    </p>
                                </div>
                                <div className="w-50  p-r">
                                    <p className="h2" >
                                    <FaCheck/>
                                        Используем оцинкованный импортный крепёж.
                                    </p>
                                </div>
                            </div>

                            <div className="flex-sb m-3" style={{textAlign: "center"}}>
                                <div className="w-50 h-250 p-r">
                                    <p className="h2">
                                    <FaTimes />
                                        Осуществляют раскрой панелей вручную на строительной площадке.<br/>
                                        (Невозможно достичь вручную, такого качества, как на производстве)
                                    </p>
                                </div>
                                <div className="w-50  p-r">
                                    <p className="h2" >
                                    <FaCheck/>
                                        Мы доставляем готовый заводской домокомплект.
                                    </p>
                                </div>
                            </div>

                            <div className="flex-sb m-3" style={{textAlign: "center"}}>
                                <div className="w-50 h-250 p-r">
                                    <p className="h2">
                                    <FaTimes />
                                        Отсутствует конструкционный крепёж.<br/>
                                        (Конструкция не связана в единое целое, что приводит к шаткости конструкции) 
                                    </p>
                                </div>
                                <div className="w-50  p-r">
                                    <p className="h2" >
                                        <FaCheck/>
                                    Мы используем итальянский конструкционный крепёж.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section">
                    <div className="block-wrapper">
                        <div className="Form-Container border" style={{borderRadius: "20px"}}>
                            <div className="form" style={{height: "100px"}}>
                                <div className="h2">ПОСТРОЙТЕ СВОЙ ДОМ С ПРОФЕССИОНАЛАМИ</div>
                                <button onClick={this.openModal.bind(this)} className="button" data-fancybox="" data-type="ajax" href="#" style={{width: "325px", cursor: "pointer", borderRadius: "20px"}}>ОСТАВИТЬ ЗАЯВКУ</button>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section">
                    <div className="block-wrapper">
                        <h2 className="main-section-title">Почему с нами надёжно</h2>
                        <div className="flex-sb m-3" style={{textAlign: "center"}}>
                            <div className="w-50 h-250 p-r">
                                <div style={{marginBottom: "20px"}}>
                                    <div>
                                        <img src={require('../images/1.PNG')}  alt="" style={{width:"200px"}}/>
                                    </div>
                                </div>
                                <p className="h2" style={{textAlign: "center"}}>
                                    Стоимость строительства<br/>
                                    не&nbsp;меняется после заключения<br/>
                                    договора
                                </p>
                            </div>
                            <div className="w-50 h-250 p-r">
                                <div style={{marginBottom: "20px"}}>
                                    <div>
                                        <img src={require('../images/2.PNG')}  alt="" style={{width:"200px"}}/>
                                    </div>
                                </div>
                                <p className="h2" style={{textAlign: "center"}}>
                                    Мы делаем еженедельный<br/>
                                    детальный фотоотчет.<br/>
                                    Вам не&nbsp;нужно приезжать<br/>
                                    на&nbsp;стройку
                                </p>
                            </div>
                            <div className="w-50 h-250 p-r">
                                <div style={{marginBottom: "20px"}}>
                                    <div>
                                        <img src={require('../images/3.PNG')}  alt="" style={{width:"200px"}}/>
                                    </div>
                                </div>
                                <p className="h2" style={{textAlign: "center"}}>
                                    Обеспечиваем одну из самых<br/>
                                    важных задач современного<br/>
                                    мира - картинка не отличается от<br/>
                                    реальности<br/>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section">
                    <div className="block-wrapper">
                        <div className="flex-sb m-3">
                            <div className="w-100 p-r">
                                <div className="why_sip">
                                    <div className="row" >
                                        <div className="col-md-12">
                                            <p className="thead h2">Почему именно SIP технология?</p>
                                            <p className="sip_why h2">
                                                <b>Отделка сразу</b><br/>
                                                Не нужно ждать усадки полгода, сразу после монтажа вы получаете ровные стены, готовые под чистовую отделку.
                                            </p>
                                            <p className="sip_why h2">
                                                <b>Стоимость</b><br/>
                                                От 195$ за м<sup>2</sup>
                                            </p>
                                            <p className="sip_why h2">
                                                <b>Энергоэффективность</b><br/>
                                                Дом по технологии SIP обладает очень высокими показателями теплосбережения, поэтому требует минимального количества теплоресурсов.
                                            </p>
                                            <p className="sip_why h2">
                                                <b>Круглогодичная технология</b><br/>
                                                Технология позволяет проводить строительство круглый год и при любой погоде без потери качества.
                                            </p>
                                            <p className="sip_why h2">
                                                <b>Скорость строительства</b><br/>
                                                Срок строительства типового проекта 2-3 недели.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section">
                    <div className="block-wrapper calc-class" style={{display: "flex"}}>
                        <div style={{width: "45%"}}>
                            <h2 className="h1">Уже сделали расчёт в другой компании?</h2>
                            <div>
                                <p className="h2">Никогда не поздно найти более интересные условия и избежать уловок строителей.</p>
                                <p className="h2">Мы сделаем бесплатный аудит сметы и укажем на возможные подводные камни.</p>
                            </div>
                        </div>
                        <div style={{width: "55%", marginLeft: "35%"}} encType="multipart/form-data">
                            <form className="form-container" id="audit" action="https://formspree.io/xpzrkylq" method="POST" onSubmit={this.submitForm}>
                                <p className="h3">Оставить заявку</p>
                                <div className="audit-success-img"></div>
                                <hr/>
                                <input type="hidden" name="_subject" value="НОВАЯ ЗАЯВКА" />
                                <label className="input-container">
                                    <input className="bordet-top-right border-top-left" name="name" type="text" id="name" placeholder="Имя *"/>
                                </label>
                                <label className="input-container">
                                    <input className="no-border" type="text" id="email" name="_replyto" placeholder="Email *"/>
                                </label>
                                <label className="input-container">
                                    <input className="no-border border-bottom-right border-bottom-left" type="text" id="phone" name="phone" placeholder="Телефон *" maxLength={15}/>
                                </label>
                                {this.state.status === "SUCCESS" && <p style={{color: "#587640"}}>Спасибо, с вами в ближайшее время свжется менеждер!</p>}
                                {this.state.status === "ERROR" && <p style={{color: "red"}}>Проверьте правильность данных!</p>}
                                <div style={{textAlign: "center"}}>
                                    <button type="submit" style={{marginTop: "11px", padding: "0 52px"}} className="btn btn-green">Отправить заявку</button>
                                </div>
                                <div className="white-cover"></div>
                            </form>
                        </div>
                    </div>
                </section>
                <Modal
                    isOpen={this.state.stateForm}
                    style={customStyles}
                    onRequestClose={this.closeModal.bind(this)}
                    closeOnEscape={true}
                >
                    <div className="seminar">
                        <form id="seminar_form" className="form-container loopFormController" action="https://formspree.io/xpzrkylq" method="POST" onSubmit={this.submitForm.bind(this)}>
                            <h3 style={{textAlign: "center",marginTop: "0"}}>Форма обратной связи</h3>
                            <div className="input form-item">
                                <label>Имя</label>
                                <input placeholder="Имя" type="text" name="name" id="seminar_fio"  className="inputbot big-input -required filterInputsTextController inputsEscapeController "/>
                                <span className="error-description"></span>
                            </div>
                            <input type="hidden" name="_subject" value="НОВАЯ ЗАЯВКА" />
                            <div className="input form-item">
                                <label >Почта</label>
                                <input placeholder="example@gmail.com" type="text" name="_replyto" id="seminar_email" className="inputbot big-input -required filterInputsTextController inputsEscapeController "/>
                                <span className="error-description"></span>
                            </div>

                            <div className="input form-item">
                                <label>Телефон</label>
                                <input placeholder="+375 (12) 456 78 90" type="text" name="phone" id="seminar_phone" className="inputbot big-input -required filterInputsTextController inputsEscapeController " maxLength="18"/>
                                <span className="error-description"></span>
                            </div>

                            <div className="input form-item" style={{margin: "20px 0 0 0"}}>
                                <input type="submit"  value="Отправить" className="button"/>
                            </div>

                        </form>
                    </div>
                </Modal>
            </div>
        )
    }
}
export default HomePage