const ItemCard = ({ image, title, price, category, user }) => {
    return (
        <div className='card glass w-full h-full'>
            <figure className='h-3/4'>
                <img className='w-full h-full' src={image} alt={title} />
            </figure>
            <div className='card-body'>
                <h2 className='card-title'>{title}</h2>
                <p>Price: ${price.toFixed(2)}</p>
                <div className='card-actions justify-end items-center'>
                    <p>{category}</p>
                    {user && (
                        <button className='btn btn-secondary'>
                            Add to cart
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ItemCard;
