import React from 'react'
import styles from './Genre.module.scss'
import ListGenres from './ListGenres/ListGenres'
import GamesSlider from './GamesSlider/GamesSlider'
const Genre = () => {
    return (
        <section id="genre" className={styles['genre']}>
            <div className={styles['genre__caption']}>
                <h2 className={styles['genre__title']}>
                    <span className={styles['genre__up-caption']}>Популярные игры от студентов</span>
                    <span className={styles['genre__down-caption']}>
                        МосПолитеха по жанрам
                    </span>
                </h2>
            </div>
            <div className={styles['genre__body']}>
                <ListGenres />
                <GamesSlider />
            </div>
        </section>
    )
}

export default Genre
