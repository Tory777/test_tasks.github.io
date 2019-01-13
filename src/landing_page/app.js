import React, { Component } from 'react';
import Registation from '../components/Registation';
import '../sass/landing_page.scss';
import logo from './images/logo.svg';
import online from './images/online.svg';
import registrature from './images/registrature.svg';
import phone from './images/phone.svg';
import calendar from './images/calendar.svg';
import device from './images/device.svg';
import card from './images/card.svg';
import baby from './images/baby.svg';
import safe from './images/safe.svg';




export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="landingPage">
                    <aside className="landingPage__sideBar">
                        <img src={logo} className="landingPage__sideBar__logo" alt="logo" />
                        <div className="landingPage__sideBar__slogan">
                            Зручно<br/>
                            Швидко<br/>
                            Без черг
                        </div>
                        <div className="landingPage__sideBar__options">
                            <ul>
                                <li><img src={calendar} width='20px' align="left" className="landingPage__sideBar__options__icons" alt="Schedule"/>
                                    <div className="landingPage__sideBar__options__item">Розклад лікарів</div>

                                </li>
                                <li><img src={device} width='20px' align="middle" className="landingPage__sideBar__options__icons" alt="Device"/>
                                    <div className="landingPage__sideBar__options__item">Запис на прийом online
                                    </div>
                                </li>
                                <li><img src={card} width='20px' align="middle"  className="landingPage__sideBar__options__icons" alt="Card"/>
                                    <div className="landingPage__sideBar__options__item">Електронна медкарта</div>
                                </li>
                                <li><img src={baby} width='20px' align="middle" className="landingPage__sideBar__options__icons" alt="Baby"/>
                                    <div className="landingPage__sideBar__options__item">Зв'язана карта дитина</div>
                                </li>
                                <li><img src={safe} width='20px' align="middle" className="landingPage__sideBar__options__icons" alt="Safety"/>
                                    <div className="landingPage__sideBar__options__item">Надійність зберігання данних</div>
                                </li>
                            </ul>
                        </div>
                    </aside>

                <div className="landingPage__content">
                    <div className="landingPage__title">
                        <h1>До лікаря - без черг</h1>
                    </div>
                    <h2>Запис на прийом:</h2>
                    <div className="landingPage__content__features">

                        <Registation type="internet" icon_name={online} title="В інтернеті"/>
                        <Registation type="registation" icon_name={registrature} title="В реєстратурі" />
                        <Registation type="phone" icon_name={phone} title="По телефону" />
                    </div>
                    <div className="landingPage__content__contacts">
                        <div className="landingPage__content__contacts__item">
                        на сайті<br/><a href='https://helsi.me/'>Helsi.me</a>
                        </div>
                        <div className="landingPage__content__contacts__item">(050) 14 567 99
                        </div>
                    </div>
                    <footer className="landingPage__content__footer">
                        HELSI.ME - це безкоштовний сервіс запису до лікарів та зберігання медичних данних.
                    </footer>

                </div>
            </div>
      );
    }
}