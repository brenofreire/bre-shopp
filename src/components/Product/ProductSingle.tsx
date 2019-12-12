import React from 'react';
import { useStores } from '../../stores/RootStore';

interface IProps {
    product: any;
}

const ProductSingle: React.FC<IProps> = (props) => {
    const { generalStore } = useStores();
    const { product } = props;
    
    const addToCart = (price: number) => {
        generalStore.setCartInfo(price);  
        console.log('>>>', generalStore.productsOnCart, generalStore.cartValue);
    }
    return (
        <div style={{ textAlignLast: 'center' }}>
            <h1>{product.name}</h1>
            <img src="https://picsum.photos/250" alt="Lorem pic" />
            <p>{product.description}</p>
            <hr />
            <button onClick={() => addToCart(product.price)}>{product.price} Adicionar ao carrinho</button>
        </div>
    );
}

export default ProductSingle;