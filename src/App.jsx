import Header from "./Header"
import Homepage from "./Homepage"
import Footer from "./Footer"
import React from "react"
import Game from "./Game"
import Card from "./Card"
import { characters } from "./Characters"

function App() {
    const [showHeader, setShowHeader] = React.useState(false)
    const [showHomepage, setShowHomepage] = React.useState(true)
    const [showGame, setShowGame] = React.useState(false)
    const [score, setScore] = React.useState(0)
    const [bestScore, setBestScore] = React.useState(0)
    const [allCharacters, setAllCharacters] = React.useState(characters)

    React.useEffect(() => {
        if (localStorage.getItem('bestScore')) {
            setBestScore(localStorage.getItem('bestScore'))
        }
    }, [])

    React.useEffect(() => {
        if (localStorage.getItem('bestScore') && score >= localStorage.getItem('bestScore')) {
            localStorage.setItem('bestScore', score)
        } else if (localStorage.getItem('bestScore') && bestScore > localStorage.getItem('bestScore')) {
            localStorage.setItem('bestScore', bestScore)
        }
    }, [score, bestScore])
}

export default App
