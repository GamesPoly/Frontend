import React from "react"
import styles from './CoursesCatalog.module.scss'
import CourseFilters from './components/CourseFilters/CourseFilters'
import CourseCard from './components/CourseCard/CourseCard'
import img from "./images/course.png"

const testCards = Array.from({ length: 9 }, (_, i) => ({
    id: i + 1,
    title: 'Основы разработки компьютерных игр',
    text: "Основной целью освоения курса «Основы разработки компьютерных игр» является изучение принципов проектирования и создания компьютерных игр.",
    duration: 6,
    imgSrc:img
}));


const CoursesCatalog = ()=>{
return (
    <main className={styles['course']}>
        <div className={styles['course__wrapper']}>
            <CourseFilters></CourseFilters>
            <div className={styles['course__grid']}>
                {testCards.map((card, i) => (
                    <CourseCard key={card.id} card={card}/>
                ))}
            </div>
        </div>
    </main>
)
}

export default CoursesCatalog
