import React from 'react';
import { Link } from 'react-router-dom';

interface IProps {
    product: any,
    key: number,
}

// do not mind the inline css please
const ProductItem: React.FC<IProps> = props => {
    const { product } = props;
    return (
        <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: '#333'}}>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                <div style={{ background: '#fff', minWidth: '200px', flex: '1 1 200px' }}>
                    <img src="https://picsum.photos/200" alt="Lorem pic" />
                </div>
                <div style={{ flex: '3 1 calc(768px - 300px)', fill: 'fill'}}>
                    <span><b>{product.name}</b></span>
                    <p>{product.description}</p>
                </div>
            </div>
        </Link>
    );
}

export default ProductItem;