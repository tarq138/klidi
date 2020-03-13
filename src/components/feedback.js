import React, { Component } from 'react';
import Modal from 'react-modal';
import {Row, Col} from 'reactstrap'
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

class Feedback extends Component{
    state={
        stateForm: false,
        status: ""
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
    componentWillReceiveProps(newProps){
        if(newProps.stateFeedback){
            this.openModal()
        }
    }
    render(){
        return(
            <>
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
                <section className="section" style={this.props.margin ? {marginTop: "120px"} : {}}>
                    <Row>
                        <Col md="12">
                            <div className="block-wrapper">
                                <div className="Form-Container border">
                                    <div className="form">
                                        <div className="h2">ПОСТРОЙТЕ СВОЙ ДОМ ВМЕСТЕ С KLIDI</div>
                                        <div className="desc">Наш менеджер свяжется с вами по почте или телефону</div>
                                        <button onClick={this.openModal.bind(this)} className="button" data-fancybox="" data-type="ajax" href="#" style={{width: "325px", cursor: "pointer"}}>ОСТАВИТЬ ЗАЯВКУ</button>
                                    </div>
                                </div>
                            </div>
                            </Col>
                    </Row>
                </section>
            </>
        )
    }
}
export default Feedback