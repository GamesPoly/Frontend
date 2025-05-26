import React from 'react'
import { Link } from 'react-router-dom'
import styles from './GamesList.module.scss'
import GamesItem from './GamesItem/GamesItem'
import { useCatalogFilters } from '../../../../../../shared/lib/context/CatalogFiltersProvider'
import type { GamesListData } from '../../types'

type GamesListProps = GamesListData
function GamesList({ title, games }: GamesListProps) {
    const { selectedGenre, selectedSet } = useCatalogFilters()

    return (
        <section className={styles['games__list']}>
            {games.length > 0 /* Если есть игры по запросу */ ? (
                <>
                    {title ? (
                        <div className={styles['list__head']}>
                            <h3 className={styles['games__header']}>{title}</h3>

                        </div>
                    ) : null}
                    <ul className={styles['list__body']}>
                        {games.map((game) => (
                            <GamesItem
                                name={game.name}
                                desc={game.desc}
                                imageUrl={game.imageUrl}
                                key={game.id}
                            />
                        ))}
                    </ul>
                </>
            ) : (
                /* Если нет игр по запросу */
                <div>Нет доступных игр по выбранным фильтрам</div>
            )}
        </section>
    )
}

export default GamesList
