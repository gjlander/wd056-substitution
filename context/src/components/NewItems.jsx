import { useState, useEffect } from 'react';

import { getProducts } from '../lib/fakeStore';
import ItemCard from '../components/ItemCard';

const NewItems = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts()
            .then((data) => setProducts(data))
            .catch((error) => console.error(error));
    }, []);
    return (
        <div className='p-4'>
            <h2 className='text-4xl mb-6'>Check out our new arrivals</h2>
            <div className='grid grid-cols-4 auto-rows-min gap-8 w-3/4  m-auto'>
                {products &&
                    products.map((product) => {
                        return <ItemCard key={product.id} {...product} />;
                    })}
            </div>
        </div>
    );
};

export default NewItems;
