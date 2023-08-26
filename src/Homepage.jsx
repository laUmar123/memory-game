import './styles/homepage.css'

export default function Homepage(prop) {
    return (
        <div className="homepage">
            <img src="../public/aot-logo.png" alt="The attack on titan logo" />
            <h1>Memory Game</h1>
            <button onClick={prop.handleClick}>Start Game</button>
        </div>
    )
}