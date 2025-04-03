import React, { FC, useState } from 'react'
import styles from './Auth.module.scss'
import EmailInput from './EmailInput/EmailInput'
import PasswordInput from './PasswordInput/PasswordInput'
import git from '../../shared/assets/git-icon.svg'
import google from '../../shared/assets/google-icon.svg'
import vk from '../../shared/assets/vk-icon.svg'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../shared/lib/store/store'
import { loginUser } from '../../shared/lib/store/auth/authSlice'

function Auth() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch<AppDispatch>()
    const { loading, error } = useSelector((state: RootState) => state.auth)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        dispatch(loginUser({ email, password }))
    }

    const handleEmailChange = (newEmail: string) => {
        setEmail(newEmail)
    }

    const handlePasswordChange = (newPassword: string) => {
        setPassword(newPassword)
    }

    return (
        <main className={styles['auth__wrapper']}>
            <h1 className={styles['auth_title']}>Войдите в свой аккаунт</h1>
            <form
                className={styles['auth__form']}
                method="POST"
                onSubmit={handleSubmit}
            >
                <div className={styles['input__fields']}>
                    <EmailInput onEmailChange={handleEmailChange} />
                    <PasswordInput onPasswordChange={handlePasswordChange} />
                </div>
                <div className={styles['auth__forget__btns']}>
                    <div className={styles['auth__btn']}>
                        <p>Войти</p>
                        <div className={styles['btn__circle']}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="15"
                                height="14"
                                viewBox="0 0 15 14"
                                fill="none"
                                className={styles['btn__arrow']}
                            >
                                <path
                                    d="M14.3334 7.58336C14.6555 7.26118 14.6555 6.73882 14.3334 6.41664L9.0831 1.16637C8.76091 0.844186 8.23855 0.844186 7.91637 1.16637C7.59419 1.48855 7.59419 2.01091 7.91637 2.3331L12.5833 7L7.91637 11.6669C7.59419 11.9891 7.59419 12.5114 7.91637 12.8336C8.23855 13.1558 8.76091 13.1558 9.0831 12.8336L14.3334 7.58336ZM0.25 7.825H13.75V6.175H0.25V7.825Z"
                                    fill="black" // var(--primary-color)
                                />
                            </svg>
                        </div>
                    </div>
                    <p>Забыли пароль?</p>
                </div>
                <div className={styles['other__auth__btns']}>
                    <hr></hr>
                    <p>Или продолжить через:</p>
                    <div className={styles['btns']}>
                        <img
                            src={vk}
                            alt=""
                            className={styles['aside-settings__icon']}
                        />
                        <img
                            src={google}
                            alt=""
                            className={styles['aside-settings__icon']}
                        />
                        <img
                            src={git}
                            alt=""
                            className={styles['aside-settings__icon']}
                        />
                    </div>
                </div>
            </form>
            <div className={styles['link__registr']}>
                <h2>В первый раз в PolyGames?</h2>
                <p>Создать аккаунт</p>
            </div>
        </main>
    )
}

export default Auth
