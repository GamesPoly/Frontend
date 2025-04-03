import React from 'react'
import { Link } from 'react-router-dom'
import './Hero.scss'
import decorateStarMini from '../../../shared/assets/decorate-star-mini.svg'
import cover from '../../../shared/assets/cover-game1.png'
import arrows from '../../../shared/assets/arrows.svg'
import lines from '../../../shared/assets/lines.svg'
import photo from '../../../shared/assets/photo-hero.png'
import plus from '../../../shared/assets/plus-circle.svg'
import gamepad from '../../../shared/assets/gamepad.svg'
import star from '../../../shared/assets/decorate-star.svg'
import ad1 from '../../../shared/assets/ad-purple.png'
import ad2 from '../../../shared/assets/ad-pazle.png'
import ad3 from '../../../shared/assets/ad-player.png'
import games from '../../../shared/assets/games-list.png'
const Hero = () => {
    return (
        <section className="hero">
            <div className="hero__head">
                <div className="hero__info">
                    <img
                        src={decorateStarMini}
                        alt="Decorate Star"
                        className="hero__decoration"
                    />

                    <h1 className="hero__title">
                        <span>Публикуйся</span> 
                        <span>обсуждай проекты</span>
                        <span>
                            <span>
                                продвигай
                            </span>{' '}
                            свои игры
                        </span>
                        <span>в МосПолитехе</span> 
                    </h1>
                    <div className="hero__details">
                        <img
                            src={arrows}
                            alt="Hero Arrows Decorate"
                            className="hero__arrows"
                        />
                        <p className="hero__desc">
                            Расскажите о{' '}
                            <span className="hero__desc hero__desc--highlighted">
                                своих проектах
                            </span>
                            ,{' '}
                            <span className="hero__desc hero__desc--highlighted">
                                оценивайте
                            </span>{' '}
                            работы коллег, и объединяйтесь в{' '}
                            <span className="hero__desc hero__desc--highlighted">
                                команды
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            <ul className="hero__cards">
                <li className="hero__card">
                    <div className="hero__ad">
                        <div className="hero__ad-line">
                            <p className="hero__adtext">Делитесь</p>
                            <img
                                src={plus}
                                alt="Decorate plus in circle"
                                className="hero__adplus"
                            />
                        </div>
                        <div className="hero__ad-line">
                            <img
                                src={plus}
                                alt="Decorate plus in circle"
                                className="hero__adplus"
                            />
                            <p className="hero__adtext">Оценивайте</p>
                        </div>
                        <div className="hero__ad-line">
                            <p className="hero__adtext">Сотрудничайте</p>
                            <img
                                src={plus}
                                alt="Decorate plus in circle"
                                className="hero__adplus"
                            />
                        </div>
                    </div>
                </li>
                <li className="hero__card">
                    <img
                        src={star}
                        alt="Decorate star"
                        className="hero__star"
                    />
                </li>
                <li className="hero__card hero__card--bigger">
                    <img
                        src={photo}
                        alt="Photo for Hero card"
                        className="hero__photo"
                    />
                    <img
                        src={lines}
                        alt="Lines decorated Hero card"
                        className="hero__lines"
                    />
                </li>
                <li className="hero__card">
                    <img
                        src={ad1}
                        alt="Decorate poster"
                        className="hero__cover"
                    />
                </li>
                <li className="hero__card">
                    <img
                        src={gamepad}
                        alt="Decorate gamepad"
                        className="hero__gamepad"
                    />
                </li>
                <li className="hero__card">
                    <img
                        src={ad2}
                        alt="Decorate poster"
                        className="hero__cover"
                    />
                </li>
                <li className="hero__card">
                    <img
                        src={ad3}
                        alt="Decorate poster"
                        className="hero__cover"
                    />
                </li>
                <li className="hero__card hero__card--higher">
                    <p className="hero__about">
                        <span className="hero__about hero__about--highlighted">
                            Подписывайтесь
                        </span>{' '}
                        на самых интересных разработчиков, чтобы получать их
                        игровые новинки самыми первыми
                    </p>
                    <img
                        src={games}
                        alt="Decorate images covers by games"
                        className="hero__games"
                    />
                </li>
            </ul>
        </section>
    )
}

export default Hero
