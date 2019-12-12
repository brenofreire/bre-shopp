import React from 'react';

import Header from '../components/Header/Header';

// import ProductsMock from '../mocks/ProductsMock';

class ProductPage extends React.Component {
    public style = {
        maxWidth: '768px',
        margin: '0 auto',
        background: '#f5f5f5'
    }
    render() {
        return (
            <div style={this.style}>
                <Header />
                <h1>Produtão</h1>
            </div>
        );
    }
}

export default ProductPage;