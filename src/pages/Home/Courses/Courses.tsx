import React from 'react'
import styles from './Courses.module.scss'
import { CoursesCard } from './CoursesCard/CoursesCard'
import { ArrowLink } from '../../../shared/ui/ArrowLink/ArrowLink'
import course_bg from './images/course-bg.png'
import i1 from './images/i1.png'
import i2 from './images/i2.png'
import i3 from './images/i3.png'
import i4 from './images/i4.png'

const cards = [
    {
        header: 'Основы разработки компьютерных игр',
        description:
            'Основной целью освоения курса «Основы разработки компьютерных игр» является изучение принципов проектирования и создания компьютерных  игр.',
        imgSrc: i1,
    },
    {
        header: 'Художник анимации и компьютерной графики',
        description:
            'Программа направлена на подготовку специалистов в области медиаиндустрии: анимации, проектирования интерфейсов, цифровой иллюстрации, миров компьютерных игр.',
        imgSrc: i2,
    },
    {
        header: 'Разработка компьютерных игр',
        description:
            'В результате изучения программы слушатели приобретут компетенции, необходимые для проектирования, разработки, и поддержки игровых приложений с присвоением квалификации: «Специалист по разработке компьютерных игр»',
        imgSrc: i3,
    },
    {
        header: 'Центр довузовского образования и подготовки к ЕГЭ',
        description:
            'Подготовка к сдаче ЕГЭ, ОГЭ и внутренних вступительных испытаний по информатике, математике, физике, русскому языку и обществознанию. Программы для школьников, студентов колледжей, граждан иностранных государств.',
        imgSrc: i4,
    },
]

const Courses = () => {
    return (
        <section className={styles.courses}>
            <h2 className={styles.courses__title}>
                <span className={styles.courses__title_up}>Подготовительные курсы</span>
                <span className={styles.courses__title_down}>в Московском Политехе</span>
            </h2>
            <div className={styles['courses__descryption-container']}>
                <div
                    className={styles.courses__descryption}
                    style={{ backgroundImage: `url(${course_bg})` }}
                >
                    <div className={styles['courses__descryption-card']}>
                        <h3>Разработка компьютерных игр</h3>
                        <p>
                            В результате изучения программы слушатели приобретут
                            компетенции, необходимые для проектирования,
                            разработки, и поддержки игровых приложений с
                            присвоением квалификации: «Специалист по разработке
                            компьютерных игр»
                        </p>
                        <ArrowLink to="/" className={styles.link} />
                    </div>
                </div>
                <ul className={styles.courses__list}>
                    {cards.map((card) => (
                        <CoursesCard key={card.header} {...card} />
                    ))}
                    <div className={styles.gradient}></div>
                </ul>
            </div>
        </section>
    )
}

export default Courses
