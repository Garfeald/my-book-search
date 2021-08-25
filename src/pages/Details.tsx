import { ReactElement } from "react";
import {BookDetails} from "../components/Details";
import {useSelector} from "react-redux";
import {AppState} from "../redux/reducers/rootReducer";
import {IBookDetails} from "../redux/types";
import {Loader} from "../components/Loader";

export const Details = ():ReactElement => {

    const { isLoading } = useSelector<AppState, IBookDetails>(state => state.bookDetails)


    return (
        <div>
            {isLoading ? <Loader/> : <BookDetails/>}
        </div>
    )
}