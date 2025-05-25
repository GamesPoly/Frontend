import React, { useRef, useState } from 'react'
import styles from './TeamsPage.module.scss'
import popular_teams from '../../shared/assets/popular-teams.png'
import team from '../../shared/assets/team.png'
import person from '../../shared/assets/Rectangle 56.png'
import { ArrowLink } from '../../shared/ui/ArrowLink/ArrowLink'

function TeamsPage() {
    const slider = useRef<HTMLDivElement | null>(null)
    const [activeIndex, setActiveIndex] = useState<number>(0)

    const scrollToIndex = (index: number) => {
        const sliderElement = slider.current

        if (sliderElement && sliderElement.children[index]) {
            sliderElement.scrollTo({
                left: 370 * index,
                behavior: 'smooth',
            })
        }
        setActiveIndex(index)
    }

    return (
        <main className={styles['teams__wrapper']}>
            <div className={styles['banner']}>
                <div className={styles['text']}>
                    <h1 className={styles['first__h1']}>Команды</h1>
                    <h1 className={styles['second__h1']}>PolyGames</h1>
                    <p className={styles['commands__p']}>
                        В PolyGames представлено 23 команды разработчиков.{' '}
                        <br />
                        Все они студенты Московского Политеха с огромным
                        потенциалом и желанием создавать что-то новое.
                    </p>
                </div>
                <div className={styles['photo']}>
                    <img
                        className={styles['team__img']}
                        src={team}
                        alt="team"
                    />
                </div>
            </div>
            <div className={styles['popular__teams']}>
                <h2 className={styles['pop__teams__h2']}>Популярные команды</h2>
                <div className={styles['teams__photos']} ref={slider}>
                    {[...Array(6)].map((_, index) => (
                        <div key={index} className={styles['teams__team']}>
                            <img
                                src={popular_teams}
                                alt={`Team ${index + 1}`}
                            />
                            <p>Team {index + 1}</p>
                        </div>
                    ))}
                </div>
                <div className={styles['buttons__wrapper']}>
                    {[...Array(6)].map((_, index) => (
                        <button
                            key={index}
                            className={`${styles['scroll__button']} ${
                                activeIndex === index ? styles['active'] : ''
                            }`}
                            onClick={() => scrollToIndex(index)}
                        ></button>
                    ))}
                </div>{' '}
            </div>
            <div className={styles['down__banner']}>
                <div className={styles['first__block']}>
                    <div className={styles['down__photo']}>
                        <img
                            className={styles['person__img']}
                            src={person}
                            alt="person"
                        />
                    </div>
                    <div className={styles['down__text']}>
                        <h1>Хочешь создавать свои игры?</h1>
                        <p>Собери свою команду</p>
                        <p>Пройдите регистрацию на сайте</p>
                        <p>Создайте и выложите игру</p>
                        <h1>Будьте первыми!</h1>
                    </div>
                </div>
                <ArrowLink to="/post-form" className={styles['arrow-link']} />
            </div>
        </main>
    )
}

export default TeamsPage
