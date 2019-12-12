import React from 'react';

import Header from '../components/Header/Header';
import ProductList from '../components/Product/ProductList';

import ProductsMock from '../mocks/ProductsMock';

class HomePage extends React.Component {
    public style = {
        maxWidth: '768px',
        margin: '0 auto',
        background: '#f5f5f5',
        padding: '0px 15px',
    }
    render() {
        return (
            <div style={this.style}>
                <Header />
                <ProductList products={ProductsMock} />
            </div>
        );
    }
}

export default HomePage;