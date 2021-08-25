import React, { ReactElement } from 'react';
import { CardsList } from '../components/CardsList';
import Menu from '../components/Menu';
import {useSelector} from "react-redux";
import {AppState} from "../redux/reducers/rootReducer";
import {IBooksStore} from "../redux/types";
import {Loader} from "../components/Loader";

export const Main = (): ReactElement => {

    const { isLoading } = useSelector<AppState, IBooksStore>(state => state.books)

    return (
        <div>
            <Menu />
            {isLoading ? <Loader/> : <CardsList />}
        </div>
    )
}