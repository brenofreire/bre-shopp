import React from 'react';
import { observer } from "mobx-react-lite"
import { useStores } from '../../stores/RootStore';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const Header: React.FC = props => {
    const { generalStore } = useStores();

    const { productsOnCart, cartValue } = generalStore;

    const StyledLink = styled(Link)`
        background: #fff;
        border-radius: 10px;
        border: 0px;
        box-shadow: 0px 3px 3px #eee;
        color: #333;
        align-self: center;
        padding: 5px;
        text-decoration: none;
    `;

    const rendersBackBuck = () => {
        if (window.location.pathname != '/') {
            return <StyledLink to='/'>← Voltar</StyledLink>
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