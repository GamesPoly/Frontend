import React from "react";
import styles from './Games.module.scss'
import game7 from '../images/game7.png'
import game8 from '../images/game8.png'
import game9 from '../images/game9.png'
import game10 from '../images/game10.png'
import game11 from '../images/game11.png'
import game12 from '../images/game12.png'
import GameCard from './GameCard/GameCard'

// Default test favorites to display if no user favorites are provided
const testFavourites = [
    {
        src: game7,
        title: "Wall to wall",
        desc: "Решайте головоломки c перемещением блоков."
    },
    {
        src: game8,
        title: "Simulation 23/3",
        desc: "Платформер-головоломка с уровнями на логику и смекалку."
    },
    {
        src: game9,
        title: "В объективе!",
        desc: "Вы - блогер-путешественник по России. Создавайте впечатляющие фотографии, изучайте новые места для путешествий!"
    },
    {
        src: game10,
        title: "Veles Day",
        desc: "Разношерстная группа из героев, отшельников и безумцев, сведенная вместе голодом и нуждой, вынуждена спуститься в древнее подземелье, отравляющее окрестности, и покончить со злом, обитающим в нём."
    },
    {
        src: game11,
        title: "Чур меня!",
        desc: "Испугавшись усопшей панночки, Хома Брут начертил мелом защитный круг. Вот только этот мел был не простым: философ не спасся от нечисти и навлек на себя еще большую беду. Нарисованный хомой круг оказался порталом в мир невиданных чудовищ. Чтобы выжить,ему придется отыскать иной способ защиты."
    },
    {
        src: game12,
        title: "Catch these eggs!",
        desc: "Аркада, где ваша основная задача ловиться яйца в корзину."
    }
]

interface FavouritesProps {
    favouriteGames?: any[];
    noFavouritesMessage?: string;
}

const Favourites = ({ favouriteGames = [], noFavouritesMessage = "У вас пока нет избранных игр" }: FavouritesProps) => {
    const games = favouriteGames.length > 0 ? favouriteGames : testFavourites;

    return (
        <section className={styles['games']}>
            <div className={styles['games__header']}>
                <span className={styles['games__title']}>Избранное</span>
                <button className={styles['games__btn']}>Показать все</button>
            </div>
            <div className={styles['games__cards']}>
                {games.length > 0 ? (
                    games.map((game, index) => (
                        <GameCard 
                            key={index}
                            src={game.src} 
                            title={game.title} 
                            desc={game.desc} 
                        />
                    ))
                ) : (
                    <div className={styles['games__empty-message']}>{noFavouritesMessage}</div>
                )}
            </div>
        </section>
    )
}

export default Favourites;