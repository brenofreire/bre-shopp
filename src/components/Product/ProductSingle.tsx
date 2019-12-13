import React, { useState } from 'react';
import { useStores } from '../../stores/RootStore';

interface IProps {
    product: any;
}

const ProductSingle: React.FC<IProps> = (props) => {
    const { generalStore } = useStores();
    const { product } = props;

    const [indexCor, setIndexCor] = useState(0);

    const addToCart = (price: number) => {
        generalStore.setCartInfo(price);
    }

    const changesColor = (direction: string) => {
        if (direction === 'next') {
            if (product.options.color[indexCor + 1]) {
                return setIndexCor(indexCor + 1);
            } 
            return setIndexCor(0);
        } else {
            if (product.options.color[indexCor - 1]) {
                return setIndexCor(indexCor - 1);
            }
            return setIndexCor(product.options.color.length -1);
        }
    }

    return (
        <div style={{ textAlignLast: 'center' }}>
            <h1>{product.name}</h1>
            <img src="https://picsum.photos/250" alt="Lorem pic" style={{ border: `5px solid ${product.options.color[indexCor]}` }} /><br />
            <button onClick={() => changesColor('prev')}>{'<'}</button>
            <button onClick={() => changesColor('next')}>{'>'}</button>
            <p>{product.description}</p>
            <hr />
            <button onClick={() => addToCart(product.price)}>{product.price} Adicionar ao carrinho</button>
        </div>
    );
}

export default ProductSingle;