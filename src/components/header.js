import React, { Component } from 'react';

class Header extends Component{
    render(){
        return(
            <>
                <section className="fix w-100 header_block">
                    <header className="header">
                        <div className="flex-sb align-i-c header--font">
                            <div className="menu-button">
                            <div className="eltdf-mo-icon-holder">
                                <span className="eltdf-mo-lines">
                                    <span className="eltdf-mo-line eltdf-line-1"></span>
                                    <span className="eltdf-mo-line eltdf-line-2"></span>
                                    <span className="eltdf-mo-line eltdf-line-3"></span>
                                </span>
                            </div>
                            <nav className="eltdf-mobile-nav">
                                <div className="eltdf-grid">
                                    <ul id="menu-fullscreen-menu-1" className="">
                                        <li id="mobile-menu-item-7623" className="menu-item menu-item-type-post_type_archive menu-item-object-proekty_domov ">
                                            <a href="/houses" className="">
                                                <span>Проекты домов</span>
                                                </a>
                                            </li>
                                        <li className="menu-item menu-item-type-post_type menu-item-object-page ">
                                            <a href="/baths" className="">
                                                <span>Проекты бань</span>
                                            </a>
                                        </li>
                                        <li id="mobile-menu-item-7633" className="menu-item menu-item-type-post_type menu-item-object-page ">
                                            <a href="/services" className="">
                                                <span>Услуги</span>
                                            </a>
                                        </li>
                                        <li class="menu-item menu-item-type-post_type menu-item-object-page ">
                                            <a href="/about" class="">
                                                <span>О нас</span>
                                            </a>
                                        </li>
                                        <li class="menu-item menu-item-type-post_type menu-item-object-page ">
                                            <a href="/contacts" class="">
                                                <span>Контакты</span>
                                            </a>
                                        </li>
                                    </ul>    
                                </div>
                            </nav>
                            </div>
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
                                                <a href="/baths">
                                                    <div className="image i-12">
                                                        <div className="image-shadow"></div>
                                                        <div className="p-a image-text">Проекты бань</div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                                <div><a href="/services">Услуги</a></div>
                                <div><a href="/about">О нас</a></div>
                                <div><a href="/contacts">Контакты</a></div>
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