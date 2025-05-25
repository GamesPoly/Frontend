import React from "react"
import styles from './CourseCard.module.scss'
import { Calendar } from '../../icons/Calendar'
import { ArrowLink } from '../../../../shared/ui/ArrowLink/ArrowLink'

type CourseCardProps= {
    id: number
    imgSrc: string
    title: string
    text: string
    duration: number
}

const CourseCard = ({card}: { card: CourseCardProps })=>{
return<div className={styles['card']}>
<img className={styles['card__img']} src={card.imgSrc}/>
    <span className={styles['card__title']}>{card.title}</span>
    <p className={styles['card__text']}>{card.text}</p>
    <div className={styles['card__actions']}>
        <div className={styles['card__duration']}>
            <Calendar />
            <span>Длительность: {card.duration} месяцев</span>
        </div>
        <ArrowLink className={styles.card__link} small to={"/courses/"+card.id} />
    </div>
</div>
}

export default CourseCard