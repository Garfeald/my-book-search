import {BooksSearchActionTypes, IBooks, IBooksStore, ITotalItams} from "../types";

export const getBooksState = ():ITotalItams => ({
    totalItems: null,
    isLoading: false,
    searchValue: ''
})

export const totalItemsReducer = (
    state: ITotalItams = getBooksState(),
    action: BooksSearchActionTypes): ITotalItams => {
    switch (action.type) {
        case "FETCH_BOOK_BY_ID_ASYNC":
            return {
                ...state,
                isLoading: true,
                searchValue: action.payload
            }
        case "ADD_TOTAL_ITEMS":
            return {
                ...state,
                isLoading: false,
                totalItems: action.payload
            }
        default:
            return state;
    }
}