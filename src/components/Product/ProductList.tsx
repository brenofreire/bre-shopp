import React from 'react';

import ProductItem from './ProductItem';

interface IProps {
    products: Array<any>,
}

const ProductList: React.FC<IProps> = (props: IProps) => {
    const {
        products
    } = props;
    return (
        <div>
            {
                products.map((product, index) =>
                    <ProductItem key={index} product={product} />
                )
            }
        </div>
    );
}

export default ProductList;