import React, { Component } from 'react';

class Header extends Component{
    render(){
        return(
            <>
                <section className="fix w-100 header_block">
                    <header className="header">
                        <div className="flex-sb align-i-c header--font">
                            <a href="/">
                                <div className="header__logo">
                                </div>
                            </a>
                            <nav className="header__nav flex">
                                <div className="projects-header">
                                    Проекты
                                    <div className="menu">
                                        <div className="flex-c">
                                            <div className="h-240 w-300 m-0-20 p-r">
                                                <a href="/houses">
                                                    <div className="image i-13">
                                                        <div className="image-shadow"></div>
                                                        <div className="p-a image-text">Проекты домов</div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="h-240 w-300 m-0-20 p-r">
                                                <a href="/bathes">
                                                    <div className="image i-12">
                                                        <div className="image-shadow"></div>
                                                        <div className="p-a image-text">Проекты бань</div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                                <div>Услуги</div>
                                <div>Галерея</div>
                                <div><a href="/about">О нас</a></div>
                                <div>Контакты</div>
                            </nav>
                            <a href="tel:+375339041280" className="header__link header--font">
                                <span>+375-33-904-12-80</span>
                            </a>
                        </div>
                    </header>   
                </section>
                
            </>    
        )
    }
}
export default Header