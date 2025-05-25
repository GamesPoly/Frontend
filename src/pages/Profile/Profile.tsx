import React, { useEffect } from 'react'
import bg from './images/bg_pic.svg.svg'
import styles from './Profile.module.scss'
import UserInfo from './UserInfo/UserInfo'
import userPhoto from './images/user_pic.png'
import Favourites from './Games/Favourites'
import UserGames from './Games/UserGames'
import Achievements from './Achievements/Achievements'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RootState, AppDispatch } from '../../shared/lib/store/store'
import { getCurrentUser } from '../../shared/lib/store/auth/authSlice'

function Profile() {
    const navigate = useNavigate()
    const dispatch = useDispatch<AppDispatch>()
    const { user, loading, error } = useSelector(
        (state: RootState) => state.auth
    )

    useEffect(() => {
        const token = localStorage.getItem('authToken')
        if (!token) {
            navigate('/auth')
            return
        }

        dispatch(getCurrentUser())
    }, [navigate, dispatch])

    // Create a default user object with fallback values
    const currentUser = {
        name: user?.name || 'Пользователь',
        avatar: user?.avatar || userPhoto,
        online: user?.online !== undefined ? user.online : true,
        status: user?.status || 'Статус не указан',
        activity: user?.activity || 0,
    }

    if (loading) {
        return (
            <div className={styles['profile__wrapper']}>
                <div className={styles['loading']}>Загрузка профиля...</div>
            </div>
        )
    }

    return (
        <main
            style={{ backgroundImage: `url(${bg})` }}
            className={styles['profile__wrapper']}
        >
            <UserInfo user={currentUser} />
            <UserGames
                userGames={user?.userGames || []}
                noGamesMessage="У вас пока нет игр. Посетите каталог, чтобы найти интересные игры."
            />
            <Favourites
                favouriteGames={user?.favouriteGames || []}
                noFavouritesMessage="У вас пока нет избранных игр. Добавьте игры в избранное в каталоге."
            />
            <Achievements
                achievements={user?.achievements || []}
                noAchievementsMessage="У вас пока нет достижений. Играйте в игры, чтобы получать достижения."
            />
        </main>
    )
}

export default Profile
