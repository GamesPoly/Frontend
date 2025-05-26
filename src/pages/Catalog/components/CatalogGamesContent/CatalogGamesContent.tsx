import React, { useState, useEffect } from 'react'
import { useCatalogFilters } from '../../../../shared/lib/context/CatalogFiltersProvider'
import GamesList from './components/GamesList/GamesList'
import SkeletonSlider from './components/skeletons/SkeletonSlider/SkeletonSlider'
import SkeletonGamesList from './components/skeletons/SkeletonGamesList/SkeletonGamesList'
import AdSlider from './components/AdSlider/AdSlider'
import type { Game, GamesListData } from './types'
import axios from 'axios'

function CatalogGamesContent() {
    const { selectedGenre, selectedSet, isLoading, changeLoadingState } =
        useCatalogFilters()

    const DATA = JSON.parse(`{
  "games": [
    {
      "id": "1",
      "imageUrl": "https://utfs.io/f/P7JeVg86bGVgrmww9tKDQXvcpidKqhH6tJzso2e5bZW4VI0f",
      "name": "Neo_Cat",
      "desc": "Вы кот...НЕО КОТ!!! Вы выбрали красную таблетку и отправляетесь в матрицу, чтобы излечить её от багов. По мере прохождения изучайте новые механики, чтобы устранять баги эффективнее. Вперёд НЕО КОТ, я в тебя верю!",
      "ganre": "Ролевая",
      "tags": ["MosPolyJam2022"],
      "devTeamId": "1",
      "rating": 4.9,
      "views": 1851,
      "reviews": 285,
      "publishDate": "2021-06-13",
      "platform": "Web",
      "set": ["Просмотры"]
    },
    {
      "id": "2",
      "imageUrl": "https://utfs.io/f/P7JeVg86bGVg5mQpZMLhJ3xzpt6MDr4lIu9ymabqiFojHn1e",
      "name": "Fisher's Treasures",
      "desc": "Рыбалка расслабляет, повышая вашу бдительность и концентрацию. Стань настоящим рыбаком и повышай свой уровень умения ловить рыбу!",
      "ganre": "Карточная",
      "tags": [],
      "devTeamId": "2",
      "rating": 2.4,
      "views": 9724,
      "reviews": 17,
      "publishDate": "2019-01-14",
      "platform": "Web",
      "set": ["MosPolyJam"]
    },
    {
      "id": "3",
      "imageUrl": "https://utfs.io/f/P7JeVg86bGVgPVacmN86bGVgB81NE4rIqv7hCkJSLOjitUA2",
      "name": "Observer",
      "desc": "Система Н.З.О - симуляция для развития ИИ. Образцы не осознают своё пребывание в ней. В одном из секторов произошёл сбой и ваша задача - проконтролировать ситуацию.",
      "ganre": "Экшен",
      "tags": ["MosPolyJam2019"],
      "devTeamId": "3",
      "rating": 1.3,
      "views": 7429,
      "reviews": 876,
      "publishDate": "2021-04-07",
      "platform": "Web",
      "set": ["Windows"]
    },
    {
      "id": "4",
      "imageUrl": "https://utfs.io/f/P7JeVg86bGVgJqwtmqBGTZBN0OI3hwbXV9U6p2G8tLY5ReED",
      "name": "Emotionary",
      "desc": "Иногда бывает намного легче, если выбор делают за тебя. Ты не знаешь как реагировать на ту или иную ситуацию. А теперь попробуй окунуться в тело другого человека и решить судьбу его жизни. Выбирай эмоции наиболее подходящие под ситуации, если повезет , то пройдешь до конца, если нет пробуй и пробуй заново.",
      "ganre": "Стратегия",
      "tags": ["MosPolyJam2019"],
      "devTeamId": "4",
      "rating": 2.9,
      "views": 6711,
      "reviews": 941,
      "publishDate": "2023-09-24",
      "platform": "Mobile",
      "set": ["MosPolyJam"]
    },
    {
      "id": "5",
      "imageUrl": "https://utfs.io/f/P7JeVg86bGVghBrVTy6axmpNCUriJ24VMGtQnulBSIDWzX0e",
      "name": "Disappeared in nowhere",
      "desc": "Герой попадает в виртуальную реальность для испытания своих боевых навыков. Райан проходит этап за этапом, как вдруг, в симуляции, в которой он находился, случается заражение вирусом. Герою нужно срочно вернуться в реальный мир, пока вирус полностью не захватил контроль над реальностью, в которой находился Райан.",
      "ganre": "Ролевая",
      "tags": [],
      "devTeamId": "5",
      "rating": 4.8,
      "views": 5470,
      "reviews": 100,
      "publishDate": "2023-01-04",
      "platform": "Mobile",
      "set": ["Web"]
    },
    {
      "id": "6",
      "imageUrl": "https://utfs.io/f/P7JeVg86bGVg5ph6qCLhJ3xzpt6MDr4lIu9ymabqiFojHn1e",
      "name": "Simulation 23/3",
      "desc": "Платформер-головоломка с уровнями на логику и смекалку.",
      "ganre": "Стратегия",
      "tags": [],
      "devTeamId": "6",
      "rating": 1.1,
      "views": 3654,
      "reviews": 103,
      "publishDate": "2019-05-11",
      "platform": "Windows",
      "set": ["MosPolyJam"]
    },
    {
      "id": "7",
      "imageUrl": "https://utfs.io/f/P7JeVg86bGVgrmww9tKDQXvcpidKqhH6tJzso2e5bZW4VI0f",
      "name": "Neo_Cat",
      "desc": "Вы кот...НЕО КОТ!!! Вы выбрали красную таблетку и отправляетесь в матрицу, чтобы излечить её от багов. По мере прохождения изучайте новые механики, чтобы устранять баги эффективнее. Вперёд НЕО КОТ, я в тебя верю!",
      "ganre": "Стратегия",
      "tags": [],
      "devTeamId": "1",
      "rating": 4.6,
      "views": 4141,
      "reviews": 682,
      "publishDate": "2023-01-03",
      "platform": "Mobile",
      "set": ["Web"]
    },
    {
      "id": "8",
      "imageUrl": "https://utfs.io/f/P7JeVg86bGVgJqwtmqBGTZBN0OI3hwbXV9U6p2G8tLY5ReED",
      "name": "Emotionary",
      "desc": "Иногда бывает намного легче, если выбор делают за тебя. Ты не знаешь как реагировать на ту или иную ситуацию. А теперь попробуй окунуться в тело другого человека и решить судьбу его жизни. Выбирай эмоции наиболее подходящие под ситуации, если повезет , то пройдешь до конца, если нет пробуй и пробуй заново.",
      "ganre": "Ролевая",
      "tags": ["MosPolyJam2022"],
      "devTeamId": "4",
      "rating": 2.0,
      "views": 1140,
      "reviews": 74,
      "publishDate": "2023-03-15",
      "platform": "Windows",
      "set": ["Windows"]
    },
    {
      "id": "9",
      "imageUrl": "https://utfs.io/f/P7JeVg86bGVgrmww9tKDQXvcpidKqhH6tJzso2e5bZW4VI0f",
      "name": "Neo_Cat",
      "desc": "Вы кот...НЕО КОТ!!! Вы выбрали красную таблетку и отправляетесь в матрицу, чтобы излечить её от багов. По мере прохождения изучайте новые механики, чтобы устранять баги эффективнее. Вперёд НЕО КОТ, я в тебя верю!",
      "ganre": "Приключение",
      "tags": ["MosPolyJam2019"],
      "devTeamId": "1",
      "rating": 2.1,
      "views": 1840,
      "reviews": 459,
      "publishDate": "2022-08-04",
      "platform": "Web",
      "set": ["Отзывы"]
    },
    {
      "id": "10",
      "imageUrl": "https://utfs.io/f/P7JeVg86bGVgJqwtmqBGTZBN0OI3hwbXV9U6p2G8tLY5ReED",
      "name": "Emotionary",
      "desc": "Иногда бывает намного легче, если выбор делают за тебя. Ты не знаешь как реагировать на ту или иную ситуацию. А теперь попробуй окунуться в тело другого человека и решить судьбу его жизни. Выбирай эмоции наиболее подходящие под ситуации, если повезет , то пройдешь до конца, если нет пробуй и пробуй заново.",
      "ganre": "Карточная",
      "tags": [],
      "devTeamId": "4",
      "rating": 2.0,
      "views": 5212,
      "reviews": 39,
      "publishDate": "2023-05-27",
      "platform": "Web",
      "set": ["Windows"]
    },
    {
      "id": "11",
      "imageUrl": "https://utfs.io/f/P7JeVg86bGVgrmww9tKDQXvcpidKqhH6tJzso2e5bZW4VI0f",
      "name": "Neo_Cat",
      "desc": "Вы кот...НЕО КОТ!!! Вы выбрали красную таблетку и отправляетесь в матрицу, чтобы излечить её от багов. По мере прохождения изучайте новые механики, чтобы устранять баги эффективнее. Вперёд НЕО КОТ, я в тебя верю!",
      "ganre": "Пазл",
      "tags": ["MosPolyJam2023"],
      "devTeamId": "1",
      "rating": 3.9,
      "views": 2396,
      "reviews": 317,
      "publishDate": "2022-07-25",
      "platform": "Mobile",
      "set": ["Просмотры"]
    },
    {
      "id": "12",
      "imageUrl": "https://utfs.io/f/P7JeVg86bGVgJqwtmqBGTZBN0OI3hwbXV9U6p2G8tLY5ReED",
      "name": "Emotionary",
      "desc": "Иногда бывает намного легче, если выбор делают за тебя. Ты не знаешь как реагировать на ту или иную ситуацию. А теперь попробуй окунуться в тело другого человека и решить судьбу его жизни. Выбирай эмоции наиболее подходящие под ситуации, если повезет , то пройдешь до конца, если нет пробуй и пробуй заново.",
      "ganre": "Спортивная",
      "tags": ["MosPolyJam2020"],
      "devTeamId": "4",
      "rating": 2.2,
      "views": 8133,
      "reviews": 450,
      "publishDate": "2023-02-25",
      "platform": "Web",
      "set": ["Mobile"]
    },
    {
      "id": "13",
      "imageUrl": "https://utfs.io/f/P7JeVg86bGVg5ph6qCLhJ3xzpt6MDr4lIu9ymabqiFojHn1e",
      "name": "Simulation 23/3",
      "desc": "Платформер-головоломка с уровнями на логику и смекалку.",
      "ganre": "Ролевая",
      "tags": [],
      "devTeamId": "6",
      "rating": 1.3,
      "views": 3148,
      "reviews": 372,
      "publishDate": "2021-07-24",
      "platform": "Mobile",
      "set": ["Windows"]
    },
    {
      "id": "14",
      "imageUrl": "https://utfs.io/f/P7JeVg86bGVgrmww9tKDQXvcpidKqhH6tJzso2e5bZW4VI0f",
      "name": "Neo_Cat",
      "desc": "Вы кот...НЕО КОТ!!! Вы выбрали красную таблетку и отправляетесь в матрицу, чтобы излечить её от багов. По мере прохождения изучайте новые механики, чтобы устранять баги эффективнее. Вперёд НЕО КОТ, я в тебя верю!",
      "ganre": "Ролевая",
      "tags": [],
      "devTeamId": "1",
      "rating": 3.2,
      "views": 3742,
      "reviews": 86,
      "publishDate": "2022-10-26",
      "platform": "Windows",
      "set": ["Рейтинг"]
    },
    {
      "id": "15",
      "imageUrl": "https://utfs.io/f/P7JeVg86bGVgrmww9tKDQXvcpidKqhH6tJzso2e5bZW4VI0f",
      "name": "Neo_Cat",
      "desc": "Вы кот...НЕО КОТ!!! Вы выбрали красную таблетку и отправляетесь в матрицу, чтобы излечить её от багов. По мере прохождения изучайте новые механики, чтобы устранять баги эффективнее. Вперёд НЕО КОТ, я в тебя верю!",
      "ganre": "Шутер",
      "tags": [],
      "devTeamId": "1",
      "rating": 3.0,
      "views": 1137,
      "reviews": 352,
      "publishDate": "2022-11-01",
      "platform": "Web",
      "set": ["Windows"]
    },
    {
      "id": "16",
      "imageUrl": "https://utfs.io/f/P7JeVg86bGVgrmww9tKDQXvcpidKqhH6tJzso2e5bZW4VI0f",
      "name": "Neo_Cat",
      "desc": "Вы кот...НЕО КОТ!!! Вы выбрали красную таблетку и отправляетесь в матрицу, чтобы излечить её от багов. По мере прохождения изучайте новые механики, чтобы устранять баги эффективнее. Вперёд НЕО КОТ, я в тебя верю!",
      "ganre": "Спортивная",
      "tags": ["MosPolyJam2022"],
      "devTeamId": "1",
      "rating": 1.9,
      "views": 8023,
      "reviews": 195,
      "publishDate": "2019-07-11",
      "platform": "Windows",
      "set": ["Mobile"]
    },
    {
      "id": "17",
      "imageUrl": "https://utfs.io/f/P7JeVg86bGVgrmww9tKDQXvcpidKqhH6tJzso2e5bZW4VI0f",
      "name": "Neo_Cat",
      "desc": "Вы кот...НЕО КОТ!!! Вы выбрали красную таблетку и отправляетесь в матрицу, чтобы излечить её от багов. По мере прохождения изучайте новые механики, чтобы устранять баги эффективнее. Вперёд НЕО КОТ, я в тебя верю!",
      "ganre": "Приключение",
      "tags": [],
      "devTeamId": "1",
      "rating": 3.4,
      "views": 6010,
      "reviews": 943,
      "publishDate": "2022-07-21",
      "platform": "Web",
      "set": ["Рейтинг"]
    },
    {
      "id": "18",
      "imageUrl": "https://utfs.io/f/P7JeVg86bGVgJqwtmqBGTZBN0OI3hwbXV9U6p2G8tLY5ReED",
      "name": "Emotionary",
      "desc": "Иногда бывает намного легче, если выбор делают за тебя. Ты не знаешь как реагировать на ту или иную ситуацию. А теперь попробуй окунуться в тело другого человека и решить судьбу его жизни. Выбирай эмоции наиболее подходящие под ситуации, если повезет , то пройдешь до конца, если нет пробуй и пробуй заново.",
      "ganre": "Шутер",
      "tags": ["MosPolyJam2023"],
      "devTeamId": "4",
      "rating": 3.5,
      "views": 1362,
      "reviews": 511,
      "publishDate": "2019-04-14",
      "platform": "Web",
      "set": ["Последнее"]
    },
    {
      "id": "19",
      "imageUrl": "https://utfs.io/f/P7JeVg86bGVgJqwtmqBGTZBN0OI3hwbXV9U6p2G8tLY5ReED",
      "name": "Emotionary",
      "desc": "Иногда бывает намного легче, если выбор делают за тебя. Ты не знаешь как реагировать на ту или иную ситуацию. А теперь попробуй окунуться в тело другого человека и решить судьбу его жизни. Выбирай эмоции наиболее подходящие под ситуации, если повезет , то пройдешь до конца, если нет пробуй и пробуй заново.",
      "ganre": "Ролевая",
      "tags": [],
      "devTeamId": "4",
      "rating": 4.0,
      "views": 8652,
      "reviews": 356,
      "publishDate": "2023-09-14",
      "platform": "Mobile",
      "set": ["Web"]
    },
    {
      "id": "20",
      "imageUrl": "https://utfs.io/f/P7JeVg86bGVgJqwtmqBGTZBN0OI3hwbXV9U6p2G8tLY5ReED",
      "name": "Emotionary",
      "desc": "Иногда бывает намного легче, если выбор делают за тебя. Ты не знаешь как реагировать на ту или иную ситуацию. А теперь попробуй окунуться в тело другого человека и решить судьбу его жизни. Выбирай эмоции наиболее подходящие под ситуации, если повезет , то пройдешь до конца, если нет пробуй и пробуй заново.",
      "ganre": "Спортивная",
      "tags": ["MosPolyJam2023"],
      "devTeamId": "4",
      "rating": 2.1,
      "views": 1543,
      "reviews": 602,
      "publishDate": "2021-03-07",
      "platform": "Web",
      "set": ["Последнее"]
    },
    {
      "id": "21",
      "imageUrl": "https://utfs.io/f/P7JeVg86bGVg5mQpZMLhJ3xzpt6MDr4lIu9ymabqiFojHn1e",
      "name": "Fisher's Treasures",
      "desc": "Рыбалка расслабляет, повышая вашу бдительность и концентрацию. Стань настоящим рыбаком и повышай свой уровень умения ловить рыбу!",
      "ganre": "Ролевая",
      "tags": [],
      "devTeamId": "2",
      "rating": 2.1,
      "views": 6473,
      "reviews": 104,
      "publishDate": "2023-02-13",
      "platform": "Windows",
      "set": ["Рейтинг"]
    },
    {
      "id": "22",
      "imageUrl": "https://utfs.io/f/P7JeVg86bGVg5ph6qCLhJ3xzpt6MDr4lIu9ymabqiFojHn1e",
      "name": "Simulation 23/3",
      "desc": "Платформер-головоломка с уровнями на логику и смекалку.",
      "ganre": "Карточная",
      "tags": [],
      "devTeamId": "6",
      "rating": 4.0,
      "views": 2878,
      "reviews": 656,
      "publishDate": "2022-03-28",
      "platform": "Mobile",
      "set": ["Mobile"]
    }]}`)

    const [gamesList, setGamesList] = useState<GamesListData[]>([])
    const [adSliderGames, setAdSliderGames] = useState<Game[]>([])

    // Вспомогательная функция задержки
    const delay = (ms: number) =>
        new Promise((resolve) => setTimeout(resolve, ms))

    /* Запрос для AdSlider — 5 самых популярных по выбранным жанрам */
    const fetchAdSliderGames = async (): Promise<void> => {
        try {
            await delay(200)
            setAdSliderGames(DATA.games.slice(0, 5)) // берём первые 4 игры
        } catch (error) {
            console.error('Ошибка при загрузке AdSlider игр:', error)
        }
    }

    /* Запрос для GamesList */
    const fetchGamesList = async (): Promise<void> => {
        try {
            await delay(200)

            const formattedData: GamesListData = {
                title: `Лучшие представители ${selectedGenre === 'all' ? 'всех жанров' : `жанра ${selectedGenre}`}${selectedSet === 'all' ? '' : `, набор ${selectedSet}`}`,
                games: DATA.games,
            }

            setGamesList([formattedData])
        } catch (error) {
            console.error('Ошибка при загрузке списка игр:', error)
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                changeLoadingState(true)

                await fetchAdSliderGames()
                await fetchGamesList()
            } catch (error) {
                console.error('Error fetching data:', error)
            } finally {
                changeLoadingState(false)
            }
        }

        fetchData()
    }, [selectedGenre, selectedSet])

    return (
        <>
            {!isLoading ? (
                <AdSlider games={adSliderGames} />
            ) : (
                <SkeletonSlider />
            )}
            {!isLoading ? (
                gamesList.map((list, index) => (
                    <GamesList
                        title={list.title}
                        games={list.games}
                        key={index}
                    />
                ))
            ) : (
                <SkeletonGamesList title={''} />
            )}
        </>
    )
}

export default CatalogGamesContent
