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
                    <div key={index} style={{ display: 'flex' }}>
                        <div style={{background: '#fff', minWidth: '200px'}}>
                            <img src="https://picsum.photos/200" alt="Lorem pic" />
                        </div>
                        <div>
                            <span><b>{product.name}</b></span>
                            <p>{product.description}</p>
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default ProductList;