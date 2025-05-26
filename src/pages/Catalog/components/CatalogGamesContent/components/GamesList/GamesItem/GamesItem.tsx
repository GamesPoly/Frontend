import React, { useState } from 'react'
import styles from './GamesItem.module.scss'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

type GamesItemProps = Partial<{
    name: string
    desc: string
    imageUrl: string
}>
function GamesItem({ name, desc, imageUrl }: GamesItemProps) {
    const [isLoaded, setIsLoaded] = useState<boolean>(false)
    const [isError, setIsError] = useState<boolean>(false)
    // const navigate = useNavigate();
    // const dispatch = useDispatch();

    // const openCard = (card: GamesItemProps) => {
    //   //когда будет бэк и какая-то функция для получения подробной инфы об игре, чтобы
    //   //можно было ее отобразить на вьюшке игры
    //   dispatch(getCard(card)).then((res: any) => {
    //     navigate(`/games/${res.id}`);
    //   });
    // };

    return (
        <li className={styles['list__card']}>
            <div
                // onClick={() => openCard({ name: name, desc: desc, imageUrl: imageUrl })}
                className={styles['card__content']}
            >
                {(!isLoaded || isError) && <Skeleton className={styles['card__cover']} />}
                <img
                    src={imageUrl}
                    alt={name}
                    className={styles['card__cover']}
                    onLoad={() => setIsLoaded(true)}
                    onError={() => setIsError(true)}
                    style={{ display: isLoaded || !isError  ? 'block' : 'none' }}
                />

                <div className={styles['card__text']}>
                    <h4 className={styles['card__title']}>
                        {name || <Skeleton />}
                    </h4>
                    <p className={styles['card__desc']}>
                        {desc || <Skeleton count={10} />}
                    </p>
                </div>
            </div>
        </li>
    )
}

export default GamesItem
