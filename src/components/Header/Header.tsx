import React, { useEffect } from 'react';
import { observer } from "mobx-react-lite" 
import { useStores } from '../../stores/RootStore';

const Header: React.FC = () => {
    const { generalStore } = useStores();    
    
    const { productsOnCart, cartValue } = generalStore;

    return (
        <header style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h1>Bre-shopp</h1>
            <span style={{ alignSelf: 'center' }}>
                {productsOnCart} itens {' '}
                {cartValue}$
            </span>
        </header>
    );
}

export default observer(Header);