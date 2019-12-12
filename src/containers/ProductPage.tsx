import React from 'react';

import Header from '../components/Header/Header';
import ProductSingle from '../components/Product/ProductSingle';

import ProductsMock from '../mocks/ProductsMock';
import { Redirect } from 'react-router';

class ProductPage extends React.Component<any> {
    public style = {
        maxWidth: '768px',
        margin: '0 auto',
        background: '#f5f5f5',
        padding: '0px 15px',
    }
    render() {
        const { params } = this.props.match;
        const product = ProductsMock.find(item => item.id === Number(params.product_id));
        return (
            <div style={this.style}>
                <Header />
                { product ?
                    <ProductSingle product={product} />
                    : <Redirect to={'/404'} />
                }
            </div>
        );
    }
}

export default ProductPage;