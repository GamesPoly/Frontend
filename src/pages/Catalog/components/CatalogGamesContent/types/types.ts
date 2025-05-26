export type Game = {
    id: string
    imageUrl: string
    name: string
    desc: string
    ganre: string
    tags: string[]
    devTeamId: string
    rating: number
    views: number
    reviews: number
    publishDate: string
    platform: 'Web' | 'Mobile' | 'Windows'
    set: string[]
}

export type GamesListData = {
    title: string
    games: Game[]
}
