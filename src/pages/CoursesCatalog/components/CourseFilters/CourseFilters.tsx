import React, { useState } from "react"
import styles from './CourseFilters.module.scss'

const CourseFilters = () => {
    const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false)

    return (
        <div className={styles['filters']}>
            <h2 className={styles['filters__title']}>
                <span className={styles['filters__gradient']}>Каталог курсов</span>
            </h2>

            <div className={styles['filters__bar']}>
                <div className={styles['filters__searchWrapper']}>
                    <input
                        className={styles['filters__search']}
                        type="text"
                        placeholder="Введите название курса"
                    />
                    <button className={styles['filters__searchIcon']}>
                        {/*<Search />*/}
                    </button>
                </div>

                <button
                    className={styles['filters__mobileButton']}
                    onClick={() => setIsMobileFiltersOpen(true)}
                >
                    Фильтры
                </button>

                <button className={styles['filters__reset']}>
                    {/*<ArrowRight />*/}
                    <span>Сбросить все фильтры</span>
                </button>
            </div>

            <div className={styles['filters__tags']}>
                <button className={`${styles['filters__tag']} ${styles['active']}`}>Программирование</button>
                <button className={styles['filters__tag']}>Дизайн</button>
                <button className={styles['filters__tag']}>Маркетинг</button>
                <button className={styles['filters__tag']}>Анализ данных</button>
                <button className={styles['filters__tag']}>С нуля</button>
                <button className={styles['filters__tag']}>С опытом</button>
            </div>

            {isMobileFiltersOpen && (
                <div className={styles['filters__modal']}>
                    <div className={styles['filters__modalContent']}>
                        <h3 className={styles['filters__modalTitle']}>Тематика</h3>
                        <div className={styles['filters__modalTags']}>
                            <button className={`${styles['filters__tag']} ${styles['active']}`}>Программирование</button>
                            <button className={styles['filters__tag']}>Анализ данных</button>
                            <button className={styles['filters__tag']}>Дизайн</button>
                            <button className={styles['filters__tag']}>Маркетинг</button>
                        </div>

                        <h3 className={styles['filters__modalTitle']}>Уровень</h3>
                        <div className={styles['filters__modalTags']}>
                            <button className={`${styles['filters__tag']} ${styles['active']}`}>С нуля</button>
                            <button className={styles['filters__tag']}>С опытом</button>
                        </div>

                        <button className={styles['filters__applyButton']}>
                            {/*<ArrowRight />*/}
                            <span>Показать 999 курсов</span>
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default CourseFilters
