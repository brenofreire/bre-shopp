import React, { useState } from 'react';
import { useStores } from '../../stores/RootStore';

interface IProps {
    product: any;
}

const ProductSingle: React.FC<IProps> = (props) => {
    const { generalStore } = useStores();
    const { product } = props;

    const [cor, setCor ] = useState(0);
    
    const addToCart = (price: number) => {
        generalStore.setCartInfo(price);  
    }

    const changesColor = (direction: string) => {
        direction === 'next' ? setCor(cor+1) : setCor(cor-1);
    } 

    return (
        <div style={{ textAlignLast: 'center' }}>
            <h1>{product.name}</h1>
            <img src="https://picsum.photos/250" alt="Lorem pic" style={{ border: `5px solid ${product.options.color[cor]}`}}/><br />
            <button onClick={() => changesColor('prev')}>{'<'}</button>
            <button onClick={() => changesColor('next')}>{'>'}</button>
            <p>{product.description}</p>
            <hr />
            <button onClick={() => addToCart(product.price)}>{product.price} Adicionar ao carrinho</button>
        </div>
    );
}

export default ProductSingle;