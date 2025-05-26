import React, { useState } from 'react'
import styles from './AdBand.module.scss'
import { Link } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import type { Game } from '../../../../types'

type AdBandProps = {
    gameAdObj: Partial<Game>
}
function AdBand({ gameAdObj }: AdBandProps) {
    const [isLoaded, setIsLoaded] = useState(false)

    return (
        <Link to={`/games/${gameAdObj.id}`} className={styles['ad-band']}>
            {!isLoaded && <Skeleton className={styles['ad-band__cover']} />}
            <img
                src={gameAdObj.imageUrl}
                alt={gameAdObj.name}
                onLoad={() => setIsLoaded(true)}
                style={{ display: isLoaded ? 'block' : 'none' }}
                className={styles['ad-band__cover']}
            />
            <div className={styles['ad-band__info']}>
                <h3 className={styles['ad-band__title']}>
                    {gameAdObj.name || <Skeleton />}
                </h3>
                <p className={styles['ad-band__desc']}>
                    {gameAdObj.desc || <Skeleton count={2} />}
                </p>
                <div className={styles['ad-band__tags']}>
                    <p className={styles['ad-band__ganre']}>
                        {gameAdObj.ganre || <Skeleton width={'90px'} />}
                    </p>
                    {gameAdObj.tags ? (
                        gameAdObj.tags.map((item, index) => (
                            <p className={styles['ad-band__tag']} key={index}>
                                #{item}
                            </p>
                        ))
                    ) : (
                        <p className={styles['ad-band__tag']}>
                            <Skeleton width={'90px'} />
                        </p>
                    )}
                </div>
            </div>
        </Link>
    )
}

export default AdBand
