/* eslint-disable no-unused-vars */
import React from "react"
import './styles/header.css'

export default function Header(prop) {
    return (
        <header>
            <img onClick={prop.handleClick} src="../public/aot-logo.png" alt="The attack on titan logo" />
            <div className="scoreboard">
                <h3 className="score-tracker score">Score: {prop.score}</h3>
                <h3 className="score-trakeer best-score">Best Score: {prop.score > prop.bestScore ? prop.score : prop.bestScore}</h3>
            </div>
        </header>
    )
}