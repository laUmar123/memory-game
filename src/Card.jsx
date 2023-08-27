import "./styles/card.css"

export default function Card(prop) {
    return (
        <div className="card" id={prop.id} onClick={prop.handleClick}>
            <img src={prop.img} alt="" />
            <h3 className="character-name">{prop.name}</h3>
        </div>
    )
}