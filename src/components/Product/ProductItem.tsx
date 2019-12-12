import React from 'react';

const ProductItem: React.FC = (product: any) => {
    return (
        <>
            <span>{ product.name }</span>
        </>
    );
}

export default ProductItem;