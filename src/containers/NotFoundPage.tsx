import React from 'react';

import Header from '../components/Header/Header';

class NotFoundPage extends React.Component {
    public style = {
        maxWidth: '1280px',
        margin: '0 auto',
        background: '#f5f5f5'
    }
    render() {
        return (
            <div style={this.style}>
                <Header />
                <h1>Eu num achei foi nada...</h1>
            </div>
        );
    }
}

export default NotFoundPage;