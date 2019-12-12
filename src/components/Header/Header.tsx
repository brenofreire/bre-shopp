import React, { useEffect } from 'react';
import { observer } from "mobx-react-lite" 
import { useStores } from '../../stores/RootStore';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

const Header: React.FC = props => {
    const { generalStore } = useStores();    
    
    const { productsOnCart, cartValue } = generalStore;

    const rendersBackBuck = () => {
        if(window.location.pathname != '/') {
            return <Link to='/'>Voltar</Link>
        } else {
            return null;
        }
    }

    return (
        <header style={{ display: 'flex', justifyContent: 'space-between' }}>
            {rendersBackBuck()}
            <h1>Bre-shopp</h1>
            <span style={{ alignSelf: 'center' }}>
                {productsOnCart} itens {' '}
                {cartValue}$
            </span>
        </header>
    );
}

export default observer(Header);