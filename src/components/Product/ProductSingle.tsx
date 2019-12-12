import React from 'react';

interface IProps {
    product: any;
}

const ProductSingle: React.FC<IProps> = (props) => {
    const { product } = props;
    return (
        <div style={{ textAlignLast: 'center' }}>
            <h1>{product.name}</h1>
            <img src="https://picsum.photos/250" alt="Lorem pic" />
            <p>{product.description}</p>
            <hr />
            <button>{product.price} Adicionar ao carrinho</button>
        </div>
    );
}

export default ProductSingle;