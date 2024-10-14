const Card = ({ eeveeLution }) => {
    const { sprite, name, type } = eeveeLution;
    return (
        <div>
            <img src={sprite} alt={name} />
            <h2>{name}</h2>
            <p>Type: {type}</p>
        </div>
    );
};

export default Card;
