import React from 'react'
import styles from './AdBanner.module.scss'
import { Link } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import type { Game } from '../../../../types'

type AdBannerProps = {
    gameAdObj: Partial<Game>
}
const AdBanner: React.FC<AdBannerProps> = ({ gameAdObj }) => {
    return (
        <div className={styles['ad-banner']}>
            {gameAdObj.imageUrl && (
                <img
                    src={gameAdObj.imageUrl}
                    alt={gameAdObj.name}
                    className={styles['ad-banner__image']}
                />
            )}

            <div className={styles['ad-banner__info']}>
                <h2 className={styles['ad-banner__title']}>
                    {gameAdObj.name || <Skeleton width={'120px'} />}
                </h2>
                <p className={styles['ad-banner__desc']}>
                    {gameAdObj.desc || <Skeleton count={4} />}
                </p>
                <div className={styles['ad-banner__tags']}>
                    <p className={styles['ad-banner__ganre']}>
                        {gameAdObj.ganre || <Skeleton />}
                    </p>
                    {gameAdObj.tags ? (
                        gameAdObj.tags.map((item, index) => (
                            <p key={index} className={styles['ad-banner__tag']}>
                                #{item}
                            </p>
                        ))
                    ) : (
                        <>
                            <p className={styles['ad-banner__tag']}>
                                <Skeleton width={'110px'} />
                            </p>
                            <p className={styles['ad-banner__tag']}>
                                <Skeleton width={'110px'} />
                            </p>
                            <p className={styles['ad-banner__tag']}>
                                <Skeleton width={'110px'} />
                            </p>
                        </>
                    )}
                </div>
                {gameAdObj.id ? (
                    <Link
                        to={`${gameAdObj.id}`}
                        className={styles['ad-banner__link']}
                    >
                        <p className={styles['ad-banner__more']}>Подробнее</p>
                        <svg
                            className={styles['ad-banner__arrow']}
                            xmlns="http://www.w3.org/2000/svg"
                            width="50"
                            height="50"
                            viewBox="0 0 50 50"
                            fill="none"
                        >
                            <circle cx="25" cy="25" r="25" fill="#FF5731" />
                            <path
                                d="M32.4642 18.6363C32.4642 18.0288 31.9717 17.5363 31.3642 17.5363L21.4642 17.5363C20.8566 17.5363 20.3642 18.0288 20.3642 18.6363C20.3642 19.2438 20.8566 19.7363 21.4642 19.7363L30.2642 19.7363L30.2642 28.5363C30.2642 29.1438 30.7566 29.6363 31.3642 29.6363C31.9717 29.6363 32.4642 29.1438 32.4642 28.5363L32.4642 18.6363ZM19.414 32.1421L32.142 19.4142L30.5863 17.8585L17.8584 30.5864L19.414 32.1421Z"
                                fill="white"
                            />
                        </svg>
                    </Link>
                ) : (
                    <Skeleton
                        className={styles['ad-banner__link']}
                        height={'50px'}
                    />
                )}
            </div>
        </div>
    )
}

export default AdBanner
