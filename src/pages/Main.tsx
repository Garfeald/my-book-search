import React, { ReactElement } from 'react';
import { CardsList } from '../components/CardsList';
import Menu from '../components/Menu';

export const Main = (): ReactElement => {
    return (
        <div>
            <Menu />
            <CardsList />
        </div>
    )
}