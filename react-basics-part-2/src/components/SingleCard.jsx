const eevee = {
    id: 1,
    name: 'Eevee',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png',
    type: 'Normal',
};

const SingleCard = () => {
    return (
        <div>
            <img src={eevee.sprite} alt={eevee.name} />
            <h2>{eevee.name}</h2>
            <p>Type: {eevee.type}</p>
        </div>
    );
};

export default SingleCard;
