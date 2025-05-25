import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../shared/assets/logo.svg'
import polyLogo from '../../../shared/assets/poly-logo.svg'
import styles from './Header.module.scss'

interface HeaderProps {
    showHeader: boolean
}

const Header: React.FC<HeaderProps> = ({ showHeader }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    return (
        <header
            className={`${styles.header} ${
                showHeader ? styles.visible : styles.hidden
            }`}
        >
            <div className={styles.header__wrapper}>
                <div className={styles.logos}>
                    <Link to="/" className={styles.header__link}>
                        <img
                            src={polyLogo}
                            alt="PolyGames Logo Image"
                            className={styles.header__logo}
                        />
                    </Link>
                    <Link to="/" className={styles.header__link}>
                        <img
                            src={logo}
                            alt="PolyGames Logo Image"
                            className={styles.header__logo}
                        />
                    </Link>
                </div>
                <div className={styles.header__nav}>
                    <Link className={styles.header__nav__link} to="/post-form">
                        Опубликовать
                    </Link>
                    <Link className={styles.header__nav__link} to="/games">
                        Каталог игр
                    </Link>
                    <Link className={styles.header__nav__link} to="/teams">
                        Команды
                    </Link>
                    <Link className={styles.header__nav__link} to="/about-us">
                        О нас
                    </Link>
                    {localStorage.getItem('authToken') ? (
                        <Link className={styles.header__nav__link} to="/profile">
                            Личный кабинет
                        </Link>
                    ) : (
                        <Link className={styles.header__nav__link} to="/auth">
                            Войти
                        </Link>
                    )}
                </div>
                <div className={styles['header__burger']} onClick={toggleMenu}>
                    <svg
                        className={`${styles['header__burger-icon']} ${isMenuOpen ? styles.open : ''}`}
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="50"
                        viewBox="0 0 50 50"
                        fill="none"
                    >
                        <circle cx="25" cy="25" r="25" fill="#EFEFED" />
                        <line
                            x1="16.5"
                            y1="19.5"
                            x2="34.5"
                            y2="19.5"
                            className={styles.line1}
                        />
                        <line
                            x1="16.5"
                            y1="25.16"
                            x2="34.5"
                            y2="25.16"
                            className={styles.line2}
                        />
                        <line
                            x1="16.5"
                            y1="30.82"
                            x2="34.5"
                            y2="30.82"
                            className={styles.line3}
                        />
                    </svg>
                </div>
            </div>
            {isMenuOpen && (
                <nav className={styles['header__mobile-menu']}>
                    <p className={styles['header__mobile-menu-title']}>
                        НАВИГАЦИЯ ПО САЙТУ
                    </p>
                    <Link
                        to="/post-form"
                        className={styles['header__mobile-menu-link']}
                        onClick={toggleMenu}
                    >
                        Опубликовать
                    </Link>
                    <Link
                        to="/games"
                        className={styles['header__mobile-menu-link']}
                        onClick={toggleMenu}
                    >
                        Каталог игр
                    </Link>
                    <Link
                        to="/teams"
                        className={styles['header__mobile-menu-link']}
                        onClick={toggleMenu}
                    >
                        Команды
                    </Link>
                    <Link
                        to="/about-us"
                        className={styles['header__mobile-menu-link']}
                        onClick={toggleMenu}
                    >
                        О нас
                    </Link>
                    <Link
                        to="/auth"
                        className={styles['header__mobile-menu-link']}
                        onClick={toggleMenu}
                    >
                        Личный кабинет
                    </Link>
                </nav>
            )}
        </header>
    )
}

export default Header
