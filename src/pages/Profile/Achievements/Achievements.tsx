import styles from './Achievements.module.scss'
import React from 'react'
import AchievementCard from './AchievementCard/AchievementCard'
import cup from "../images/cup.svg"
import swords from "../images/swords.svg"

// Default test achievements to display if no user achievements are provided
const testAchievments = [
    {
        src: cup,
        text:"Лучший разработчик",
    },
    {
        src: swords,
        text:"Лучший стратег",
    },
    {
        src: cup,
        text:"Лучший разработчик",
    },
    {
        src: cup,
        text:"Лучший разработчик",
    },
    {
        src: swords,
        text:"Лучший стратег",
    },
    {
        src: cup,
        text:"Лучший разработчик",
    }
]

interface AchievementsProps {
    achievements?: any[];
    noAchievementsMessage?: string;
}

const Achievements = ({ achievements = [], noAchievementsMessage = "У вас пока нет достижений" }: AchievementsProps) => {
    const items = achievements.length > 0 ? achievements : testAchievments;

    return (
        <section className={styles['achievements']}>
            <div className={styles['achievements__header']}>
                <span className={styles['achievements__title']}>Достижения</span>
                <button className={styles['achievements__btn']}>Показать все</button>
            </div>
            <div className={styles['achievements__cards']}>
                {items.length > 0 ? (
                    items.map((item, index) => (
                        <AchievementCard 
                            key={index}
                            src={item.src} 
                            text={item.text}
                        />
                    ))
                ) : (
                    <div className={styles['achievements__empty-message']}>{noAchievementsMessage}</div>
                )}
            </div>
        </section>
    )
}

export default Achievements