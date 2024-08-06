import placePic from './assets/wall.jpg'

function Card(){
    return(
        <div className="card">
            <img alt="example picture" src={placePic}></img>
            <h2>Heading of the card</h2>
            <p>This is a random paragraph to test out things</p>
        </div>
    );
}

export default Card