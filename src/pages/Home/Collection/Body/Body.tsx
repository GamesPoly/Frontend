import React from 'react'
import styles from './Body.module.scss'
import internet from '../../../../shared/assets/internet.svg'
import CardCollection from './Card/Card'

const CollectionBody = () => {
    return (
        // <div className="collection__body">
        //     <div className="collection__info">
        //         <div className="collection__caption">
        //             <div className="collection__up-caption">
        //                 <h2 className="collection__title">Цифровая платформа для игроков и разработчиков</h2>
        //                 <img src={internet} alt="Decorate Icon" className="collection__icon"/>
        //             </div>
        //             <div className="collection__down-caption">
        //                 <p className="collection__number">02</p>
        //                 <h2 className="collection__title">ваших достижений</h2>
        //             </div>
        //         </div>
        //         <p className="collection__desc">
        //             Заполните <span className="collection__desc--highlight">форму для отправки проекта</span>, после
        //             модерации ваша игра появится в каталоге и будет <span className="collection__desc--highlight">доступна всем</span>
        //         </p>
        //     </div>
        //     <ul className="collection__cards">
        //         <li className="collection__card">
        //             <CardCollection version='standart'/>
        //         </li>
        //         <li className="collection__card">
        //             <CardCollection version='solid'/>
        //         </li>
        //         <li className="collection__card">
        //             <CardCollection version='mini'/>
        //             <CardCollection version='catalog'/>
        //         </li>
        //     </ul>
        // </div>
        <div className={styles.collection__body}>
            <div className={styles.collection__caption}>
            <div className={styles.collection__boxCaption}>
                <h2 className={styles.collection__title}>
                    <span className={styles.collection__upCaption}>
                        <img
                            src={internet}
                            alt="Decorate Icon"
                            className={styles.collection__icon}
                        />
                        Цифровая платформа
                    </span>
                    <span className={styles.collection__downCaption}>
                        для игроков и разработчиков
                    </span>
                </h2>
            </div>
                <div className={styles.collection__downCaption}>
                    <p className={styles.collection__number}>
                        Откройте для себя удивительные игры, созданные нашими
                        талантливыми разработчиками
                    </p>
                </div>
            </div>
            <ul className={styles.collection__cards}>
                <li className={styles.collection__card}>
                    <CardCollection version="standart" />
                </li>
                <li className={styles.collection__card}>
                    <CardCollection version="solid" />
                </li>
                <li className={styles.collection__card}>
                    <CardCollection version="icons" />
                </li>
            </ul>
        </div>
    )
}

export default CollectionBody
