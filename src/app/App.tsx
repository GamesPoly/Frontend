import './styles/App.scss'
import React, { useEffect, useState } from 'react'
import Header from '@components/../widgets/ui/Header/Header'
import Home from '../pages/Home/Home'
import Profile from '../pages/Profile/Profile'
import Catalog from '../pages/Catalog/Catalog'
import TeamsPage from '../pages/TeamsPage/TeamsPage'
import Auth from '../pages/Auth/Auth'
import PostForm from '../pages/PostForm/PostForm'
import PopularGames from '../pages/PopularGames/PopularGames'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Registration from '../pages/Registration/Registration'
import Footer from '@components/../widgets/ui/Footer/Footer'
import NotFound from '../pages/NotFound/NotFound'
import Game from '../pages/Game/Game'
import AboutUs from '../pages/AboutUs/AboutUs'
import { StudyProgram } from '../pages/StudyProgram/StudyProgram'
import CoursesCatalog from '../pages/CoursesCatalog/CoursesCatalog'
import Courses from '../pages/Home/Courses/Courses'

const App = () => {
    const [showHeader, setShowHeader] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)

    const handleScroll = () => {
        const currentScrollY = window.scrollY

        if (currentScrollY > lastScrollY) {
            setLastScrollY(currentScrollY)
            setShowHeader(false)
        } else {
            setLastScrollY(currentScrollY)
            setShowHeader(true)
        }
    }

    const handlePointerMove = (event: PointerEvent) => {
        setShowHeader((currentShowHeader) => {
            if (currentShowHeader || event.clientY < 100) {
                return true
            }
            return false
        })
    }

    useEffect(() => {
        setLastScrollY(window.scrollY)
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [lastScrollY])

    useEffect(() => {
        window.addEventListener('pointermove', handlePointerMove)
        return () => {
            window.removeEventListener('pointermove', handlePointerMove)
        }
    }, [])

    return (
        <div className="app">
            <BrowserRouter>
                <Header showHeader={showHeader} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/games" element={<Catalog />} />
                    <Route path="/teams" element={<TeamsPage />} />
                    <Route path="/auth" element={<Auth />} />
                    <Route path="/register" element={<Registration />} />
                    <Route path="/post-form" element={<PostForm />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/popular-games" element={<PopularGames />} />
                    <Route path="/games/:id" element={<Game />} />
                    <Route path="/study-program" element={<StudyProgram />} />
                    <Route path="/courses" element={<CoursesCatalog />} />
                    <Route path="/test" element={<Courses />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    )
}

export default App
