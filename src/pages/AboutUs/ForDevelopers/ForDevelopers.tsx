import React from 'react'
import styles from './ForDevelopers.module.scss'
import { ArrowLink } from '../../../shared/ui/ArrowLink/ArrowLink'

const ForDevelopers = () => {
    return (
        <div className={styles['for-developers']}>
            <h2 className={styles['for-developers__title']}>Разработчикам</h2>
            <p className={styles['for-developers__text']}>
                PolyGames - ваша платформа для выражения творчества. Не теряйте
                шанс поделиться своими игровыми мирами с нашим сообществом -
                загружайте свои игры.
            </p>
            <ArrowLink to="/post-form" />
        </div>
    )
}

export default ForDevelopers
